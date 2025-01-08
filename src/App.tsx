import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Segments from './components/Segments';
import TrendingProducts from './components/TrendingProducts';
import InteriorDesign from './components/InteriorDesign';
import Process from './components/Process';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Categories />
          <Segments />
          <TrendingProducts />
          <InteriorDesign />
          <AboutUs />
          <Process />
          <Features />
          
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;