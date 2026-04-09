import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <BrandStory />
        <Marquee />
        <Services />
        <Testimonials />
        <Portfolio />
        <Process />
        <InstagramSection />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
