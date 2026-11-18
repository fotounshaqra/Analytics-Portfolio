
import { motion } from "framer-motion";

export default function ExperiencePie() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      style={{
        width: "100%",
        maxWidth: "280px",
        margin: "30px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        opacity: 1,
        visibility: "visible",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background:
            "conic-gradient(#894969 0% 75%, #B99AD6 75% 100%)",
          flexShrink: 0,
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          marginTop: "20px",
          fontSize: "14px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "50%",
              background: "#894969",
            }}
          />
          FMCG
        </span>

        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "50%",
              background: "#B99AD6",
            }}
          />
          Retail
        </span>
      </div>
    </motion.div>
  );
}

