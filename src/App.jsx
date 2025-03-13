// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GiftProvider } from './context/GiftContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GiftList from './components/GiftList';
import GiftForm from './components/GiftForm';
import GiftDetail from './components/GiftDetails';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import GiftEdit from './components/GiftEdit';
import './styles/index.css';

function App() {
  return (
    <AuthProvider>
      <GiftProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lista" element={<GiftList />} />
            <Route path="/agregar" element={<GiftForm />} />
            <Route path="/detalle/:id" element={<GiftDetail />} />
            <Route path="/editar/:id" element={<GiftEdit />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/protected"
              element={
                <ProtectedRoute>
                  <ProtectedPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GiftProvider>
    </AuthProvider>
  );
}

export default App;
