import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Services", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Project", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >
      <nav className="w-full px-10 md:px-16 h-16 flex items-center justify-between pointer-events-auto">

        {/* Name / Home */}
        <button
          onClick={() => scrollTo("top")}
          className="text-sm tracking-[0.3em] text-white hover:opacity-80 transition"
        >
          VIDHYALAKSHMI
        </button>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-sm text-gray-300">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-white transition"
            >
              {link.label}
            </button>
          ))}
        </div>

      </nav>
    </motion.header>
  );
}
