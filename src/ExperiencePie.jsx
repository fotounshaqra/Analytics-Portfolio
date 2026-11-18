
import { motion } from "framer-motion";

export default function ExperiencePie() {
  return (
    <motion.div
      className="experience-pie-overlay"
      initial={{
        opacity: 0,
        scale: 0.6,
        rotate: -90,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <svg
        viewBox="0 0 240 240"
        role="img"
        aria-label="Industry experience: FMCG and Retail"
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

      <motion.div
        className="experience-pie-legend"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <span>
          <i className="fmcg-color" />
          FMCG
        </span>

        <span>
          <i className="retail-color" />
          Retail
        </span>
      </motion.div>
    </motion.div>
  );
}
