"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-xl glass-pill flex items-center justify-center opacity-60">
        <Sun className="w-4 h-4 text-[#FF6B35]" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-1.5 rounded-xl glass-pill hover:border-[#FF6B35]/50 hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center group overflow-hidden"
    >
      <div
        className="transition-transform duration-500 ease-out flex items-center justify-center"
        style={{
          transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
        }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#FF6B35] group-hover:scale-110 transition-transform shadow-sm" />
        ) : (
          <Moon className="w-4 h-4 text-[#3B82F6] group-hover:scale-110 transition-transform" />
        )}
      </div>
    </button>
  );
}
