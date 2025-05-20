// HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGllbmRhJTIwZGUlMjByb3BhfGVufDB8fDB8fHww',
    title: 'Esenciales de Verano',
    text: 'Descubrí los outfits perfectos para la temporada de sol.',
    button: 'Comprar Ahora',
  },
  {
    id: 2,
    image: 'https://media.glamour.mx/photos/667d769bb9f05387d65162d9/16:9/w_2000,h_1125,c_limit/Outfit%20para%20fiesta%20de%20noche%20mujer.jpg',
    title: 'Ropa de Noche Elegante',
    text: 'Brillá en cada evento con nuestra colección exclusiva.',
    button: 'Explorar',
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=',
    title: 'Estilo Casual',
    text: 'Comodidad y estilo para todos los días.',
    button: 'Ver Más',
  },
  {
    id: 4,
    image: 'https://wallpapers.com/images/featured/tienda-i5s6es944n29q9sp.jpg',
    title: 'Listo para el Trabajo',
    text: 'Elevá tu look de oficina con un toque de elegancia.',
    button: 'Ver Colección',
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[85vh]">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 1700, disableOnInteraction: false }}
        navigation
        loop
        speed={800}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black opacity-50" />

              {/* Contenido */}
              <div className="relative z-10 flex items-center justify-start px-10 lg:px-24 h-full">
                <div className="backdrop-blur-sm p-6 rounded-3xl max-w-3xl text-white space-y-4 animate-fadeIn">
                  <h2 className="text-4xl lg:text-5xl font-bold">{slide.title}</h2>
                  <p className="text-lg">{slide.text}</p>
                  <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
