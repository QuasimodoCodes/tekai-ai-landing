"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [counters, setCounters] = useState({
    documents: 0,
    confidence: 0,
    processing: 0,
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { documents: 34, confidence: 90, processing: 9 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          documents: Math.floor(targets.documents * progress),
          confidence: Math.floor(targets.confidence * progress),
          processing: Math.floor(targets.processing * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

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
          <div className="text-center lg:text-left animate-out" id="hero">
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
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Powering the future of research accessibility, one project at a
              time.
              <br />
              <strong className="text-gray-800">
                Starting with WHO-Europe, expanding to transform industries.
              </strong>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  {counters.documents}
                </div>
                <div className="text-sm text-gray-600">Documents Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  {counters.confidence}%
                </div>
                <div className="text-sm text-gray-600">Confidence Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  {counters.processing}s
                </div>
                <div className="text-sm text-gray-600">Processing Time</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={scrollToDemo} className="btn btn-primary group">
                <span>Try Live Demo</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button onClick={scrollToFuture} className="btn btn-secondary">
                Explore Future Applications
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Research Animation */}
              <div className="flex items-center gap-8">
                {/* Papers */}
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-20 bg-blue-100 rounded-lg shadow-md animate-float flex items-center justify-center text-2xl">
                    📄
                  </div>
                  <div className="w-16 h-20 bg-blue-100 rounded-lg shadow-md animate-float delay-150 flex items-center justify-center text-2xl">
                    📄
                  </div>
                  <div className="w-16 h-20 bg-blue-100 rounded-lg shadow-md animate-float delay-300 flex items-center justify-center text-2xl">
                    📄
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-4xl text-blue-600 animate-pulse">→</div>

                {/* AI Insights */}
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse-glow flex items-center justify-center text-2xl">
                    🏥
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse-glow delay-150 flex items-center justify-center text-2xl">
                    ⚖️
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse-glow delay-300 flex items-center justify-center text-2xl">
                    💼
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
