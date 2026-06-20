"use client";

import { useEffect, useState, useRef } from "react";

const TOTAL = 25 * 60; // 25 min session

export default function FocusTicker() {
  const [secs, setSecs] = useState(TOTAL - 8 * 60 - 43); // start mid-session
  const [running, setRunning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Delay mount so SSR & hydration match
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => setRunning(true), 800);
    return () => clearTimeout(t);
  }, [mounted]);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecs((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const mins = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  const elapsed = TOTAL - secs;
  const filled = Math.round((elapsed / TOTAL) * 10);
  const bar = "█".repeat(filled) + "░".repeat(10 - filled);

  if (!mounted) {
    return (
      <div className="font-mono-code text-sm text-gray-400 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 inline-flex items-center gap-3 select-none">
        <span className="text-indigo-500">[██████░░░░]</span>
        <span>24:07</span>
        <span className="text-gray-400">remaining</span>
        <span className="text-gray-300">·</span>
        <span className="text-indigo-600 font-medium">Deep Work</span>
      </div>
    );
  }

  return (
    <div
      className="font-mono-code text-sm bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 inline-flex items-center gap-3 select-none cursor-pointer group"
      onClick={() => setRunning((r) => !r)}
      title={running ? "Click to pause" : "Click to resume"}
      role="timer"
      aria-live="polite"
      aria-label={`Focus session: ${mins}:${s} remaining`}
    >
      <span className="text-indigo-500">[{bar}]</span>
      <span className="text-gray-700 tabular-nums">
        {mins}:{s}
      </span>
      <span className="text-gray-400">remaining</span>
      <span className="text-gray-200">·</span>
      <span className="text-indigo-600 font-medium">Deep Work</span>
      <span className="cursor-blink text-indigo-400">▌</span>
      <span className="text-xs text-gray-300 group-hover:text-gray-400 transition-colors ml-1">
        {running ? "click to pause" : "paused"}
      </span>
    </div>
  );
}
