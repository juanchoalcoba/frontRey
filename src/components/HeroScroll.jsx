import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaChartLine, FaRocket } from 'react-icons/fa';

const infoItems = [
  {
    icon: <FaUsers size={30} className="text-white" />,
    title: 'Nuestra Comunidad',
    text: 'Miles de personas conectadas por la moda y el diseño.',
  },
  {
    icon: <FaChartLine size={30} className="text-white" />,
    title: 'Crecimiento Sostenido',
    text: 'Año tras año mejoramos nuestra producción.',
  },
  {
    icon: <FaRocket size={30} className="text-white" />,
    title: 'Innovación Constante',
    text: 'Redefinimos lo que significa vestir con estilo.',
  },
];

const HeroScroll = () => {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 400], [100, 50]); // achica el hero
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]); // opcional: escala el fondo

  return (
    <div>
      {/* HERO CON FONDO Y EFECTO */}
      <motion.div
        className="w-full overflow-hidden"
        style={{ height: height + 'vh', scale }}
      >
        <div
          className="w-full h-full bg-cover mt-12 bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1602810310475-8cc7b39f601c?auto=format&fit=crop&w=1950&q=80)',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-7xl font-bold text-white text-center px-6"
          >
            Inspirá tu estilo con propósito
          </motion.h1>
        </div>
      </motion.div>

      {/* SECCIÓN SOBRE NOSOTROS */}
      <section className="bg-black text-white py-20 px-6 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-5xl font-bold text-center mb-10"
        >
          Inspiramos Confianza
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-300"
        >
          Nos dedicamos a crear moda con propósito, mezclando diseño, comunidad e innovación para que cada prenda hable por sí misma.
        </motion.p>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-3 gap-10">
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105"
            >
              <div className="mb-4 flex items-center justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-sm text-gray-300 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroScroll;
