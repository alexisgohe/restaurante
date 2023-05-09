import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="slider_container">
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <button type="button" onClick={() => setIsOpen((isOpen) => !isOpen)}>
          cerrar
        </button>
        <p>Hola</p>
      </motion.nav>
      <button
        style={{ display: isOpen ? "none" : "block"}}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        Abrir
      </button>
    </div>
  );
}
