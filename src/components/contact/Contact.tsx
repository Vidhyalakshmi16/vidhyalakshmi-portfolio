import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0B0D10] border-t border-white/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Let’s build something reliable and impactful
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          If you’re looking for a developer who can handle both the interface and the system behind it, let’s connect.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="mailto:vidhyalakshmi1622@gmail.com"
            className="px-8 py-4 rounded-full bg-white text-black text-sm font-medium"
          >
            Email Me
          </a>

          <a
            href="tel:+916382987970"
            className="px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
