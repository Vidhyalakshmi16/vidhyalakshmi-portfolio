import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  // Close menu on resize (important polish)
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent"
    >
      {/* Navbar */}
      <nav className="w-full h-16 px-6 md:px-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("top")}
          className="text-sm tracking-[0.3em] text-white"
        >
          VIDHYALAKSHMI
        </button>

        {/* Desktop Links */}
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0B0D10] border-t border-white/10 px-6 pb-6"
          >
            <div className="flex flex-col gap-5 pt-5 text-gray-300">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left hover:text-white transition"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
