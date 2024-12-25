"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Home,
  Search,
  Layers,
  Keyboard,
  Mic,
  CircleStopIcon as Stop,
} from "lucide-react";
import useWebRTCAudioSession from "@/hooks/use-webrtc";
import { TokenUsageDisplay } from "./_components/TokenUsageDisplay";
import { MessageControls } from "./_components/MessageControls";
import { StatusDisplay } from "./_components/StatusDisplay";

export default function VoiceAssistant() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [voice, setVoice] = useState("alloy");
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
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = 140;
    const innerRadius = 120;

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw outer circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(8, 145, 178, 0.2)";
      ctx.fill();

      // Draw inner circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(8, 145, 178, 0.6)";
      ctx.fill();

      // Draw volume indicator
      if (isSessionActive) {
        const indicatorRadius =
          innerRadius + (outerRadius - innerRadius) * currentVolume;
        ctx.beginPath();
        ctx.arc(centerX, centerY, indicatorRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(8, 145, 178, 0.8)";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [isSessionActive, currentVolume]);

  return (
    <div className="mt-4 flex flex-col items-center justify-between p-8">
      <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-md w-full">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="w-[300px] h-[300px]"
            style={{ filter: "drop-shadow(0 0 10px rgba(8, 145, 178, 0.2))" }}
          />
        </div>

        <div className="text-center space-y-4">
          <p className="text-cyan-600">
            What&apos;s the price of hoverboard ...
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

      <div className="mt-20 w-full max-w-xs">
        <nav className="bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 backdrop-blur-sm rounded-3xl p-2 py-5 shadow-lg">
          <ul className="flex justify-between items-center px-6">
            {[Home, Search, Layers, Keyboard].map((Icon, index) => (
              <li key={index}>
                <button className="text-white/80 hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <StatusDisplay status={status} />

      <div className="mt-8 w-full max-w-md">
        <TokenUsageDisplay messages={msgs} />
        <MessageControls conversation={conversation} msgs={msgs} />
      </div>
    </div>
  );
}
