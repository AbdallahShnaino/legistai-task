"use client";

import React, { useState } from "react";
import { useLogin } from "@/lib/auth/hooks";
import { validateCredentials } from "@/lib/auth/utils";
import Submit from "./Submit";

export default function JoinUsForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  const { login, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMessage("");

    // Validate credentials using the new utility
    const validationErrors = validateCredentials(email, password);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const result = await login({ email, password });

      if (result.action === "register") {
        setSuccessMessage("Account created successfully! Redirecting...");
      } else {
        setSuccessMessage("Login successful! Redirecting...");
      }
    } catch (error) {
      setErrors([
        error instanceof Error ? error.message : "Authentication failed",
      ]);
    }
  };

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl pointer-events-none"></div>

      {/* Form Content */}
      <div className="relative p-8 lg:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-3">
            Join Us Today
          </h2>
          <p className="text-gray-300 text-lg">Start your legal AI journey</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Email Field */}
          <div className="space-y-2 group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-50 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/10 focus:placeholder-gray-300 hover:border-white/30 hover:bg-white/8 transition-all duration-500 disabled:opacity-50 transform"
                />
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2 group">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-200 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-50 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  placeholder="At least 5 characters"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-white/10 focus:placeholder-gray-300 hover:border-white/30 hover:bg-white/8 transition-all duration-500 disabled:opacity-50 transform"
                />
              </div>
            </div>
          </div>

          {/* Success */}
          {successMessage && (
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-xl blur pointer-events-none"></div>
              <div className="relative bg-green-500/10 border border-green-400/30 text-green-300 p-4 rounded-xl flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">{successMessage}</span>
              </div>
            </div>
          )}

          {/* Errors */}
          {errors.length > 0 && (
            <div className="relative animate-in slide-in-from-top-2 duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-orange-500/30 to-red-500/30 rounded-2xl blur-sm animate-pulse pointer-events-none"></div>
              <div className="relative bg-red-500/10 border border-red-400/40 text-red-300 p-5 rounded-2xl">
                <h4 className="font-semibold mb-2">
                  Please fix the following:
                </h4>
                <ul className="space-y-2 text-sm">
                  {errors.map((err, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5"></span>
                      <span>{err}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="pt-4">
            <Submit isLoading={isLoading} />
          </div>

          {/* Info */}
          <p className="text-center text-sm text-gray-400 pt-4">
            No account?
            <span className="text-blue-400 font-semibold">
              {" "}
              One will be created automatically
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
