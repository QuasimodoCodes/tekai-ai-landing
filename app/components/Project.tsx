"use client";

import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".metric-card");
    animateElements.forEach((el) => {
      el.classList.add("animate-out");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="project" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Live Project
            </span>
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              34/50 Documents Processed
            </span>
          </div>
          <h2 className="section-title">
            Project #1: WHO-Europe RCCE-IM Database
          </h2>
          <p className="section-subtitle">
            Transforming pandemic communication research into actionable
            insights for public health practitioners worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="metric-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">📚</div>
            <div className="text-sm font-medium text-gray-500 mb-2">
              Challenge
            </div>
            <div className="text-gray-900 font-medium">
              Process 1,500+ pandemic communication research articles
            </div>
          </div>

          <div className="metric-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🤖</div>
            <div className="text-sm font-medium text-gray-500 mb-2">
              Solution
            </div>
            <div className="text-gray-900 font-medium">
              Custom AI pipeline with 700-800 word structured summaries
            </div>
          </div>

          <div className="metric-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">📊</div>
            <div className="text-sm font-medium text-gray-500 mb-2">
              Performance
            </div>
            <div className="text-gray-900 font-medium">
              68% success rate, 9-12 second processing time
            </div>
          </div>

          <div className="metric-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <div className="text-sm font-medium text-gray-500 mb-2">Impact</div>
            <div className="text-gray-900 font-medium">
              90% confidence, 100% template compliance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
