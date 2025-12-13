"use client";

import { useEffect, useState } from "react";

 type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};
// service hero section data
export const SERVICES_DATA:Service[] = [
  {
    id: "sales-meeting-setup",
    title: "Sales Meeting Setup",
    description: "Connect with the Right Decision-Makers. Close More Deals.",
    image: "/images/sales-meeting.png",
  },
  {
    id: "account-based",
    title: "Account-Based Marketing",
    description: "Target the Right Accounts. Engage Decision-Makers. Drive Revenue.",
     image: "/images/sales-meeting.png",
  },
  {
    id: "b2b-setting",
    title: "B2B Appointment Setting",
    description: "Book sales-ready appointments with decision-makers in your target market.",
     image: "/images/sales-meeting.png",
  },
  {
    id: "b2b-lead",
    title: "B2B Lead Generation",
    description: "Fuel Your Sales Pipeline with Qualified Leads That Convert.",
     image: "/images/sales-meeting.png",
  },
  {
    id: "inside-sales",
    title: "Inside Sales",
    description: "Drive Revenue Faster with a Scalable, Expert Inside Sales Team.",
     image: "/images/sales-meeting.png",
  },
  {
    id: "sales-development",
    title: "Sales Development",
    description: "Build a Stronger Pipeline with Consistent, Qualified Leads.",
    image: "/images/sales-meeting.png",
  },
];
interface Props {
  id: string;
}
export default function HeroSection({id}: Props) {
  const service = SERVICES_DATA.find((s) => s.id === id);
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
  const typedTitle = useTypewriter(service?.title || "", 80);
  return (
    <section className="relative h-[50vh] flex flex-col items-center justify-center overflow-hidden text-center px-4">
      <div
        className="absolute inset-0  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${service?.image || "/images/download.jpg"}')`,
        }}
      ></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold mb-4 whitespace-nowrap">
          {typedTitle}
        </h1>
        <p className="text-white text-lg md:text-xl mt-4">{service?.description}</p>
      </div>
    </section>
  );
}
