import { motion } from "framer-motion";

export default function HeroText() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.35em] text-gray-300 mb-4"
        >
          VIDHYALAKSHMI
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-semibold text-white leading-tight"
        >
          Full-Stack Web Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-3 text-lg md:text-xl text-gray-300"
        >
          Building scalable, animated web applications
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-gray-400"
        >
          I design and develop complete web solutions — from clean, interactive
          user interfaces to secure backend systems, APIs, payments, and
          integrations — with a strong focus on performance and user experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex justify-center gap-6"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 bg-white text-black rounded-full text-sm"
          >
            View Work
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 border border-gray-500 text-white rounded-full text-sm"
          >
            Let’s Collaborate
          </button>
        </motion.div>

      </div>
    </div>
  );
}
