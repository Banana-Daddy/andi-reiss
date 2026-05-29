// 21st.dev Inspiration — cached for HANDOFF MODE
// Query: "cinematic fullscreen hero"  |  Component: "Hero with bg video" (DarkProjectHero)
// Cached: 2026-05-29
// Borrowed for: direction-cinematic.html — full-bleed dark hero with media background +
//   black/overlay scrim for legibility, bottom-anchored oversized headline, kicker label.
//   We swapped the bg <video> for a still (cine-car.jpg) + radial scrim, added letterbox
//   bars + animated timecode. The structural idea (fixed full-bleed media, dark overlay,
//   centered/anchored content, animated headline) comes from here.

"use client";
import * as React from "react";
import { motion } from "framer-motion";

function DarkProjectHero() {
  return (
    <div className="fixed inset-0 w-full h-full min-h-screen z-[-1] font-sans">
      {/* Background media */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/your-video.mp4"
        autoPlay loop muted playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/80 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-screen">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col w-full">
          <div className="flex gap-4 flex-col">
            <motion.h1
              className="text-5xl md:text-7xl max-w-2xl tracking-tight text-center font-extrabold"
              initial={{ opacity: 0, y: -100 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              Welcome to the future
            </motion.h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl text-center">
              Subheading copy goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { DarkProjectHero };
