import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { AllProjectsPage } from './components/AllProjectsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'all-projects'>('home');

  if (currentPage === 'all-projects') {
    return <AllProjectsPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Experience />
      <Contact />
      
      <footer className="bg-gray-800 text-gray-300 py-8 text-center">
        <p className="text-sm">&copy; 2026 Maurice Trogant. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}