"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hey there! I'm Clyra. Want to learn cool stuff? Let's chat on the dashboard!",
  "Hi friend! Clyra here. Ready to learn something new? Join me on the dashboard!",
  "Hello! I'm Clyra. Let's explore fun topics together. Meet me on the dashboard!",
  "Hey! Clyra from Achillex here. Excited to show you around. Shall we start?",
  "Hi there! I'm Clyra, your learning buddy. Ready for an adventure? Let's go!",
  "Welcome! Clyra here. Got questions? I've got answers. See you on the dashboard!",
  "Hey! It's Clyra. Want to see something awesome? Join me on the dashboard!",
  "Hello! Clyra here. Ready to learn and have fun? Let's chat on the dashboard!",
  "Hi! I'm Clyra. Curious about new things? Let's explore together on the dashboard!",
  "Hey there! Clyra here. Ready for some cool discoveries? Join me and let's chat!",
];

const AnimatedTextBox: React.FC = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTextAnimated, setIsTextAnimated] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomGreeting =
        greetings[Math.floor(Math.random() * greetings.length)];
      setText(randomGreeting);
      setIsVisible(true);
      speakText(randomGreeting);
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (speechSynthesisRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakText = (textToSpeak: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 1; // Slightly faster for more energy
      utterance.pitch = 1.1; // Slightly higher pitch for a younger, enthusiastic voice
      utterance.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (voice) => voice.name.includes("English") && voice.name.includes("Male")
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      speechSynthesisRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          onAnimationComplete={() => setIsTextAnimated(true)}
          className="relative bg-gradient-to-tr from-cyan-500 via-cyan-700 to-zinc-900 p-4 rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl shadow-lg max-w-md mr-4 z-10"
        >
          <AnimatePresence mode="wait">
            {isTextAnimated && (
              <motion.p
                key={text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-white"
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
  );
};

export default AnimatedTextBox;
