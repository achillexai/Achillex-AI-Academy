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
import { useMediaQuery } from "@/hooks/use-media-query";

export default function VoiceAssistant() {
  const [voice, setVoice] = useState("verse");
  const [showTranscriber, setShowTranscriber] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 700px)");
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
        className={`flex-1 flex flex-col items-center justify-between ${
          isMobile ? "p-2" : "p-6"
        }`}
        animate={{
          x: showTranscriber && !isMobile ? "-30%" : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className={`flex-1 flex flex-col items-center justify-center max-w-md w-full
          ${isMobile ? "gap-2" : "gap-4"}
          `}
        >
          <div
            className={`relative ${
              isMobile ? "w-[200px] h-[200px]" : "w-[300px] h-[300px]"
            }`}
          >
            <canvas
              ref={canvasRef}
              width={isMobile ? 300 : 300}
              height={isMobile ? 300 : 300}
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <Orb
                currentVolume={currentVolume}
                isSessionActive={isSessionActive}
              />
            </div>
          </div>

          <div
            className={`text-center ${isMobile ? "space-y-1" : "space-y-2"}`}
          >
            <p
              className={`text-muted-foreground ${
                isMobile ? "text-xs" : "text-sm"
              }`}
            >
              What do you want to learn today?
            </p>
            <p
              className={`font-light tracking-wide ${
                isMobile ? "text-base" : "text-2xl"
              }`}
            >
              {isSessionActive ? "Listening..." : "Tap microphone to start"}
            </p>
            <div
              className={`flex justify-center ${isMobile ? "mb-2" : "mb-6"}`}
            >
              <button
                onClick={handleStartStopClick}
                disabled={status === "Processing..."}
                className={`${
                  isMobile ? "w-10 h-10" : "w-16 h-16"
                } rounded-full transition-all duration-300 ease-in-out 
                  flex items-center justify-center cursor-pointer
                  ${
                    !isSessionActive
                      ? "bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 hover:bg-gradient-to-tl"
                      : "bg-gradient-to-br from-red-500 via-red-700 to-zinc-900 hover:bg-gradient-to-tl"
                  }
                `}
              >
                {isSessionActive ? (
                  <Stop
                    className={`${isMobile ? "w-6 h-6" : "w-8 h-8"} text-white`}
                  />
                ) : (
                  <Mic
                    className={`${isMobile ? "w-5 h-5" : "w-8 h-8"} text-white`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isMobile ? "mt-3 max-w-[26vh]" : "mt-10 max-w-xs"
          } w-full `}
        >
          <nav
            className={`bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 backdrop-blur-sm shadow-sm
            ${isMobile ? "p-2 py-1 rounded-2xl" : "p-2 py-3  rounded-3xl"}
            `}
          >
            <ul className="flex justify-between items-center px-4">
              <li>
                <button
                  className={`p-2 rounded-full transition-all duration-200 bg-white bg-opacity-20 shadow-inner ${
                    isMobile ? "scale-75" : ""
                  }`}
                >
                  <Home
                    className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-white`}
                  />
                </button>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className={`p-2 rounded-full transition-all duration-200 hover:bg-white hover:bg-opacity-10 ${
                        isMobile ? "scale-75" : ""
                      }`}
                    >
                      <Layers
                        className={`${
                          isMobile ? "w-5 h-5" : "w-6 h-6"
                        } text-white`}
                      />
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
                  } ${isMobile ? "scale-75" : ""}`}
                >
                  <Keyboard
                    className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-white`}
                  />
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
            initial={isMobile ? { y: "100%" } : { x: "100%" }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: "100%" } : { x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`
              ${
                isMobile
                  ? "w-full h-[40vh] shadow-xl fixed bottom-0 z-10 rounded-t-3xl"
                  : "w-5/12 fixed right-0 h-[91.5vh] lg:h-[85.5vh] rounded-l-[24px]"
              }
              bg-white shadow-xl overflow-hidden
            `}
          >
            <div
              className={`${isMobile ? "h-[40vh]" : "h-full"} overflow-y-auto`}
            >
              <ChatTranscriber conversation={conversation} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
