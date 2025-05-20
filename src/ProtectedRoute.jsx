import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth(); // Extraemos estado del contexto

  if (loading) {
    return <h1>Loading...</h1>; // Muestra un mensaje de carga mientras se verifica el estado de autenticación
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Si no está autenticado, redirige al login
  }

  return (
    <div>
      <Outlet /> {/* Si está autenticado, muestra el contenido de la ruta protegida */}
    </div>
  );
}

export default ProtectedRoute;
