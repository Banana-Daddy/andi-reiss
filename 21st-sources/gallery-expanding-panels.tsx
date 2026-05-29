// 21st.dev Inspiration — cached for HANDOFF MODE
// Query: "masonry gallery hover"  |  Component: "Image Gallery" (expanding flex panels)
// Cached: 2026-05-29
// Borrowed for: direction-cinematic.html filmstrip (continuous strip of stills) and the
//   hover grayscale->color reveal. The flex-grow-on-hover panel idea informed the
//   interactive feel; we translated it into a sprocket-holed marquee filmstrip.

import React from "react";

export default function ExpandingGallery() {
  const images = [
    "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76",
    "https://images.unsplash.com/photo-1649265825072-f7dd6942baed",
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f",
    "https://images.unsplash.com/photo-1729086046027-09979ade13fd",
  ];
  return (
    <section className="w-full flex flex-col items-center py-12">
      <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img className="h-full w-full object-cover object-center" src={src} alt={`image-${idx}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
