import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import HeroSlider from "../components/HeroSlider";
import HeroScroll from "../components/HeroScroll";

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
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con efecto parallax */}
        <img
          src="https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ="
          alt="Fondo elegante"
          className="absolute inset-0 w-full h-full object-cover will-change-transform scale-[1.05]"
          style={{
            transform: `scale(${scaleValue}) translateY(${translateY}px)`,
          }}
        />

        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
            Rey Clothes & Shoes
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
            Vanguardia y elegancia en cada prenda. Descubrí nuestra colección
            premium de ropa y calzado diseñada para destacar.
          </p>
          <button className="bg-white cursor-pointer text-black px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300">
            Tienda
          </button>
        </div>
      </div>

      <AboutSection />
      <HeroSlider />
      <HeroScroll />
    </>
  );
};

export default Dashboard;
