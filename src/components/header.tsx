"use client";

import { SERVICES_OPTIONS } from "@/app/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    // Track scroll: transparent when scrolling (both up and down), opaque at top
    let lastScrollY = 0;

    const onScroll = () => {
      const currentY = window.scrollY;

      // At the very top, always opaque
      if (currentY < 50) {
        setIsTransparent(false);
      }
      // Scrolling (both up and down): make transparent
      else {
        setIsTransparent(true);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  const headerBg = isTransparent ? "bg-transparent" : "bg-white/95";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-200 ${headerBg} shadow-md border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <img
              src="/images/Growlium_page-0001.jpg"
              alt="GrowLium Digital Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className={`${isActive("/")
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about")
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
              }`}
          >
            About
          </Link>

          {/* Dropdown: Services */}
          <div className="relative group">
            <Link
              href="/services"
              className={`${isActive("/services")
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
                } flex items-center gap-1`}
            >
              <span>Services</span>
              <ChevronDown size={16} className="mt-[4px]" />
            </Link>
            <div className="absolute z-50 left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {SERVICES_OPTIONS?.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className={`block px-4 py-2 text-sm ${isActive(`/services/${service.id}`)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Dropdown: Engagement Types */}
          <div className="relative group">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
              suppressHydrationWarning
            >
              <span> Engagement Types</span>
              <ChevronDown size={16} className="mt-[4px]" />
            </button>
            <div className="absolute z-50 left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/engagement/full-time-resource"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Full Time Resource Deployment
              </Link>
              <Link
                href="/engagement/performance-based"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Performance Based Model
              </Link>
            </div>
          </div>

          {/* Dropdown: Insights */}
          <div className="relative group">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
              suppressHydrationWarning
            >
              <span>Insights</span>
              <ChevronDown size={16} className="mt-[4px]" />
            </button>
            <div className="absolute z-50 left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/faqs"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                General FAQs
              </Link>
              <Link
                href="/case-studies"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Case Studies
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            className={`${isActive("/blog")
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
              }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact")
              ? "text-blue-600 font-medium"
              : "text-gray-700 hover:text-blue-600"
              }`}
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 items-center">
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          suppressHydrationWarning
        >
          <div
            className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-700 transition ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t p-4 space-y-3">
          <Link
            href="/"
            className={`${isActive("/")
              ? "block text-blue-600 font-medium"
              : "block text-gray-700"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about")
              ? "block text-blue-600 font-medium"
              : "block text-gray-700"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${isActive("/services")
              ? "block text-blue-600 font-medium"
              : "block text-gray-700"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <div className="py-2">
            <span className="block px-0 py-2 text-gray-700 font-medium">Engagement Types</span>
            <Link
              href="/engagement/full-time-resource"
              className="block pl-4 py-2 text-sm text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Full Time Resource Deployment
            </Link>
            <Link
              href="/engagement/performance-based"
              className="block pl-4 py-2 text-sm text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Performance Based Model
            </Link>
          </div>
          <div className="py-2">
            <span className="block px-0 py-2 text-gray-700 font-medium">Insights</span>
            <Link
              href="/faqs"
              className="block pl-4 py-2 text-sm text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              General FAQs
            </Link>
            <Link
              href="/case-studies"
              className="block pl-4 py-2 text-sm text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
          </div>
          <Link
            href="/blog"
            className={`${isActive("/blog")
              ? "block text-blue-600 font-medium"
              : "block text-gray-700"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${isActive("/contact")
              ? "block text-blue-600 font-medium"
              : "block text-gray-700"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
