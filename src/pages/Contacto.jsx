import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen mt-18 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300 px-4 py-16">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10 transition-all duration-300">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">¡Contáctanos!</h2>
        <p className="text-gray-600 mb-8 text-center">
          ¿Tienes alguna pregunta sobre nuestros productos de ropa o calzado? ¡Estamos para ayudarte!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos en qué podemos ayudarte..."
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-md"
          >
            Enviar Mensaje
          </button>
          {submitted && (
            <div className="text-green-600 text-center font-medium mt-4 animate-pulse">
              ¡Gracias por contactarnos! Te responderemos pronto. 💌
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
