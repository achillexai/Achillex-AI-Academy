"use client";

import { useState, useRef, useEffect } from "react";
import { Conversation } from "@/lib/conversations";

const useWebRTCAudioSession = (voice: string) => {
  const [status, setStatus] = useState("");
  const [isSessionActive, setIsSessionActive] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const [msgs, setMsgs] = useState<any[]>([]);
  const [conversation, setConversation] = useState<any[]>([]);
  const [currentVolume, setCurrentVolume] = useState(0);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const volumeIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => stopSession();
  }, []);

  const getEphemeralToken = async () => {
    const response = await fetch("/api/realtime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.client_secret.value;
  };

  const setupAudioVisualization = (stream: MediaStream) => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyzer = audioContext.createAnalyser();
    analyzer.fftSize = 256;

    source.connect(analyzer);
    analyserRef.current = analyzer;

    audioContextRef.current = audioContext;
  };

  const getVolume = (): number => {
    if (!analyserRef.current) return 0;

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteTimeDomainData(dataArray);

    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const float = (dataArray[i] - 128) / 128;
      sum += float * float;
    }

    return Math.sqrt(sum / dataArray.length);
  };

  const startSession = async () => {
    try {
      setStatus("Requesting microphone access...");

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;
      setupAudioVisualization(stream);

      setStatus("Fetching ephemeral token...");
      const ephemeralToken = await getEphemeralToken();

      setStatus("Establishing connection...");

      const pc = new RTCPeerConnection();
      const audioEl = document.createElement("audio");
      audioEl.autoplay = true;

      pc.ontrack = (e) => {
        audioEl.srcObject = e.streams[0];

        volumeIntervalRef.current = window.setInterval(() => {
          const volume = getVolume();
          setCurrentVolume(volume);
        }, 100);
      };

      const dataChannel = pc.createDataChannel("response");
      dataChannelRef.current = dataChannel;

      dataChannel.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);

          if (msg.type === "response.audio_transcript.delta") {
            const newMessage: Conversation = {
              role: "assistant",
              text: msg.delta,
              timestamp: new Date().toISOString(),
              isFinal: false,
            };

            setConversation((prev) => {
              const lastMsg = prev[prev.length - 1];
              if (lastMsg && !lastMsg.isFinal && lastMsg.role === "assistant") {
                const updatedMessages = [...prev];
                updatedMessages[prev.length - 1] = {
                  ...lastMsg,
                  text: lastMsg.text + msg.delta,
                };
                return updatedMessages;
              } else {
                return [...prev, newMessage];
              }
            });
          }

          if (msg.type === "response.audio_transcript.done") {
            setConversation((prev) => {
              const updatedMessages = [...prev];
              if (updatedMessages.length > 0) {
                updatedMessages[updatedMessages.length - 1].isFinal = true;
              }
              return updatedMessages;
            });
          }

          if (msg.type === "input_audio_buffer.committed") {
            const userMessage: Conversation = {
              role: "user",
              text: msg.transcript || "",
              timestamp: new Date().toISOString(),
              isFinal: true,
            };
            setConversation((prev) => [...prev, userMessage]);
          }

          setMsgs((prevMsgs) => [...prevMsgs, msg]);
        } catch (error) {
          console.error("Error handling data channel message:", error);
        }
      };

      pc.addTrack(stream.getTracks()[0]);

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const baseUrl = "https://api.openai.com/v1/realtime";
      const model = "gpt-4o-realtime-preview-2024-12-17";
      const response = await fetch(`${baseUrl}?model=${model}&voice=${voice}`, {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${ephemeralToken}`,
          "Content-Type": "application/sdp",
        },
      });

      await pc.setRemoteDescription({
        type: "answer",
        sdp: await response.text(),
      });

      peerConnectionRef.current = pc;
      setIsSessionActive(true);
      setStatus("Session established successfully!");
    } catch (err) {
      console.error(err);
      setStatus(`Error: ${err}`);
      stopSession();
    }
  };

  const stopSession = () => {
    if (dataChannelRef.current) {
      dataChannelRef.current.close();
      dataChannelRef.current = null;
    }

    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach((track) => track.stop());
      audioStreamRef.current = null;
    }

    if (volumeIntervalRef.current) {
      clearInterval(volumeIntervalRef.current);
      volumeIntervalRef.current = null;
    }

    if (analyserRef.current) {
      analyserRef.current = null;
    }

    setCurrentVolume(0);
    setIsSessionActive(false);
    setStatus("");
    setMsgs([]);
    setConversation([]);
  };

  return {
    status,
    isSessionActive,
    startSession,
    stopSession,
    msgs,
    currentVolume,
    conversation,
  };
};

export default useWebRTCAudioSession;
