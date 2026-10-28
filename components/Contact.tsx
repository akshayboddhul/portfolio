"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");

  const emailAddress = "akshayboddhul45@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    // Opens default mail client pre-filled with the message details
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject || `Inquiry from ${name} via Portfolio`
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus("ready");
  };

  return (
    <section id="contact" className="py-20 border-b border-[#E2E6DE] bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">08 / CONTACT & ENGAGEMENT</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              DIRECT COMMUNICATIONS
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            Let’s discuss your data architecture or engineering challenges.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            Whether you are scaling a Databricks lakehouse, addressing pipeline latency bottlenecks,
            or exploring new Senior Data Engineering opportunities — my inbox is open.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels & context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="surface-card p-6 rounded-lg border border-[#CDD4C8] space-y-4 bg-[#FFFFFF]">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
                <span className="font-mono text-xs font-bold text-[#3E6146] uppercase">
                  Primary Email Channel
                </span>
                <span className="font-mono text-[10px] text-[#7F8880]">
                  Direct Inbox
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-sm sm:text-base text-[#202522] font-semibold block break-all">
                  {emailAddress}
                </span>
                <span className="text-xs text-[#7F8880] block">
                  Typical response time: within 24 hours
                </span>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#3E6146] text-[#FFFFFF] font-mono text-xs font-medium hover:bg-[#2F4B36] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded border border-[#E2E6DE] bg-[#FFFFFF] text-[#5A625B] font-mono text-xs hover:border-[#3E6146] hover:text-[#3E6146] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#3E6146]" />
                      <span className="text-[#3E6146]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="surface-card p-6 rounded-lg border border-[#E2E6DE] space-y-3 bg-[#FFFFFF]">
              <span className="font-mono text-xs font-bold text-[#202522] uppercase tracking-wide block pb-2 border-b border-[#EAEFE7]">
                Professional Profiles
              </span>

              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/akshayboddhul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded hover:bg-[#F0F3EC] transition-colors text-inherit no-underline border border-transparent hover:border-[#E2E6DE]"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#4362A0]" />
                    <span className="font-mono text-xs text-[#202522] font-semibold">
                      LinkedIn
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#7F8880] flex items-center gap-1">
                    in/akshayboddhul
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href="https://github.com/akshayboddhul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded hover:bg-[#F0F3EC] transition-colors text-inherit no-underline border border-transparent hover:border-[#E2E6DE]"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#202522]" />
                    <span className="font-mono text-xs text-[#202522] font-semibold">
                      GitHub
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#7F8880] flex items-center gap-1">
                    github.com/akshayboddhul
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Location context */}
            <div className="surface-card p-4 rounded-lg border border-[#E2E6DE] font-mono text-xs text-[#7F8880] space-y-1.5 bg-[#FAFBF9]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#202522]">
                  <MapPin className="w-3.5 h-3.5 text-[#3E6146]" />
                  Hyderabad, India
                </span>
                <span>IST (UTC +5:30)</span>
              </div>
              <div className="text-[11px] text-[#5A625B]">
                Available for Senior/Lead Data Engineer roles and architecture consulting.
              </div>
            </div>
          </div>

          {/* Interactive Message Composer (7 cols) */}
          <div className="lg:col-span-7 surface-card p-6 sm:p-8 rounded-lg border border-[#E2E6DE] bg-[#FFFFFF] space-y-6">
            <div className="pb-3 border-b border-[#EAEFE7]">
              <h3 className="font-display font-bold text-base sm:text-lg text-[#202522]">
                Compose a Message
              </h3>
              <p className="text-xs text-[#7F8880]">
                Prepares a direct message to be sent via your preferred email client.
              </p>
            </div>

            <form onSubmit={handleSendDraft} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="font-mono text-xs text-[#202522] font-medium block">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2 rounded border border-[#E2E6DE] bg-[#FAFBF9] text-xs font-mono text-[#202522] focus:bg-[#FFFFFF] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="font-mono text-xs text-[#202522] font-medium block">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@company.com"
                    className="w-full px-3 py-2 rounded border border-[#E2E6DE] bg-[#FAFBF9] text-xs font-mono text-[#202522] focus:bg-[#FFFFFF] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="font-mono text-xs text-[#202522] font-medium block">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Senior Data Engineer Role / Databricks Architecture"
                  className="w-full px-3 py-2 rounded border border-[#E2E6DE] bg-[#FAFBF9] text-xs font-mono text-[#202522] focus:bg-[#FFFFFF] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="font-mono text-xs text-[#202522] font-medium block">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your data platform challenge, timeline, or opportunity..."
                  className="w-full px-3 py-2 rounded border border-[#E2E6DE] bg-[#FAFBF9] text-xs font-sans text-[#202522] focus:bg-[#FFFFFF] transition-colors"
                />
              </div>

              {status === "error" && (
                <div className="p-3 rounded bg-[#FAF3E1] border border-[#B2751E] font-mono text-xs text-[#B2751E]">
                  Please provide your name, valid email address, and a message.
                </div>
              )}

              {status === "ready" && (
                <div className="p-3 rounded bg-[#EAF0EB] border border-[#3E6146] font-mono text-xs text-[#3E6146]">
                  Your message has been drafted and opened in your email client.
                </div>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#3E6146] text-[#FFFFFF] font-mono text-xs font-semibold hover:bg-[#2F4B36] transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
