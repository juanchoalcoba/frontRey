
const brands = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JLfyjBfddLgkYtm2pQaWCZ0MjMyby5cb0A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_GXPx1mzRQvCiHHDGmaEqclxq9QDtiG0vg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLYsNQlrQAorov0JZNrSLZdcat3_HIoVymQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWeTKrKC6wWC65tWHsc-79_kvh3IUS06E9Q&s",
  "https://f.fcdn.app/imgs/3272f7/www.opticamericana.com.uy/opamuy/8187/original/marcas/benson-and-thomas/0x0/benson-and-thomas",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlC-5zNMvjdWHmTkWsbp0cQm2QN3zm94TmiQ&s",
  "https://static.vecteezy.com/system/resources/previews/010/994/411/non_2x/nike-logo-white-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg",
];

const BrandCarousel = () => {
  return (
    <div className="overflow-hidden w-full h-16 bg-white ">
      <div className="animate-marquee flex w-max gap-16">
        {[...brands, ...brands].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Marca ${index}`}
            className="h-16 object-contain grayscale rounded-2xl hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
