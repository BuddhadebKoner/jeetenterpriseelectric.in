import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Dissolve from './pages/Dissolve';
import RentHouse from './pages/RentHouse';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support />} />
          <Route path="dissolve" element={<Dissolve />} />
          <Route path="rent-house" element={<RentHouse />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;