import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MealPlans from './components/MealPlans';
import HowItWorks from './components/HowItWorks';
import SignupForm from './components/SignupForm';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQPage from './components/FAQPage';
// import PromoNavBar from './components/PromonavBar';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  const scrollTo = location.state?.scrollTo;
  if (scrollTo) {
    const el = document.getElementById(scrollTo);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
        navigate('.', { replace: true, state: {} });
      }, 150);
    }
  }
}, [location, navigate]);

  return (
    <>
      <Hero />
      <section id="about-us"><About /></section>
      <section id="meal-plans"><MealPlans /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <Gallery />
      <WhyChooseUs />
      <SignupForm />
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
     
     {/* 🔶 Top Banner */}
     {/* <div>
<PromoNavBar />
</div> */}

      {/* 🔶 Sticky Navbar */}
<div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* 🔶 Main Content */}
      <div className="font-sans text-neutral-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
