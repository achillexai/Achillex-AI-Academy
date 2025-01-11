"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const greetings = [
  "Hey there! I'm Clyra. Want to learn cool stuff? Let's chat on the dashboard!",
  "Greetings! Clyra here. Ready to learn something new? Join me on the dashboard!",
  "Hey! Clyra from Achillex here. Excited to show you around. Shall we start?",
  "Hi there! I'm Clyra, your learning buddy. Ready for an adventure? Let's go!",
  "Welcome! Clyra here. Got questions? I've got answers. See you on the dashboard!",
];

const audioFiles = [
  "/audio/response1.mp3",
  "/audio/response2.mp3",
  "/audio/response3.mp3",
  "/audio/response4.mp3",
  "/audio/response5.mp3",
];

const AnimatedTextBox: React.FC = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTextAnimated, setIsTextAnimated] = useState(false);
  const [audioSrc, setAudioSrc] = useState("");
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setText(greetings[randomIndex]);
      setAudioSrc(audioFiles[randomIndex]);
      setShowPermissionDialog(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnableAudio = async () => {
    setShowPermissionDialog(false);
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsVisible(true);
      } catch (error) {
        console.warn("Audio playback failed:", error);
        setIsVisible(true);
      }
    }
  };

  const handleSkipAudio = () => {
    setShowPermissionDialog(false);
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} style={{ display: "none" }} />
      <Dialog
        open={showPermissionDialog}
        onOpenChange={setShowPermissionDialog}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Clyra's Voice Awaits!</DialogTitle>
            <DialogDescription>
              Clyra, your AI buddy, is ready to speak. What would you like to
              do?
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={handleEnableAudio} className="w-full">
              Let's hear it!
            </Button>
            <Button
              onClick={handleSkipAudio}
              variant="outline"
              className="w-full"
            >
              Just show text
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            onAnimationComplete={() => setIsTextAnimated(true)}
            className="relative bg-gradient-to-tr from-cyan-500 via-cyan-700 to-zinc-900 p-4 md:p-6 rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl shadow-lg max-w-md mr-4 z-10"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-white/20"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            <AnimatePresence mode="wait">
              {isTextAnimated && (
                <motion.p
                  key={text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm md:text-lg text-white"
                >
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default dynamic(() => Promise.resolve(AnimatedTextBox), { ssr: false });
