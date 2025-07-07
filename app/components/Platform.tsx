"use client";

import { useEffect } from "react";

export default function Platform() {
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

    const animateElements = document.querySelectorAll(
      ".flow-step, .feature-card"
    );
    animateElements.forEach((el) => {
      el.classList.add("animate-out");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="platform" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            The Tekai.ai Platform: Built for Scale
          </h2>
          <p className="section-subtitle">
            Each component designed for reusability across projects and
            industries
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            <div className="flow-step text-center flex-1 max-w-xs">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-semibold mb-2">Document Ingestion</h3>
              <p className="text-gray-600">
                PDF, JSON, and multi-format processing
              </p>
            </div>

            <div className="hidden lg:block text-3xl text-blue-600">→</div>

            <div className="flow-step text-center flex-1 max-w-xs">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-2">
                AI Processing Engine
              </h3>
              <p className="text-gray-600">
                Gemini AI with custom prompt engineering
              </p>
            </div>

            <div className="hidden lg:block text-3xl text-blue-600">→</div>

            <div className="flow-step text-center flex-1 max-w-xs">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-lg font-semibold mb-2">Vector Database</h3>
              <p className="text-gray-600">
                MongoDB Atlas with semantic search
              </p>
            </div>

            <div className="hidden lg:block text-3xl text-blue-600">→</div>

            <div className="flow-step text-center flex-1 max-w-xs">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">RAG Pipeline</h3>
              <p className="text-gray-600">Context-aware response generation</p>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Platform Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold mb-3">Custom Templates</h3>
              <p className="text-gray-600">
                Industry-specific formatting and validation rules
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold mb-3">Modular Design</h3>
              <p className="text-gray-600">
                Reusable components across different projects
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold mb-3">API-First</h3>
              <p className="text-gray-600">
                Ready for integration and multi-tenant deployment
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-semibold mb-3">
                Scalable Infrastructure
              </h3>
              <p className="text-gray-600">
                Built to handle enterprise-level workloads
              </p>
            </div>
          </div>
        </div>

        {/* Technical Excellence */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Technical Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold mb-3">
                Precision Engineering
              </h4>
              <p className="text-gray-600">
                Custom-built RAG pipelines optimized for research documents with
                domain-specific fine-tuning.
              </p>
            </div>

            <div className="feature-card bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
              <div className="text-3xl mb-4">🔒</div>
              <h4 className="text-lg font-semibold mb-3">
                Enterprise Security
              </h4>
              <p className="text-gray-600">
                SOC 2 compliant infrastructure with encrypted data processing
                and secure API endpoints.
              </p>
            </div>

            <div className="feature-card bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold mb-3">High Performance</h4>
              <p className="text-gray-600">
                Sub-second response times with 99.9% uptime SLA for
                mission-critical research workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div id="partnerships">
          <h3 className="text-2xl font-bold text-center mb-12">
            Strategic Partnerships
          </h3>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  WHO-Europe Collaboration
                </h4>
                <p className="text-gray-600 mb-4">
                  Our flagship partnership with the World Health Organization
                  Europe office demonstrates the real-world impact of AI-powered
                  research accessibility.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    RCCE-IM Project
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Health Communication
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    Public Health
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <p className="text-sm text-gray-500">
                  Transforming 34 research documents into actionable health
                  communication insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
