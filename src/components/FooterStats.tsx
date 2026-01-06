"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FooterStats() {
    const [counts, setCounts] = useState({
        years: 0,
        campaigns: 0,
        quality: 0,
        conversion: 0,
    });

    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (!startAnimation) return;

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
    }, [startAnimation]);

    const stats = [
        { label: "Results-Driven Campaigns", value: counts.campaigns, suffix: "+" },
        { label: "High-Quality Data", value: counts.quality, suffix: "%" },
        { label: "Lead Conversion Rate", value: counts.conversion, suffix: "%" },
    ];

    return (
        <motion.div
            className="w-full max-w-4xl mx-auto px-4 mb-8"
            onViewportEnter={() => setStartAnimation(true)}
            viewport={{ once: true }}
        >
            <div className="bg-white rounded-xl shadow-lg p-3 md:p-4 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition duration-300"
                        >
                            <div className="relative w-12 h-12 mb-2">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    {/* Background Circle */}
                                    <path
                                        className="text-gray-100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    />
                                    {/* Progress Circle */}
                                    <path
                                        className="text-blue-600 drop-shadow-sm"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeDasharray={`${stat.value}, 100`}
                                        strokeLinecap="round"
                                        style={{
                                            transition: "stroke-dasharray 0.5s ease-out",
                                        }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-bold text-gray-800">
                                        {stat.value}
                                        {stat.suffix}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-600 font-medium text-center text-xs">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
