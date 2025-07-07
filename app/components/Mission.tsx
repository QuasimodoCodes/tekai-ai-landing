"use client";

import { useEffect } from "react";

export default function Mission() {
  // useEffect(() => {
  //   const observerOptions = {
  //     threshold: 0.1,
  //     rootMargin: "0px 0px -100px 0px",
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animate-in");
  //       }
  //     });
  //   }, observerOptions);

  //   const animateElements = document.querySelectorAll(".principle");
  //   animateElements.forEach((el) => {
  //     el.classList.add("animate-out");
  //     observer.observe(el);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section id="mission" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Mission at Tekai.ai</h2>
          <p className="section-subtitle">
            We believe groundbreaking research should drive real-world action,
            not collect dust in academic archives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="principle text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-6">🔓</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Accessibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Making complex research digestible for practitioners, bridging the
              gap between academia and real-world application.
            </p>
          </div>

          <div className="principle text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-6">📈</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Scalability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered solutions that grow with demand, from single projects
              to enterprise-wide implementations.
            </p>
          </div>

          <div className="principle text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-6">🎯</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Transforming knowledge into actionable insights that drive
              meaningful change across industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
