import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";

export default function Signature() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[#0B0D10] px-6">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-semibold text-white text-center max-w-4xl leading-tight"
      >
        I build complete web applications.  
        <br />
        Designed with care.  
        <br />
        Engineered to last.
      </motion.h2>
    </section>
  );
}
