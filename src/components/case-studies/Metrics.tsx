import { motion } from "framer-motion";

interface Props {
  label: string;
  value: string;
}

export default function Metrics({ label, value }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white/5 border border-white/10 p-4 text-center"
    >
      <p className="text-xl font-semibold text-white">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}
