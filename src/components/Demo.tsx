"use client";

import { useState } from "react";

interface QueryResponse {
  query: string;
  answer: string;
  sources: Array<{
    reference: string;
    similarity_score: number;
    snippet: string;
  }>;
  metadata: {
    total_results: number;
    processing_time: number;
    model_used: string;
  };
  processing_time: number;
  timestamp: string;
}

export default function Demo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<QueryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const presetQueries = [
    "community engagement strategies",
    "risk communication best practices",
    "health emergency preparedness",
  ];

  const setPresetQuery = (presetQuery: string) => {
    setQuery(presetQuery);
  };

  const runDemo = async () => {
    if (!query.trim()) {
      setError("Please enter a query to search");
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("http://localhost:8080/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query.trim(),
          top_k: 5,
          score_threshold: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: QueryResponse = await response.json();
      setResults(data);
    } catch (err) {
      console.error("Demo error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to process query. Please check if the API server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      runDemo();
    }
  };

  return (
    <section id="demo" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Interactive Demo</h2>
          <p className="section-subtitle">
            Try our live RAG system with WHO-Europe RCCE-IM research data
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="demo-container">
            {/* Preset Queries */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                <strong>Try these example queries:</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {presetQueries.map((presetQuery, index) => (
                  <button
                    key={index}
                    onClick={() => setPresetQuery(presetQuery)}
                    className="preset-btn"
                  >
                    {presetQuery}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about risk communication, community engagement, or health emergency preparedness..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <button
                onClick={runDemo}
                disabled={loading || !query.trim()}
                className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Search"
                )}
              </button>
            </div>

            {/* Results */}
            <div className="min-h-[200px]">
              {loading && (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Processing your query...</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {results && (
                <div className="space-y-6">
                  {/* Answer */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">
                      AI Summary
                    </h3>
                    <p className="text-blue-800 leading-relaxed">
                      {results.answer}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">
                          Results Found:
                        </span>
                        <span className="ml-2 text-gray-600">
                          {results.metadata.total_results}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Processing Time:
                        </span>
                        <span className="ml-2 text-gray-600">
                          {results.processing_time.toFixed(2)}s
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Model:
                        </span>
                        <span className="ml-2 text-gray-600">
                          {results.metadata.model_used}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sources */}
                  {results.sources.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Source Documents
                      </h4>
                      <div className="space-y-4">
                        {results.sources.map((source, index) => (
                          <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-4"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium text-gray-900 flex-1">
                                {source.reference}
                              </h5>
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
                                {(source.similarity_score * 100).toFixed(1)}%
                                match
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {source.snippet}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!loading && !error && !results && (
                <div className="text-center py-12 text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p>
                    Enter a query above to search our WHO-Europe RCCE-IM
                    database
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
