"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Home,
  Layers,
  Keyboard,
  Mic,
  CircleStopIcon as Stop,
} from "lucide-react";
import useWebRTCAudioSession from "@/hooks/use-webrtc";
import { StatusDisplay } from "./_components/StatusDisplay";
import { VoiceSelector } from "./_components/VoiceSelector";
import { ChatTranscriber } from "./_components/ChatTranscriber";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Orb from "./_components/Orb";

export default function VoiceAssistant() {
  const [voice, setVoice] = useState("verse");
  const [showTranscriber, setShowTranscriber] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const {
    status,
    isSessionActive,
    startSession,
    stopSession,
    msgs,
    conversation,
    currentVolume,
  } = useWebRTCAudioSession(voice);

  const handleStartStopClick = useCallback(() => {
    if (isSessionActive) {
      stopSession();
    } else {
      startSession();
    }
  }, [isSessionActive, startSession, stopSession]);

  useEffect(() => {
    // Log token usage to console
    if (msgs.length > 0) {
      const lastMsg = msgs[msgs.length - 1];
      if (lastMsg.type === "response.done" && lastMsg.response?.usage) {
        console.log("Token Usage:", lastMsg.response.usage);
      }
    }
  }, [msgs]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = 140;

    // Draw static gradient circle
    const gradient = ctx.createLinearGradient(
      centerX - outerRadius,
      centerY - outerRadius,
      centerX + outerRadius,
      centerY + outerRadius
    );
    gradient.addColorStop(0, "#06b6d4"); // cyan-500
    gradient.addColorStop(0.5, "#0e7490"); // cyan-700
    gradient.addColorStop(1, "#18181b"); // zinc-900

    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
  }, []);

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex-1 flex flex-col items-center justify-between p-8 ml-8"
        animate={{ x: showTranscriber ? "-30%" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-md w-full">
          <div className="relative w-[300px] h-[300px]">
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <Orb
                currentVolume={currentVolume}
                isSessionActive={isSessionActive}
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground text-sm">
              What do you want to learn today?
            </p>
            <p className="text-2xl font-light tracking-wide">
              {isSessionActive ? "Listening..." : "Tap microphone to start"}
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={handleStartStopClick}
                disabled={status === "Processing..."}
                className={`w-16 h-16 rounded-full transition-all duration-300 ease-in-out 
                  flex items-center justify-center cursor-pointer
                  ${
                    !isSessionActive
                      ? "bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 hover:bg-gradient-to-tl"
                      : "bg-gradient-to-br from-red-500 via-red-700 to-zinc-900 hover:bg-gradient-to-tl"
                  }
                `}
              >
                {isSessionActive ? (
                  <Stop className={`w-8 h-8 text-white`} />
                ) : (
                  <Mic className={`w-8 h-8 text-white`} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 w-full max-w-xs">
          <nav className="bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 backdrop-blur-sm rounded-3xl p-2 py-4 shadow-lg">
            <ul className="flex justify-between items-center px-6">
              <li>
                <button className="p-2 rounded-full transition-all duration-200 bg-white bg-opacity-20 shadow-inner">
                  <Home className="w-6 h-6 text-white" />
                </button>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="p-2 rounded-full transition-all duration-200 hover:bg-white hover:bg-opacity-10">
                      <Layers className="w-6 h-6 text-white" />
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <VoiceSelector value={voice} onValueChange={setVoice} />
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <button
                  onClick={() => setShowTranscriber(!showTranscriber)}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    showTranscriber
                      ? "bg-white bg-opacity-20 shadow-inner"
                      : "hover:bg-white hover:bg-opacity-10"
                  }`}
                >
                  <Keyboard className="w-6 h-6 text-white" />
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <StatusDisplay status={status} />
      </motion.div>

      <AnimatePresence>
        {showTranscriber && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-5/12 h-full bg-white shadow-lg overflow-hidden fixed right-0 rounded-bl-3xl"
          >
            <ChatTranscriber conversation={conversation} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
