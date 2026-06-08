import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Subtle, single-fire fade-up used across sections. Respects reduced motion via MotionConfig.
export const Reveal = ({ children, delay = 0, y = 22, className, ...props }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: EASE }}
    {...props}
  >
    {children}
  </motion.div>
);

export default Reveal;
