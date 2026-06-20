import CTAButton from "@/components/CTAButton";

import FocusTimer from "@/components/FocusTimer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Features", "How it works", "Pricing", "Reviews"];

const LOGOS = [
  "Razorpay", "Zerodha", "Groww", "CRED", "Meesho", "PhonePe",
];

const PROBLEMS = [
  {
    icon: "📱",
    title: "Notifications derail you every 11 minutes",
    body: "The average knowledge worker is interrupted every 11 minutes and takes 23 minutes to fully recover. That's not distraction — that's a structural problem.",
  },
  {
    icon: "🌀",
    title: "Multitasking is a myth that costs you 40% output",
    body: "Switching between tasks doesn't feel expensive. But research consistently shows it reduces cognitive output by up to 40%. You're not busy — you're fragmented.",
  },
  {
    icon: "📉",
    title: "No visibility into where your time actually goes",
    body: "You end every day feeling like you worked hard but shipped little. Without data on your focus patterns, you can't fix what you can't see.",
  },
];

const FEATURES = [
  {
    icon: "⏱",
    title: "Science-backed intervals",
    body: "25-minute deep work blocks with structured breaks, tuned to your cognitive rhythm. Adjust session length and break cadence to match how you actually think.",
  },
  {
    icon: "🔕",
    title: "Site & app blocking",
    body: "Block distracting sites and apps the moment a session starts. Whitelist what you need, lock out what you don't — no willpower required.",
  },
  {
    icon: "📊",
    title: "Focus analytics",
    body: "Daily and weekly charts of your deep work hours, peak-focus windows, and session completion rate. Know your patterns before you try to change them.",
  },
  {
    icon: "🎯",
    title: "Task-linked sessions",
    body: "Attach a task to every session. At the end of the week, you'll know exactly what you spent your focus time on — and whether it matched your priorities.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Set your intention",
    body: "Name the task you're working on. A session without an intention is just a countdown — naming your task makes it a commitment.",
  },
  {
    n: "2",
    title: "Focus, undisturbed",
    body: "FocusFlow blocks your chosen distractions and starts the timer. Your only job is to work on the one thing you named.",
  },
  {
    n: "3",
    title: "Review and build the habit",
    body: "After each session, log a one-line note on progress. Over weeks, your focus score climbs — and you can see exactly why.",
  },
];

const BENEFITS = [
  { stat: "2.4×", label: "more deep work hours per day on average" },
  { stat: "91%", label: "of users report reduced end-of-day guilt" },
  { stat: "7 days", label: "to notice a measurable change in output" },
  { stat: "12,000+", label: "professionals already using FocusFlow" },
];

const TESTIMONIALS = [
  {
    quote:
      "I went from shipping one meaningful feature a week to three. FocusFlow didn't change what I worked on — it changed how deeply I could work on it.",
    name: "Arjun Mehta",
    role: "Senior Engineer, Bangalore",
    initials: "AM",
  },
  {
    quote:
      "The distraction blocker alone changed my relationship with my phone. I stopped reaching for it mid-sentence. That's worth ten times ₹399.",
    name: "Priya Sharma",
    role: "Product Designer, Hyderabad",
    initials: "PS",
  },
  {
    quote:
      "I track my focus hours like I track my P&L. FocusFlow is the only tool that gave me honest data about where my cognitive energy actually goes.",
    name: "Rohan Kapoor",
    role: "Founder, Mumbai",
    initials: "RK",
  },
];

const PRICING_FEATURES = [
  "Unlimited focus sessions",
  "Pomodoro, Deep Work & custom modes",
  "Distraction blocking — apps & websites",
  "Task-linked sessions and history",
  "Daily, weekly & monthly analytics",
  "7-day streak tracker",
  "Export focus data as CSV",
  "Priority email support",
];

