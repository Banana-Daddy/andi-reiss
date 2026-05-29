// 21st.dev Inspiration — cached for HANDOFF MODE
// Query: "masonry gallery hover"  |  Component: "Masonry Grid" (columns + break-inside-avoid)
// Cached: 2026-05-29
// Borrowed for: direction-editorial.html "Photo Essay" section. We translated the
//   columns-1/sm:columns-2/lg:columns-3 + break-inside-avoid pattern straight into vanilla
//   Tailwind CDN (dropping the framer-motion stagger for a CSS IntersectionObserver reveal).

import * as React from "react";
import { motion, useInView } from "framer-motion";

interface MasonryGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  gap?: string;
}

function MasonryGrid<T>({ items, renderItem, className, gap = "1rem" }: MasonryGridProps<T>) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div ref={ref} className={className} style={{ columnGap: gap }} role="list">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="mb-4 break-inside-avoid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          role="listitem"
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default MasonryGrid;
// Usage: className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
