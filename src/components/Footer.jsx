import React from 'react';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left items-center md:items-start">
        
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-orange-200">Rey Hnos Clothes & Shoes</h2>
          <p className="mt-4 text-sm text-gray-400">
            Moda con estilo para cada ocasión. Ropa y calzado seleccionados con pasión.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="hover:text-orange-300 transition-all"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-orange-300 transition-all"><FaFacebookF size={20} /></a>
          </div>
        </div>

        {/* Sucursales */}
        <div>
          <h3 className="text-xl font-semibold text-orange-200 mb-4">Nuestras Sucursales</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaMapMarkerAlt /> Durazno, Uruguay
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaMapMarkerAlt /> Flores, Uruguay
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaMapMarkerAlt /> Tacuarembó, Uruguay
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xl font-semibold text-orange-200 mb-4">Contacto</h3>
          <p className="text-gray-400 mb-2">Teléfono: <span className="text-white">+598 99 123 456</span></p>
          <p className="text-gray-400 mb-2">Email: <span className="text-white">contacto@reyhnos.com</span></p>
          <p className="text-gray-400">Horario: Lun a Sáb - 9:00 a 19:00</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rey Hnos Clothes & Shoes. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
