"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function useTypewriter(text: string, speed = 100) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return displayedText;
}

export default function HeroSection() {
  const fullText = "Power Your Sales Pipeline with\nQuality B2B Leads";
  const displayedText = useTypewriter(fullText, 80);

  // Stats removed to be placed in footer

  return (
    <section className="relative h-[80vh] flex flex-col justify-center overflow-hidden pt-32 md:pt-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.5)" }}
      >
        <source src="/images/homebg.mp4" type="video/mp4" />
      </video>

      {/* Content - Centered below header */}
      <div className="relative z-10 text-center text-white px-4 pt-12 md:pt-10 max-w-4xl mx-auto w-full">
        {/* Animated Headline (no cursor) */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          style={{ whiteSpace: "pre-line" }}
        >
          {displayedText}
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          We provide the infrastructure to move prospects
          from initial contact to successful business outcomes globally.
        </p>
      </div>


    </section>
  );
}
