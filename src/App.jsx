import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';


import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';


function App() {
  return (
    <AuthProvider>
  
        <Router>
          <Navbar />
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas protegidas */}
              <Route path="/tienda" element={<Dashboard />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/productos" element={<Productos />} />
              <Route path="/contacto" element={<Contacto />} />
              
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </Router>
    
    </AuthProvider>
  );
}

export default App;
