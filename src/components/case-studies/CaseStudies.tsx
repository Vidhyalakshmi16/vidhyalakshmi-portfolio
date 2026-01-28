import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";
import { fadeUp } from "../../animations/fade";
import { reveal } from "../../animations/reveal";

const caseStudies = [
  {
    title: "Campaign Landing Page",
    description:
      "Frontend development for a paid marketing campaign with focus on speed, clarity, and conversion flow.",
    metrics: [
      { label: "Conversion Lift", value: "+38%" },
      { label: "Page Load", value: "1.2s" },
      { label: "Bounce Rate", value: "-24%" },
      { label: "Mobile Score", value: "94" },
    ],
  },
  {
    title: "Brand Website Redesign",
    description:
      "Motion-enhanced frontend experience designed to improve engagement and brand perception.",
    metrics: [
      { label: "Engagement", value: "+42%" },
      { label: "Scroll Depth", value: "+31%" },
      { label: "Lighthouse", value: "96" },
      { label: "SEO Ready", value: "Yes" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-32 px-6 bg-[#0B0D10]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
            CASE STUDIES
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Frontend work built for marketing performance
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              description={study.description}
              metrics={study.metrics}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
