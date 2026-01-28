import Metrics from "./Metrics";
import { motion } from "framer-motion";
import { hoverLift } from "../../animations/hover";

interface Props {
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
}

export default function CaseStudyCard({ title, description, metrics }: Props) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
    >
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>

      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Metrics
            key={index}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </div>
    </motion.div>
  );
}
