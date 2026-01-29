import { motion } from "framer-motion";

export default function HeroText() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.35em] text-gray-400 mb-4"
      >
        VIDHYALAKSHMI
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight"
      >
        Full-Stack Web Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-4 text-base text-gray-300 max-w-xl"
      >
        I build complete web applications — clean interfaces, solid backend
        systems, APIs, integrations, and performance-focused experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <button
          onClick={() => scrollToSection("projects")}
          className="
            px-7 py-3.5
            rounded-full
            bg-white
            text-black
            text-sm
            font-medium
            hover:bg-gray-200
            transition
          "
        >
          View Work
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="
            px-7 py-3.5
            rounded-full
            border border-white/30
            text-white
            text-sm
            font-medium
            hover:border-white
            transition
          "
        >
          Contact
        </button>
      </motion.div>

          </div>
  );
}
