import { useLayoutEffect, useRef } from "react";

// Progressive-enhancement reveal.
// Content is fully visible by default in the DOM. The hiding class (.reveal) is added
// ONLY by JS, and only when motion is allowed. If JS is disabled, reduced motion is
// requested, or the observer never fires, the content remains visible. A safety timer
// also forces the reveal so animation is never required for text to appear.
export const Reveal = ({ children, className, delay = 0, as: Tag = "div", ...rest }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return undefined;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return undefined;

    el.classList.add("reveal");
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.classList.add("reveal-in");
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (show(), io.disconnect())),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    const t = setTimeout(show, 1400); // fallback: never leave content hidden

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <Tag ref={ref} style={delay ? { transitionDelay: `${delay}s` } : undefined} className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
