import { useReveal } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  useReveal();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1920&q=80"
          alt="Δερμάτινη υφή και τεχνική λεπτομέρεια"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(8,8,8,0.85)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto text-center">
        <div className="reveal mb-6">
          <span className="section-tag">Περιορισμένα — Χειροποίητα — Ξεχωριστά</span>
        </div>

        <h2
          className="reveal delay-100 mb-8"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(38px, 6vw, 86px)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: 'var(--color-text)',
          }}
        >
          Ξεχώρισε με κάτι
          <br />
          <em style={{ fontStyle: 'italic' }} className="gold-gradient">που δεν υπάρχει αλλού.</em>
        </h2>

        <div
          className="reveal delay-200 gold-line mb-10 max-w-xs mx-auto"
        />

        <p
          className="reveal delay-300 mb-12 mx-auto"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            fontWeight: 300,
            color: 'rgba(240,236,228,0.6)',
            maxWidth: '420px',
            lineHeight: 1.75,
          }}
        >
          Επένδυσε σε μια χειροποίητη τσάντα που εκφράζει το προσωπικό σου ύφος.
          Design, υλικά και κατασκευή σε απόλυτη ισορροπία.
        </p>

        <div className="reveal delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={scrollToContact} className="btn-primary text-base">
            <span>Επικοινώνησε μαζί μας</span>
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            <span>Δες τη συλλογή</span>
          </button>
        </div>
      </div>
    </section>
  );
}
