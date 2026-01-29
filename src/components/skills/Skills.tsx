import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";

const stack = [
  {
    layer: "Interface Layer",
    description:
      "Where users interact with the product. Focused on clarity, responsiveness, and motion.",
    tools: "React · TypeScript · Tailwind CSS · Framer Motion",
  },
  {
    layer: "Application Layer",
    description:
      "Core application logic and APIs that power features and workflows.",
    tools: "Node.js · Express · REST APIs · Authentication",
  },
  {
    layer: "Integration Layer",
    description:
      "External services connected reliably with edge cases and failures handled.",
    tools: "Payments · Email · SMS · Third-party APIs",
  },
  {
    layer: "Delivery Layer",
    description:
      "Tools and practices that keep development clean, versioned, and deployable.",
    tools: "Git · GitHub · Deployment",
  },
];

export default function SystemStack() {
  return (
    <section id="skills" className="pt-20 pb-14 px-6 bg-[#0B0D10]">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
            SYSTEM STACK
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-3xl">
            How the systems I build are structured
          </h2>
        </motion.div>

        {/* Stack Layers */}
        <div className="space-y-20">
          {stack.map((item, index) => (
            <motion.div
              key={item.layer}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
            >
              {/* Layer name */}
              <h3 className="md:col-span-2 text-xl font-semibold text-white">
                {item.layer}
              </h3>

              {/* Description + tools */}
              <div className="md:col-span-3 space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500">
                  {item.tools}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
