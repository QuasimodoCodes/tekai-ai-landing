"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link
            href="#home"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/assets/tekai-logo.svg"
              alt="Tekai.ai"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900">Tekai.ai</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              WHO-Europe Project
            </button>
            <button
              onClick={() => scrollToSection("platform")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Platform
            </button>
            <button
              onClick={() => scrollToSection("future")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Future
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="btn btn-primary"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="flex flex-col gap-4 p-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection("project")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                WHO-Europe Project
              </button>
              <button
                onClick={() => scrollToSection("platform")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Platform
              </button>
              <button
                onClick={() => scrollToSection("future")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Future
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="btn btn-primary w-full justify-center"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
