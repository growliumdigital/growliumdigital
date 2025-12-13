// src/components/TrustedByBusinesses.tsx
"use client";

import { useEffect, useState } from "react";

export default function TrustedByBusinesses() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const testimonials = [
    {
      quote:
        "GrowLium Digital helped us scale our B2B operations by delivering high-quality leads that converted into long-term clients. Their expertise is truly exceptional.",
    },
    {
      quote:
        "GrowLium Digital truly understood our needs and delivered leads that converted. They've been a reliable partner in our growth journey.",
    },
    {
      quote:
        "The tailored campaigns by GrowLium Digital significantly increased our engagement with decision-makers, delivering a clear ROI within just a few months.",
    },
  ];

  // Animate count-up on mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const step1 = Math.ceil(95 / (duration / 50));
    const step2 = Math.ceil(90 / (duration / 50));

    const timer1 = setInterval(() => {
      setCount1((prev) => {
        if (prev >= 95) {
          clearInterval(timer1);
          return 95;
        }
        return prev + step1;
      });
    }, 50);

    const timer2 = setInterval(() => {
      setCount2((prev) => {
        if (prev >= 90) {
          clearInterval(timer2);
          return 90;
        }
        return prev + step2;
      });
    }, 50);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <div className="py-10 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE: Stats + Percentages */}
          <div>
            <div className="inline-block bg-white rounded-full px-4 py-1 text-sm font-medium mb-6">
              Trusted by Businesses Worldwide
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-gray-700 mb-8">
              Our clients’ success stories highlight the impact of our tailored
              B2B lead generation strategies. They showcase real growth and
              measurable results, proving the quality and effectiveness of our
              services.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              {/* Stat 1 */}
              <div>
                <div className="text-5xl font-bold text-gray-800 mb-2">
                  {count1}%
                </div>
                <div className="w-full bg-white rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${count1}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs font-medium text-blue-500 bg-blue-100 px-3 py-1 rounded">
                  Client Satisfaction {count1}%
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-5xl font-bold text-gray-800 mb-2">
                  {count2}%
                </div>
                <div className="w-full bg-white rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${count2}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs font-medium text-blue-500 bg-blue-100 px-3 py-1 rounded">
                  Success Rate {count2}%
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-l-4 border-gray-800 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                <blockquote className="text-gray-700 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                {/* Optional: Add faint quote marks */}
                <div className="absolute top-2 right-4 text-blue-100 text-8xl opacity-20 -z-10">
                  “
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
