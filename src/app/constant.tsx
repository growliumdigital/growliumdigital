import { BiHeading } from "react-icons/bi";

export const SERVICES_OPTIONS = [
  { id: "sales-meeting-setup", label: "Sales Meeting Setup" },
  { id: "account-based", label: "Account-Based Marketing (ABM)" },
  { id: "b2b-setting", label: "B2B Appointment Setting" },
  { id: "b2b-lead", label: "B2B Lead Generation" },
  { id: "inside-sales", label: "Inside Sales" },
  { id: "sales-development", label: "Sales Development" },
];
// serviceDetails.ts
export const SERVICE_ABOUT_DETAILS = {
  "sales-meeting-setup": {
    title: "Strategic Outreach That Fills Your Calendar",
    description:
      "While you focus on closing deals, GrowLium Digital takes care of securing appointments with genuinely interested buyers. Backed by advanced technology and years of B2B expertise, we craft results-driven email campaigns that pave the way for meaningful sales conversations. Explore our end-to-end B2B appointment setting services—customized to align with your unique sales goals and business needs.",
    image: "/images/meeting.jpg",
  },
  "account-based": {
    title: "Personalized Marketing That Drives Bigger Deals",
    description:
      "Account-Based Marketing (ABM) is a highly focused growth strategy where sales and marketing teams collaborate to identify high-value accounts, craft personalized campaigns, and convert key decision-makers. Instead of casting a wide net, ABM zeroes in on the prospects that matter most — delivering higher ROI, better engagement, and faster deal closures.",
    image: "/images/account-based.jpg",
  },
  "b2b-setting": {
    title: "Smart Outreach for Faster Conversions",
    description:
      `B2B Appointment Setting is a focused outbound strategy where our team identifies, qualifies, and books meetings with decision-makers from your target accounts — so your sales team can focus on closing deals
       At GrowLium Digital  , we don&apos;t just get you leads — we deliver sales-qualified appointments with buyers who are ready to talk. Our process is designed to align with your sales goals, speed up your pipeline, and improve your close rates`,
    image: "/images/b2b-setting.jpg",
  },
  "b2b-lead": {
    title: "GrowLium Digital  ",
    description:
      `B2B Lead Generation is the process of identifying, attracting, and engaging business decision-makers who are most likely to benefit from your product or service. At GrowLium Digital  , we go beyond generic lead lists — we deliver sales-qualified leads who are ready to talk, engage, and convert.
      Our expert team uses data-driven strategies, multi-channel outreach, and industry insights to generate leads that align with your Ideal Customer Profile (ICP). Whether you’re a startup or an enterprise, we help you fill your pipeline with real opportunities — not just contacts.`,
    image: "/images/b2b-lead.jpg",
  },
  "inside-sales": {
    title: "Inside Sales Solutions That Scale With You",
    description:
      `Inside Sales refers to the practice of selling remotely — through email, phone, and video calls — rather than traditional field sales. It’s efficient, scalable, and ideal for B2B companies looking to generate more revenue without increasing overhead.
      At GrowLium Digital  , we provide high-performing Inside Sales services tailored to your business goals. From prospecting to closing qualified meetings, we become an extension of your sales team — building your pipeline and nurturing leads with precision and consistency.`,
    image: "/images/inside-sales.jpg",
  },
  "sales-development": {
    title: "Sales Development That Builds Pipeline",
    description:
      `Sales Development is the foundation of modern B2B sales success. It&apos;s the process of identifying prospects, engaging them with tailored outreach, and qualifying them before handing them off to your sales team. At GrowLium Digital  , our Sales Development service helps you fill the top of your funnel with real opportunities — not just leads.
    We act as an extension of your team, combining data, messaging, and outreach to create predictable, scalable pipeline growth.s processes.`,
    image: "/images/sales-development.jpg",
  },
};
export const WHO_WE_SERVE = [
  {
    heading: "High Value B2B Sellers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="text-white"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm6 0v-7h2v7h-2zm-3 0v-7h2v7h-2z" />
      </svg>
    ),
    description:
      "B2B companies offering high-ticket products or services that require strategic, relationship-driven sales outreach.",
  },
  {
    heading: "Sales Teams Needing Pipeline Boost",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="text-white"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm6 0v-7h2v7h-2zm-3 0v-7h2v7h-2z" />
      </svg>
    ),
    description:
      "Sales teams looking to consistently fill the top of their funnel with qualified, ready-to-engage prospects.",
  },
  {
    heading: "Startups & Enterprises in Niche Markets",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="text-white"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm6 0v-7h2v7h-2zm-3 0v-7h2v7h-2z" />
      </svg>
    ),
    description:
      "Innovative startups or established enterprises targeting specialized or hard-to-reach audiences.",
  },
  {
    heading: "Agencies & SaaS Brands Scaling Fast",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="text-white"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm6 0v-7h2v7h-2zm-3 0v-7h2v7h-2z" />
      </svg>
    ),
    description:
      "Marketing agencies and SaaS companies ready to scale their outbound sales and accelerate lead generation.",
  },

];

