import { useState } from "react";
import { FaTshirt, FaShoePrints, FaStore } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    icon: <FaTshirt className="text-white text-5xl" />,
    title: "Ropa de Moda",
    content: "Ofrecemos prendas versátiles, modernas y cómodas para todas las estaciones.",
    hoverTitle: "Estilo que Enamora",
    hoverContent: "Explora nuestras colecciones que combinan diseño, comodidad y tendencia.",
    image: "https://media.glamour.mx/photos/667d769bb9f05387d65162d9/16:9/w_2000,h_1125,c_limit/Outfit%20para%20fiesta%20de%20noche%20mujer.jpg",
  },
  {
    icon: <FaShoePrints className="text-white text-5xl" />,
    title: "Calzado Exclusivo",
    content: "Diseños ergonómicos, materiales duraderos y últimas tendencias.",
    hoverTitle: "Camina con Poder",
    hoverContent: "Zapatos que elevan tu presencia. Cada paso es una declaración.",
    image: "https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=",
  },
  {
    icon: <FaStore className="text-white text-5xl" />,
    title: "Pasión por el Servicio",
    content: "10 años vistiendo a nuestros clientes con dedicación.",
    hoverTitle: "Experiencia Inolvidable",
    hoverContent: "Una tienda donde la moda se encuentra con la atención al detalle.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGllbmRhJTIwZGUlMjByb3BhfGVufDB8fDB8fHww",
  },
];

const AboutSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-16 px-4 md:px-20" id="about">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          En <strong>Rey Hnos</strong> fusionamos moda y comodidad. Nuestra tienda ofrece ropa y calzado de alta calidad, para todos los estilos. Descubre quiénes somos y por qué somos tu mejor elección.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative group rounded-2xl p-6 h-80 shadow-lg shadow-neutral-300/40 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Imagen de fondo con opacidad */}
            <AnimatePresence>
              {hovered === index && (
                <motion.div
                  key="bg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              )}
            </AnimatePresence>

            {/* Capa oscura fija */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl pointer-events-none"></div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <AnimatePresence mode="wait">
                {hovered === index ? (
                  <motion.div
                    key="hover"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 px-2"
                  >
                    {item.icon}
                    <h3 className="text-xl font-bold tracking-wide">{item.hoverTitle}</h3>
                    <p className="text-sm">{item.hoverContent}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 px-2"
                  >
                    {item.icon}
                    <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
                    <p className="text-sm">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
