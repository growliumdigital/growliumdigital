"use client";

import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  position?: "left" | "right";
  className?: string;
  textBgColor?: string;
  points?: string[];
}
export default function ServiceAboutSection({ title, description, image, position = "left", className, subtitle, points }: AboutSectionProps) {
  return (
    <section className={`${className ? className : "py-20 bg-white"}`}>
      <div className={`max-w-6xl mx-auto px-4 md:flex items-center gap-20 ${position === "right" ? "md:flex-row-reverse" : ""}`}>
        {/* Left: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={image}
            alt="Team meeting at GrowLium Digital  "
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2">
          <h3 className="text-3xl md:text-5xl font-bold text-black-500 mb-4 flex gap-3">
            {title}
          </h3>
          {subtitle && (
            <h3 className="text-3xl md:text-5xl font-bold text-black-500 mb-4 flex gap-3">
              {subtitle}
            </h3>
          )}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          <hr className="m-2 text-white" />
          <ul className="space-y-4">
            {points?.map((point, index) => (
              <li key={index} className="flex items-center gap-3 text-black mt-3">
                <CiCircleCheck className="w-5 h-5 text-white shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
