"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFileDownload, FaPaperPlane } from "react-icons/fa";

type RequestType = "aboriginal-engagement" | "capability-statement";
type Status = "idle" | "loading" | "success" | "error";

function RequestForm({
  type,
  buttonLabel,
  buttonIcon,
  buttonClass,
  ringClass,
  inputAccent,
}: {
  type: RequestType;
  buttonLabel: string;
  buttonIcon: React.ReactNode;
  buttonClass: string;
  ringClass: string;
  inputAccent: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/request-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className={`w-full px-5 py-4 rounded-full bg-white/95 text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:ring-4 ${inputAccent} transition-all duration-200 disabled:opacity-60`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`flex items-center justify-center gap-3 ${buttonClass} px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 ${ringClass} disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100`}
      >
        {status === "loading" ? (
          <>
            <FaPaperPlane className="text-lg animate-pulse" />
            Sending...
          </>
        ) : (
          <>
            {buttonIcon}
            {buttonLabel}
          </>
        )}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-300 text-center mt-1">
          Request received — check your inbox shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-300 text-center mt-1">
          {errorMessage || "Failed to send request. Please try again."}
        </p>
      )}
    </form>
  );
}

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-8">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DSC00947.JPG"
          alt="Traffic management team consultation background"
          fill
          className="object-cover opacity-50"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Card: Aboriginal Engagement Strategy */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between h-full animate-element hover:bg-white/15 transition-all duration-300">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Request Aboriginal Engagement Strategy
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                Enter your email to receive a copy of our Aboriginal Engagement
                Strategy. We outline how T&S partners with Aboriginal and Torres
                Strait Islander communities through inclusive employment,
                training, and meaningful project participation.
              </p>
            </div>
            <RequestForm
              type="aboriginal-engagement"
              buttonLabel="Request Strategy"
              buttonIcon={<FaPaperPlane className="text-lg" />}
              buttonClass="bg-btn hover:bg-btn/90 text-white"
              ringClass="focus:ring-btn/30"
              inputAccent="focus:ring-btn/40"
            />
          </div>

          {/* Right Card: Capability Statement */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between h-full animate-element hover:bg-white/15 transition-all duration-300">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Request Capability Statement
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                Need reliable traffic management for your next project? T&S
                offers end-to-end traffic control services, custom Traffic
                Control Plans, council permits, and certified on-site
                controllers. Enter your email and we'll send our capability
                statement straight to your inbox.
              </p>
            </div>
            <RequestForm
              type="capability-statement"
              buttonLabel="Request Statement"
              buttonIcon={<FaFileDownload className="text-lg" />}
              buttonClass="bg-white text-gray-900 hover:bg-gray-100"
              ringClass="focus:ring-gray-300"
              inputAccent="focus:ring-white/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
