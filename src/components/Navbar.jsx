import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaBars, FaTimes, FaCog } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const configRef = useRef(null);
  const menuRef = useRef(null);


  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  if (menuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
}, [menuOpen]);

  useEffect(() => {
    setConfigOpen(false);
  }, [isAuthenticated]);

  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-3 bg-white/10 backdrop-blur-md shadow-md rounded-b-xl border-b border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex  justify-center items-center">
        <Link to='/'>
          <img className="w-12 rounded-full" src="logorey.png" alt="" />
        </Link>
        <h1 className="text-2xl text-gray-200 ml-2">Rey Hnos</h1>
        </div>
        {/* Desktop Menu */}
        <ul ref={menuRef} className="hidden md:flex items-center gap-6 text-white font-medium">
          {isAuthenticated ? (
            <>
              <li className="text-sm uppercase text-orange-200">Hola, {user?.username || "User"}</li>
              <li>
                <Link
                  to="/tienda"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/productos"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Contacto
                </Link>
              </li>
              <li className="relative" ref={configRef}>
                <button
                  onClick={() => setConfigOpen(!configOpen)}
                  className="hover:text-orange-300 transition duration-200"
                >
                  <FaCog className="text-lg" />
                </button>
                {configOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white/80 backdrop-blur-md text-black rounded-lg shadow-lg py-2 z-50">
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 hover:bg-orange-100"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Registrar
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-white font-medium bg-white/10 backdrop-blur-md rounded-lg px-4 py-4 border border-white/10">
          {isAuthenticated ? (
            <>
              <li>Hola, {user?.username || "User"}</li>
              <li>
                <Link
                  to="/productos"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-300"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-300"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 hover:text-orange-300"
                >
                  <FaCog /> Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-300"
                >
                  Ingresar
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-300"
                >
                  Registrar
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
