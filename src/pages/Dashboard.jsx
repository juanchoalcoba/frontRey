import React, { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import HeroSlider from "../components/HeroSlider";
import HeroScroll from "../components/HeroScroll";
import { Link } from "react-router-dom";
import BrandCarousel from "../components/BrandCarrousel";
import Footer from "../components/Footer";
import { ReactTyped } from "react-typed";

const Dashboard = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleValue = 1 + scrollY * 0.0005; // Ajusta el zoom
  const translateY = scrollY * 0.3; // Ajusta el desplazamiento vertical

  return (
    <>
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Imagen de fondo con efecto parallax */}
        <img
          src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fondo elegante"
          className="absolute inset-0 w-full h-full object-cover will-change-transform scale-[1.05]"
          style={{
            transform: `scale(${scaleValue}) translateY(${translateY}px)`,
          }}
        />

        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido centrado */}
        <div className="flex justify-center flex-col items-center z-10 text-center mt-16 text-white px-6 max-w-4xl">
          <h1 className="text-6xl text-[#FFE5B4] md:text-[5rem] font-extrabold mb-4 tracking-wide">
            <span className=" text-[#d15e28]  drop-shadow-[2px_2px_2px_#000]">
              Rey Hnos
            </span>
            <br />
            Clothes & Shoes
          </h1>
          <p className="text-lg md:text-xl mb-6 text-[#FFE5B4] text-center text-balance w-full leading-relaxed">
            Vanguardia y elegancia en cada prenda. Descubrí nuestra colección
            premium de ropa y calzado diseñada para destacar.
          </p>
          <Link
            to="/productos"
            className="bg-[#FFE5B4] cursor-pointer text-black px-14 py-2 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            Tienda
          </Link>

          <div className="flex justify-center items-center mt-8">
            <ReactTyped
              strings={["CYBER LUNES", "Descuentos increíbles", "Solo por hoy"]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-xs md:text-[10px] text-orange-100 tracking-widest font-semibold uppercase"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-24">
        <BrandCarousel />
      </div>

      <AboutSection />
      <HeroSlider />
      <HeroScroll />
      <Footer />
    </>
  );
};

export default Dashboard;
