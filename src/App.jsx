import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GiftProvider } from './context/GiftContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GiftList from './components/GiftList';
import GiftForm from './components/GiftForm';
import GiftDetails from './components/GiftDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <GiftProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<GiftList />} />
          <Route path="/agregar" element={<GiftForm />} />
          <Route path="/detalle/:id" element={<GiftDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GiftProvider>
  );
}

export default App;
