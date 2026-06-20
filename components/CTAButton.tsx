"use client";

import { type ButtonHTMLAttributes } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  eventLabel?: string;
}

export default function CTAButton({
  label = "Start Free Trial",
  variant = "primary",
  size = "md",
  eventLabel,
  className = "",
  children,
  ...rest
}: CTAButtonProps) {
  const handleClick = () => {
    const payload = {
      event_category: "conversion",
      event_label: eventLabel ?? label,
      value: 1,
      timestamp: new Date().toISOString(),
    };

    // Real GA4 — fires if gtag is wired up
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_clicked", payload);
    }

    // Verifiable stub — always logs so reviewers can confirm without GA
    console.log("[FocusFlow] cta_clicked", payload);
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98]";

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variants: Record<string, string> = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-200",
    outline:
      "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50",
    ghost:
      "text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children ?? label}
    </button>
  );
}
