import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import type {Variants } from "framer-motion";


const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const services = [
  {
    title: "End-to-End Web Applications",
    description:
      "Complete web applications covering frontend, backend, APIs, and third-party integrations.",
  },
  {
    title: "Frontend & UI Engineering",
    description:
      "Clean, responsive interfaces with smooth animations and attention to interaction details.",
  },
  {
    title: "Backend & API Development",
    description:
      "Secure and scalable backend systems with well-structured APIs.",
  },
  {
    title: "Payments & Integrations",
    description:
      "Payment workflows and third-party service integrations for real-world applications.",
  },
  {
    title: "Email & SMS Automation",
    description:
      "Messaging and notification systems for communication, alerts, and workflows.",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-20 pb-14 px-6 bg-[#0B0D10]">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
            WHAT I BUILD
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Full-stack solutions built with care and clarity
          </h2>
        </motion.div>

        {/* Services Grid — STAGGERED */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
