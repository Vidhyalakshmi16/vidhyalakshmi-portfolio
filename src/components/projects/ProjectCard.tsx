import { motion } from "framer-motion";
import { hoverLift } from "../../animations/hover";

interface Props {
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="rounded-2xl border border-white/10 bg-white/5 p-8"
    >
      <h3 className="text-xl font-medium text-white mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
