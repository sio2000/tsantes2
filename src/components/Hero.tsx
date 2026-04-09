import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.45}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToCollection = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '680px' }}>
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 origin-center"
        style={{ willChange: 'transform' }}
      >
        <img
          src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1920&q=80"
          alt="Χειροποίητη δερμάτινη τσάντα"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.2) 40%, rgba(8,8,8,0.75) 85%, rgba(8,8,8,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(8,8,8,0.6) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="mb-6" style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
          <span className="section-tag">Τρίκαλα, Ελλάδα — Ατελιέ χειροποίητης τσάντας</span>
        </div>

        <h1
          className="mb-6"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(36px, 6vw, 88px)',
            lineHeight: 1.05,
            color: 'var(--color-text)',
            maxWidth: '780px',
            animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both',
          }}
        >
          Δεν είναι απλά μια τσάντα.
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Είναι χαρακτήρας.</em>
        </h1>

        <p
          className="mb-10"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '15px',
            color: 'rgba(240,236,228,0.65)',
            maxWidth: '420px',
            lineHeight: 1.7,
            animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both',
          }}
        >
          Χειροποίητες δερμάτινες τσάντες, σχεδιασμένες να ξεχωρίζουν.
          Κάθε κομμάτι ολοκληρώνεται στο χέρι, σε περιορισμένο αριθμό.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.65s both' }}
        >
          <button onClick={scrollToCollection} className="btn-primary">
            <span>Ανακάλυψε τη συλλογή</span>
            <ArrowRight size={14} />
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            <span>Δημιούργησε τη δική σου</span>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-8 right-8 md:right-12 z-10 hidden md:flex flex-col items-center gap-3"
        style={{ animation: 'fadeIn 1.2s ease 1.2s both' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '9px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(240,236,228,0.4)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)' }} />
      </div>

      <button
        onClick={scrollToCollection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 md:hidden flex flex-col items-center gap-2"
        style={{ background: 'none', border: 'none' }}
      >
        <ArrowDown size={18} style={{ color: 'var(--color-gold)', animation: 'float 2s ease-in-out infinite' }} />
      </button>

      <div
        className="absolute top-0 left-0 w-full z-10"
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', top: '72px' }}
      />
    </section>
  );
}
