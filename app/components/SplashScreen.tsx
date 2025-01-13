"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({
  onLoadComplete,
}: {
  onLoadComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 500); // Give a small delay after 100%
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b  from-cyan-500 via-cyan-700 to-zinc-900">
      <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative mb-6">
        <Image
          src="/lottie.gif"
          alt="Loading animation"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-64 bg-white/20 rounded-full h-2 mb-4">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-white text-sm font-medium">Loading... {progress}%</p>
    </div>
  );
}
