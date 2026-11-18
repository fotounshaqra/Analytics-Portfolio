import { motion } from "framer-motion";

export default function ExperiencePie() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, rotate: -35 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ width: "100%", maxWidth: 280, margin: "24px auto", display: "flex", flexDirection: "column", alignItems: "center", justifySelf: "center" }}
    >
      <div
        role="img"
        aria-label="Industry experience: FMCG and Retail"
        style={{ width: 240, height: 240, maxWidth: "100%", aspectRatio: "1", borderRadius: "50%", background: "conic-gradient(#894969 0% 75%, #B99AD6 75% 100%)", flexShrink: 0 }}
      />
      <div style={{ display: "flex", gap: 24, marginTop: 18, fontSize: 14, justifyContent: "center" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}><i style={{ width: 11, height: 11, borderRadius: "50%", background: "#894969" }} />FMCG</span>
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}><i style={{ width: 11, height: 11, borderRadius: "50%", background: "#B99AD6" }} />Retail</span>
      </div>
    </motion.div>
  );
}
