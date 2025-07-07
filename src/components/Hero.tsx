"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [counters, setCounters] = useState({
    documents: 34,
    confidence: 90,
    processing: 9,
  });

  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToFuture = () => {
    const element = document.getElementById("future");
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.offsetTop - navbarHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left" id="hero">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-lg">🚀</span>
              <span>Live Project: WHO-Europe RCCE-IM Database</span>
            </div>

            {/* Title */}
            <h1 className="hero-title mb-6">
              AI That Transforms{" "}
              <span className="text-gradient">Research Into Action</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle mb-8">
              Powering the future of research accessibility, one project at a
              time.
              <br />
              Starting with WHO-Europe, expanding to transform industries.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {counters.documents}
                </div>
                <div className="text-sm text-gray-500">Documents Processed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {counters.confidence}%
                </div>
                <div className="text-sm text-gray-500">Confidence Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {counters.processing}s
                </div>
                <div className="text-sm text-gray-500">Processing Time</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <button onClick={scrollToDemo} className="btn btn-primary">
                Try Live Demo
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button onClick={scrollToFuture} className="btn btn-secondary">
                Explore Future Applications
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="research-animation">
              <div className="research-papers">
                <div className="paper paper-1">📄</div>
                <div className="paper paper-2">📄</div>
                <div className="paper paper-3">📄</div>
              </div>
              <div className="transformation-arrow">→</div>
              <div className="ai-insights">
                <div className="insight insight-health">🏥</div>
                <div className="insight insight-legal">⚖️</div>
                <div className="insight insight-finance">💼</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
