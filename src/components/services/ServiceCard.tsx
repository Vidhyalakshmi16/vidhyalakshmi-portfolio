import { motion } from "framer-motion";
import { hoverLift } from "../../animations/hover";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      <h3 className="text-lg font-medium text-white mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
