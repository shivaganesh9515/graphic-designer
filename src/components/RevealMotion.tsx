"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface RevealMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealMotion({
  children,
  className = "",
  delay = 0,
}: RevealMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}
