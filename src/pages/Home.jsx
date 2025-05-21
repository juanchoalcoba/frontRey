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
        "url('https://static.vecteezy.com/system/resources/previews/048/987/089/non_2x/fashion-model-in-vintage-suit-old-fashioned-wallpaper-background-classic-male-portrait-timeless-and-stylish-look-free-photo.jpg')",
    }}
  />

  {/* Contenido encima */}
  <div className="relative z-10 px-4">
    <h1 className="text-5xl text-[#FFE5B4] md:text-[9rem] font-bold mb-8 drop-shadow-xl">
      Bienvenidos
    </h1>

    <Link to="/tienda">
  <motion.button
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    }}

    className="px-16 py-3 text-[1rem] bg-orange-500 cursor-pointer text-orange-100  rounded-full shadow-lg hover:bg-orange-600 transition-colors"
  >
    Ingresar
  </motion.button>
</Link>
  </div>
</div>
  );
};

export default Home;
