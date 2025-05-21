"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaUsers, FaChartLine, FaRocket } from "react-icons/fa";

const infoItems = [
  {
    icon: <FaUsers size={30} className="text-white" />,
    title: "Nuestra Comunidad",
    text: "Miles de personas conectadas por la moda y el diseño.",
  },
  {
    icon: <FaChartLine size={30} className="text-white" />,
    title: "Crecimiento Sostenido",
    text: "Año tras año mejoramos nuestra producción.",
  },
  {
    icon: <FaRocket size={30} className="text-white" />,
    title: "Innovación Constante",
    text: "Redefinimos lo que significa vestir con estilo.",
  },
];

const HeroScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <div ref={containerRef} className="mt-2">
      {/* HERO */}
      <div className="relative h-[100vh] overflow-hidden">
        <motion.div
          style={{ scale, y }}
          className="absolute inset-0 bg-[url('https://cdn.luna.com.uy/brooksfield.com.uy/files/s3/tmp/compressed/normal/zaixcua66t3iazdb3wtc.jpg')] bg-cover bg-center"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-orange-200 text-[5rem] lg:text-[7rem] font-bold text-center px-6">
            Inspirá tu estilo con propósito
          </h1>
        </div>
      </div>

      {/* SECCIÓN SOBRE NOSOTROS */}
      <section className="bg-black text-white py-20 px-6 lg:px-24">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Inspiramos Confianza
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-300">
          Nos dedicamos a crear moda con propósito, mezclando diseño, comunidad
          e innovación para que cada prenda hable por sí misma.
        </p>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-3 gap-10">
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-orange-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105"
            >
              <div className="mb-4 flex items-center  justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroScroll;
