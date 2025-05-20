import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // 👈 Hook para redireccionar
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data);
      setShowSuccessModal(true); // 👈 Mostrar modal de éxito
    } catch (err) {
      if (err.response) {
        setError(`Error: ${err.response.data.message}`);
      } else {
        setError('Error al conectarse con el servidor');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/'); // 👈 Redirigir a la tienda después de cerrar modal
  };

  return (
    <div className="h-screen flex flex-col  justify-center items-center bg-black py-12">
      <div className="bg-white p-8 text-black rounded-lg shadow-lg mt-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">Registrar Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="username" className="block text-gray-600">Nombre de Usuario:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              id="username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Registrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-sky-600 hover:underline">
            Inicia sesión
          </Link>
        </p>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>

      {/* ✅ Modal de éxito */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">¡Te has registrado exitosamente!</h2>
            <p>Ahora logueate por favor</p>
            <button
              onClick={handleCloseModal}
              className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
