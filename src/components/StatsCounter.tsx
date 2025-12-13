"use client";

import { useState, useEffect } from "react";

export default function StatsCounter() {
  const [counts, setCounts] = useState({
    years: 0,
    campaigns: 0,
    quality: 0,
    conversion: 0,
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      years: 10,
      campaigns: 750,
      quality: 95,
      conversion: 80,
    };

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

    return () => {
      timers.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-500 rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold">{counts.years}+</h2>
            <p className="text-sm mt-1">Years of Experience</p>
          </div>

          <div className="border-l border-white/30 h-12 hidden md:block"></div>

          <div className="text-center">
            <h2 className="text-4xl font-bold">{counts.campaigns}+</h2>
            <p className="text-sm mt-1">Results-Driven Campaigns</p>
          </div>

          <div className="border-l border-white/30 h-12 hidden md:block"></div>

          <div className="text-center">
            <h2 className="text-4xl font-bold">{counts.quality}%</h2>
            <p className="text-sm mt-1">High-Quality Data</p>
          </div>

          <div className="border-l border-white/30 h-12 hidden md:block"></div>

          <div className="text-center">
            <h2 className="text-4xl font-bold">{counts.conversion}%</h2>
            <p className="text-sm mt-1">High-Velocity Lead Conversion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
