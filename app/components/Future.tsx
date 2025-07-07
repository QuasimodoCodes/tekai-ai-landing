"use client";

import { useEffect } from "react";

export default function Future() {
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

  //   const animateElements = document.querySelectorAll(
  //     ".vision-card, .application-card"
  //   );
  //   animateElements.forEach((el) => {
  //     el.classList.add("animate-out");
  //     observer.observe(el);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section id="future" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            The Future of Research Accessibility
          </h2>
          <p className="section-subtitle">
            Where Tekai.ai is heading and how you can be part of the journey
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="vision-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-4xl mb-6">🌐</div>
            <h3 className="text-xl font-semibold mb-4">
              Universal Knowledge Access
            </h3>
            <p className="text-gray-600">
              A world where any research, in any language, is instantly
              accessible and actionable for practitioners worldwide.
            </p>
          </div>

          <div className="vision-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="text-xl font-semibold mb-4">
              Collaborative Intelligence
            </h3>
            <p className="text-gray-600">
              AI that doesn't replace human expertise but amplifies it, creating
              smarter decisions through human-AI collaboration.
            </p>
          </div>

          <div className="vision-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-4xl mb-6">🚀</div>
            <h3 className="text-xl font-semibold mb-4">
              Accelerated Innovation
            </h3>
            <p className="text-gray-600">
              Faster time-to-insight means faster innovation cycles,
              breakthrough discoveries, and real-world impact.
            </p>
          </div>
        </div>

        {/* Industry Applications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-4">
            Industry Applications
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The potential reaches far beyond our WHO-Europe flagship project
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="application-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-3">
                Healthcare & Medical Research
              </h3>
              <p className="text-gray-600 mb-4">
                Transform clinical studies, treatment protocols, and medical
                literature into accessible insights for practitioners and
                patients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Clinical Guidelines
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Drug Research
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Treatment Protocols
                </span>
              </div>
            </div>

            <div className="application-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold mb-3">Legal & Regulatory</h3>
              <p className="text-gray-600 mb-4">
                Navigate complex legal documents, case law, and regulatory
                frameworks with AI-powered analysis and summarization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Case Law
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Regulatory Compliance
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Contract Analysis
                </span>
              </div>
            </div>

            <div className="application-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Process market research, regulatory filings, and financial
                reports to extract actionable investment insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Market Analysis
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Risk Assessment
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Regulatory Filings
                </span>
              </div>
            </div>

            <div className="application-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-3">
                Academic & Research
              </h3>
              <p className="text-gray-600 mb-4">
                Accelerate literature reviews, meta-analyses, and
                interdisciplinary research collaboration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Literature Reviews
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Meta-Analysis
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Research Synthesis
                </span>
              </div>
            </div>

            <div className="application-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold mb-3">
                Government & Policy
              </h3>
              <p className="text-gray-600 mb-4">
                Transform policy documents, legislative texts, and public
                research into citizen-friendly insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Policy Analysis
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Legislative Research
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Public Information
                </span>
              </div>
            </div>

            <div className="application-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold mb-3">
                Scientific Research
              </h3>
              <p className="text-gray-600 mb-4">
                Bridge the gap between complex scientific findings and practical
                applications across industries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Research Papers
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Scientific Data
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Cross-Disciplinary
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Our Roadmap</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-0.5 h-16 bg-blue-200"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-lg font-semibold mb-2 text-blue-600">
                      Q1 2024 - Foundation
                    </h4>
                    <p className="text-gray-600">
                      WHO-Europe RCCE-IM project launch and core platform
                      development
                    </p>
                    <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Current
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-0.5 h-16 bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-lg font-semibold mb-2">
                      Q2 2024 - Expansion
                    </h4>
                    <p className="text-gray-600">
                      Multi-language support and additional health organization
                      partnerships
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-0.5 h-16 bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-lg font-semibold mb-2">
                      Q3 2024 - Integration
                    </h4>
                    <p className="text-gray-600">
                      Enterprise API launch and first industry verticals (legal,
                      financial)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-lg font-semibold mb-2">
                      Q4 2024 - Scale
                    </h4>
                    <p className="text-gray-600">
                      Full platform launch with multi-tenant architecture and
                      advanced analytics
                    </p>
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
