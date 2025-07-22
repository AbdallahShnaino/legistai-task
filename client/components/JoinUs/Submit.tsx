"use client";

import React from "react";

interface SubmitProps {
  isLoading?: boolean;
}

export default function Submit({ isLoading = false }: SubmitProps) {
  return (
    <div className="relative group">
      {/* Enhanced Animated Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse pointer-events-none"></div>

      {/* Secondary Glow Layer */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-700 pointer-events-none"></div>

      {/* Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="relative w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none shadow-2xl hover:shadow-3xl border border-white/10 hover:border-white/20 overflow-hidden"
      >
        {/* Button Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        <div className="relative flex items-center justify-center space-x-3">
          {isLoading ? (
            <>
              {/* Enhanced Loading Spinner */}
              <div className="relative">
                <div className="w-6 h-6 border-3 border-white/20 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute top-1 left-1 w-4 h-4 border-2 border-white/40 border-b-transparent rounded-full animate-spin animate-reverse"></div>
              </div>
              <span className="text-lg font-semibold animate-pulse">
                Processing your request...
              </span>
            </>
          ) : (
            <>
              {/* Rocket Icon for Join */}
              <svg
                className="w-6 h-6 transform group-hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span className="text-lg font-semibold">Join LegistAI</span>
              {/* Enhanced Arrow Icon */}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </>
          )}
        </div>

        {/* Enhanced Shimmer Effect */}
        {!isLoading && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out delay-100 pointer-events-none"></div>
          </>
        )}

        {/* Pulse Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none"></div>
      </button>

      {/* Success Ripple Effect */}
      <div className="absolute inset-0 rounded-2xl bg-green-400/20 opacity-0 scale-95 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}
