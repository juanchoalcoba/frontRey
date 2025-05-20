import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center text-white text-center overflow-hidden">

  {/* Fondo negro detrás */}
  <div className="absolute inset-0 bg-black z-0" />

  {/* Imagen de fondo con opacidad */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
    style={{
      backgroundImage:
        "url('https://media.istockphoto.com/id/901863672/photo/clothes-shop-interior.jpg?s=612x612&w=0&k=20&c=2Xv0bb-igj9sqzsZQgrnBAV3uxPTXmUpZ69MbiCYStY=')",
    }}
  />

  {/* Contenido encima */}
  <div className="relative z-10 px-4">
    <h1 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-xl">
      Rey Clothes & Shoes
    </h1>

    <Link to="/tienda">
  <motion.button
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    }}

    className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-colors"
  >
    Ingresar
  </motion.button>
</Link>
  </div>
</div>
  );
};

export default Home;
