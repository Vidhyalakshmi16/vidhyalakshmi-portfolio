import { motion } from "framer-motion";
import { hoverLift } from "../../animations/hover";

interface Props {
  title: string;
  items: string[];
}

export default function SkillItem({ title, items }: Props) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <h3 className="text-lg font-medium text-white mb-4">
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-400">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
