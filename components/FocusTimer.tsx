"use client";

import { useState, useEffect, useCallback } from "react";

const SESSIONS = [
  { label: "Deep Work", duration: 25 * 60, color: "#7C6FF7" },
  { label: "Short Break", duration: 5 * 60, color: "#4ADE80" },
  { label: "Long Break", duration: 15 * 60, color: "#60A5FA" },
];

export default function FocusTimer() {
  const [sessionIdx, setSessionIdx] = useState(0);
  const [seconds, setSeconds] = useState(SESSIONS[0].duration);
  const [running, setRunning] = useState(false);

  const session = SESSIONS[sessionIdx];
  const progress = 1 - seconds / session.duration;
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  const reset = useCallback(() => {
    setSeconds(session.duration);
    setRunning(false);
  }, [session.duration]);

  useEffect(() => {
    reset();
  }, [sessionIdx, reset]);

  useEffect(() => {
    if (!running) return;
    if (seconds === 0) { setRunning(false); return; }
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [running, seconds]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.cardHeader}>
        <div style={styles.dot} />
        <span style={styles.appName}>FocusFlow</span>
        <span style={styles.streak}>🔥 7-day streak</span>
      </div>

      {/* Session tabs */}
      <div style={styles.tabs}>
        {SESSIONS.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setSessionIdx(i)}
            style={{
              ...styles.tab,
              ...(i === sessionIdx ? { ...styles.tabActive, color: s.color, borderColor: s.color + "55" } : {}),
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Timer ring */}
      <div style={styles.timerWrap}>
        <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true">
          <circle cx="90" cy="90" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
          <circle
            cx="90" cy="90" r={radius} fill="none"
            stroke={session.color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 90 90)"
            style={{ transition: running ? "stroke-dashoffset 1s linear" : "none" }}
          />
        </svg>
        <div style={styles.timerCenter}>
          <div style={{ ...styles.timerDisplay, color: session.color }}>
            {mins}:{secs}
          </div>
          <div style={styles.timerLabel}>{session.label}</div>
        </div>
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        <button onClick={reset} style={styles.btnSecondary} aria-label="Reset timer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
        <button
          onClick={() => setRunning((r) => !r)}
          style={{ ...styles.btnPrimary, background: session.color }}
          aria-label={running ? "Pause timer" : "Start timer"}
        >
          {running ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          )}
          {running ? "Pause" : "Start"}
        </button>
        <button onClick={() => setSessionIdx((i) => (i + 1) % SESSIONS.length)} style={styles.btnSecondary} aria-label="Next session">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
        </button>
      </div>

      {/* Task row */}
      <div style={styles.taskRow}>
        <span style={styles.taskDot} />
        <span style={styles.taskText}>Writing product spec — Sprint 12</span>
        <span style={styles.taskCount}>4 / 6</span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#13131A",
    border: "1px solid rgba(124,111,247,0.2)",
    borderRadius: "20px",
    padding: "24px",
    width: "320px",
    maxWidth: "100%",
    boxShadow: "0 0 60px rgba(124,111,247,0.08), 0 24px 48px rgba(0,0,0,0.4)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#7C6FF7",
  },
  appName: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    color: "#F0EFF8",
    flex: 1,
  },
  streak: {
    fontSize: "12px",
    color: "#8B8A9E",
  },
  tabs: {
    display: "flex",
    gap: "6px",
    marginBottom: "28px",
    background: "#0A0A0F",
    borderRadius: "10px",
    padding: "4px",
  },
  tab: {
    flex: 1,
    padding: "6px 4px",
    borderRadius: "7px",
    fontSize: "11px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    color: "#5A5A6E",
    background: "none",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
  tabActive: {
    background: "#13131A",
  },
  timerWrap: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24px",
  },
  timerCenter: {
    position: "absolute",
    textAlign: "center",
  },
  timerDisplay: {
    fontFamily: "'Sora', sans-serif",
    fontSize: "36px",
    fontWeight: 700,
    letterSpacing: "-1px",
    lineHeight: 1,
  },
  timerLabel: {
    fontSize: "11px",
    color: "#8B8A9E",
    marginTop: "4px",
    fontFamily: "'Inter', sans-serif",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  btnPrimary: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 28px",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: 600,
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    border: "none",
    cursor: "pointer",
  },
  btnSecondary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#1C1C27",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "#8B8A9E",
    cursor: "pointer",
  },
  taskRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#1C1C27",
    borderRadius: "10px",
    padding: "10px 14px",
  },
  taskDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#7C6FF7",
    flexShrink: 0,
  },
  taskText: {
    fontSize: "12px",
    color: "#8B8A9E",
    flex: 1,
    fontFamily: "'Inter', sans-serif",
  },
  taskCount: {
    fontSize: "11px",
    color: "#5A5A6E",
    fontFamily: "'Inter', sans-serif",
  },
};
