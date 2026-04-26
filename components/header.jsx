import React from "react";
import { CheckCircle2, CalendarDays } from "lucide-react";
import { SparklesCore } from "../components/ui/sparkles";

function Header() {
  return (
    <div className="relative w-full bg-black flex flex-col items-center overflow-visible rounded-md">
      <header className="relative w-[calc(100%-2rem)] max-w-5xl rounded-xl overflow-visible mb-8 mt-8 sm:mt-12 bg-transparent">
        {/* Background Blur Glow */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.15)]" />

        {/* Glow Effects */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/30 rounded-full blur-3xl" />

        {/* Content + Sparkles Anchor */}
        <div className="relative z-10">
          {/* Content */}
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
            {/* Left */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="shrink-0 p-2 sm:p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>

              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  My TODO
                </h1>
                <p className="text-xs sm:text-sm text-white/70">
                  Focus. Organize. Achieve.
                </p>
              </div>
            </div>

            {/* Right Badge */}
            <div className="flex shrink-0 items-center gap-2 px-3 py-2 sm:px-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs sm:text-sm">
              <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Today
            </div>
          </div>

          {/* Sparkles attached to content bottom */}
          <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -mt-px w-[40rem] h-32 sm:h-40 overflow-visible [mask-image:radial-gradient(80%_100%_at_50%_0%,white,transparent)]">
            {/* Gradients */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

            {/* Sparkles */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={900}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Fade Mask */}
            <div className="absolute inset-0 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;