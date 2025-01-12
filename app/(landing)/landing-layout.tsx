"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import SplashScreen from "../components/SplashScreen";
import "./landing-page.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptsLoaded, setScriptsLoaded] = useState(0);
  const totalScripts = 7; // Total number of scripts we're loading

  const handleScriptLoad = () => {
    setScriptsLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    // Check if all scripts are loaded
    if (scriptsLoaded === totalScripts) {
      // Give extra time for other resources to load
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [scriptsLoaded]);

  return (
    <>
      {isLoading && <SplashScreen onLoadComplete={() => setIsLoading(false)} />}

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <NextTopLoader color="#29a8bf" height={5} showSpinner={false} />
        {children}
      </div>

      {/* jQuery must load first */}
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />

      <Script
        src="/assets/js/bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />

      {/* Scripts that depend on jQuery */}
      <Script
        src="/assets/js/video_link.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <Script
        src="/assets/js/video.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <Script
        src="/assets/js/counter.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <Script
        src="/assets/js/custom.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <Script
        src="/assets/js/animation_links.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <Script
        src="/assets/js/animation.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
}
