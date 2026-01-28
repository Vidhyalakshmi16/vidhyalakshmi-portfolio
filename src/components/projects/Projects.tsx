import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="pt-20 pb-14 px-6 bg-[#0B0D10]">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs tracking-[0.3em] text-gray-400 mb-6">
          PROJECT
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-3xl p-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Mobile E-Commerce Web Application
          </h2>

          <p className="text-gray-400 mb-6">
            A full-stack mobile-focused e-commerce application with product
            listing, authentication, API integration, and smooth UI animations.
          </p>

          <ul className="text-sm text-gray-300 space-y-2 mb-8">
            <li>• Responsive mobile-first UI</li>
            <li>• Frontend + backend integration</li>
            <li>• API-driven architecture</li>
            <li>• Payment and messaging integration</li>
          </ul>

          <a
            href="https://www.srivaarimobiles.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-white text-black rounded-full text-sm"
          >
            View Live Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}
