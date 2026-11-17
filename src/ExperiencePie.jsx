
import { motion } from "framer-motion";

export default function ExperiencePie() {
  return (
    <motion.div
      className="experience-pie-overlay"
      initial={{ opacity: 0, y: 50, rotate: -15 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <svg
        viewBox="0 0 240 240"
        role="img"
        aria-label="Industry experience in FMCG and Retail"
      >
        <motion.g
          initial={{ scale: 0.5, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "120px 120px" }}
        >
          <path
            d="M120 120 L120 20 A100 100 0 1 1 20 120 Z"
            fill="#894969"
          />

          <path
            d="M120 120 L20 120 A100 100 0 0 1 120 20 Z"
            fill="#B99AD6"
          />
        </motion.g>
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
