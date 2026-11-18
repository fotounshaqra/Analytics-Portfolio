
import { motion } from "framer-motion";

export default function ExperiencePie() {
  return (
    <motion.div
      className="experience-pie-overlay"
      initial={{ opacity: 0, y: 40, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <svg
        viewBox="0 0 240 240"
        role="img"
        aria-label="Industries: FMCG and Retail"
      >
        <path
          d="M120 120 L120 20 A100 100 0 1 1 20 120 Z"
          fill="#894969"
        >
          <title>FMCG</title>
        </path>

        <path
          d="M120 120 L20 120 A100 100 0 0 1 120 20 Z"
          fill="#B99AD6"
        >
          <title>Retail</title>
        </path>
      </svg>

      <div className="experience-pie-legend">
        <span>
          <i className="fmcg-color" />
          FMCG
        </span>

        <span>
          <i className="retail-color" />
          Retail
        </span>
      </div>
    </motion.div>
  );
}
