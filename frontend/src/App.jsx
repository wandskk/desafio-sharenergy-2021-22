import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div className="text-2xl font-bold text-blue-600">Página Inicial com TailwindCSS</div>;
}
function About() {
  return <div className="text-xl text-green-600">Sobre o Projeto</div>;
}

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">Sobre</Link>
      </nav>
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 