const FOOTER_LINKS = {
  Product: ["Features", "How it works", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy policy", "Terms of service", "Cookie policy"],
  Support: ["Help centre", "Contact", "Status", "Community"],
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">

      {/* ── DARK HERO ZONE (navbar + hero share the dark background) ───────── */}
      <div className="bg-[#0A0A0F]">

        {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-[#0A0A0F]/85 backdrop-blur-md border-b border-white/[0.06]">
          <nav
            className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-8"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 mr-4 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7C6FF7] shadow-[0_0_8px_rgba(124,111,247,0.6)]" />
              <span className="font-display font-bold text-[#F0EFF8]">FocusFlow</span>
            </a>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-6 flex-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-[#8B8A9E] hover:text-[#F0EFF8] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-3">
              <CTAButton variant="ghost" size="sm" label="Sign in" eventLabel="nav_signin" />
              <CTAButton variant="primary" size="sm" label="Start free — 14 days" eventLabel="nav_cta" />
            </div>
          </nav>
        </header>

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 flex flex-col lg:flex-row items-center gap-16"
          aria-labelledby="hero-heading"
        >
          {/* Left */}
          <div className="flex-1 min-w-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#7C6FF7]/[0.08] border border-[#7C6FF7]/20 rounded-full px-4 py-1.5 text-xs font-medium text-[#8B8A9E] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] inline-block" aria-hidden="true" />
              14-day free trial · No credit card required
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0EFF8] text-balance leading-[1.06] mb-6"
            >
              The focus timer that
              <br />
              <span className="text-[#7C6FF7]">actually changes habits</span>
            </h1>

            {/* Subhead */}
            <p className="text-xl text-[#8B8A9E] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Protect your deep work time, block distractions, and watch your concentration
              improve — week over week, with data to prove it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12">
              <CTAButton variant="primary" size="lg" label="Start free trial" eventLabel="hero_primary" />
              <CTAButton variant="outline" size="lg" label="See how it works" eventLabel="hero_secondary" />
            </div>

            {/* Trust row */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div className="flex flex-col gap-0.5">
                <span className="font-display font-semibold text-base text-[#F0EFF8]">12,000+</span>
                <span className="text-xs text-[#5A5A6E]">active users</span>
              </div>
              <div className="w-px h-8 bg-white/[0.08]" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display font-semibold text-base text-[#F0EFF8]">4.8 ★</span>
                <span className="text-xs text-[#5A5A6E]">avg rating</span>
              </div>
              <div className="w-px h-8 bg-white/[0.08]" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display font-semibold text-base text-[#F0EFF8]">₹399</span>
                <span className="text-xs text-[#5A5A6E]">per month</span>
              </div>
            </div>
          </div>

          {/* Right — live timer */}
          <div className="relative flex-shrink-0">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(124,111,247,0.15) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <FocusTimer />
          </div>
        </section>
      </div>

      {/* ── SOCIAL PROOF ───────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50 py-12" aria-label="Trusted by">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-medium text-gray-400 tracking-widest uppercase mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="font-display font-semibold text-gray-300 text-lg hover:text-gray-400 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ────────────────────────────────────────────────────────── */}
      <section
        id="problem"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-labelledby="problem-heading"
      >
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-3">
            The problem
          </p>
          <h2
            id="problem-heading"
            className="font-display text-4xl font-bold text-gray-900 leading-tight mb-4"
          >
            Your environment is designed to steal your attention
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            The apps, notifications, and tab-switching aren't accidents — they're
            optimised to fragment you. Deep work requires a structural defence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all"
            >
              <span className="text-2xl mb-4 block" aria-hidden="true">{p.icon}</span>
              <h3 className="font-display font-semibold text-gray-900 mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────────────────── */}
      <section
        id="features"
        className="bg-gray-50 border-y border-gray-100 py-24"
        aria-labelledby="features-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              Features
            </p>
            <h2
              id="features-heading"
              className="font-display text-4xl font-bold text-gray-900 leading-tight mb-4"
            >
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="text-gray-500">
              FocusFlow is deliberately small. Four things, done properly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {FEATURES.map((f) => (
              <article
                key={f.title}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-indigo-100 hover:shadow-sm transition-all"
              >
                <span className="text-3xl mb-5 block" aria-hidden="true">{f.icon}</span>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-labelledby="how-heading"
      >
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2
            id="how-heading"
            className="font-display text-4xl font-bold text-gray-900 leading-tight"
          >
            Three steps. One clear habit.
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-8 list-none" aria-label="How FocusFlow works">
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-5 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-px bg-indigo-100"
                  aria-hidden="true"
                />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-display font-bold text-sm flex items-center justify-center mb-5 relative z-10 shadow-sm shadow-indigo-200">
                  {step.n}
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── BENEFITS ───────────────────────────────────────────────────────── */}
      <section
        className="bg-indigo-600 py-20"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              id="benefits-heading"
              className="font-display text-4xl font-bold text-white mb-3"
            >
              What changes when you protect your focus
            </h2>
            <p className="text-indigo-200 text-lg">
              Based on self-reported data from 12,000+ FocusFlow users after 30 days.
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {BENEFITS.map((b) => (
              <div
                key={b.stat}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center"
              >
                <p className="font-display text-4xl font-bold text-white mb-1">{b.stat}</p>
                <p className="text-sm text-indigo-200 leading-snug">{b.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div id="reviews" className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4"
              >
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold font-display flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-sm text-gray-900 block">{t.name}</cite>
                    <span className="text-xs text-gray-400">{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-display text-4xl font-bold text-gray-900 mb-3"
          >
            One plan. No gotchas.
          </h2>
          <p className="text-gray-500">
            Everything included. Cancel anytime. 14-day free trial, no card needed.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-indigo-600 rounded-2xl p-8 shadow-xl shadow-indigo-100">
            {/* Badge */}
            <div className="inline-block bg-indigo-600 text-white text-xs font-semibold rounded-full px-3 py-1 mb-6">
              Most popular
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-5xl font-bold text-gray-900">₹399</span>
              <span className="text-gray-400 text-sm">/ month</span>
            </div>
            <p className="text-sm text-gray-400 mb-8">
              Billed monthly · Cancel anytime
            </p>

            <CTAButton
              variant="primary"
              size="lg"
              label="Start 14-day free trial"
              eventLabel="pricing_cta"
              className="w-full justify-center mb-6"
            />

            <p className="text-xs text-center text-gray-400 mb-8">
              No credit card required during trial
            </p>

            {/* Feature list */}
            <ul className="space-y-3" role="list">
              {PRICING_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.78 4.22a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l2.47 2.47 5.47-5.47a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section
        className="bg-gray-50 border-t border-gray-100 py-24"
        aria-labelledby="final-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="final-cta-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
          >
            Ready to protect your best work?
          </h2>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Join 12,000+ professionals who use FocusFlow to do their most important
            work, every day. Your first 14 days are completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <CTAButton
              variant="primary"
              size="lg"
              label="Start free — no card needed"
              eventLabel="final_cta_primary"
            />
            <CTAButton
              variant="outline"
              size="lg"
              label="Talk to us first"
              eventLabel="final_cta_secondary"
            />
          </div>
          <p className="mt-6 text-sm text-gray-400">
            14-day free trial · ₹399/mo after · Cancel anytime
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 bg-white" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-display">F</span>
                </div>
                <span className="font-display font-semibold text-gray-900">FocusFlow</span>
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">
                A focus timer built for people who care about doing their best work.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
                  {group}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} FocusFlow. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">Made with focus, in India 🇮🇳</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
  