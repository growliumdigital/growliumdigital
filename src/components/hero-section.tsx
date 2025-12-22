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

  // Stats Counters
  const [counts, setCounts] = useState({
    years: 0,
    campaigns: 0,
    quality: 0,
    conversion: 0,
  });

  useEffect(() => {
    const targets = { years: 5, campaigns: 550, quality: 95, conversion: 80 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = Object.keys(targets).map((key) => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const increment = Math.ceil(target / steps);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts((prev) => ({ ...prev, [key]: current }));
      }, interval);

      return timer;
    });

    return () => timers.forEach(clearInterval);
  }, []);

  const stats = [
    { label: "Results-Driven Campaigns", value: counts.campaigns, suffix: "+" },
    { label: "High-Quality Data", value: counts.quality, suffix: "%" },
    { label: "Lead Conversion Rate", value: counts.conversion, suffix: "%" },
  ];

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

      {/* Modern Stats Bar - Positioned Below Content */}
      <div className="mt-auto pb-2">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-3 md:p-4 mx-auto max-w-6xl border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/90 hover:bg-white/100 transition"
              >
                <div className="relative w-12 h-12 mb-2">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray={`${stat.value}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {stat.value}
                    {stat.suffix}
                  </div>
                </div>
                <p className="text-xs text-gray-700 text-center leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
