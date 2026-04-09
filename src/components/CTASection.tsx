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
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&dpr=1"
          alt="CTA background"
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
          <span className="section-tag">Limited — Exclusive — Unique</span>
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
          Ξεχώρισε.
          <br />
          <em style={{ fontStyle: 'italic' }} className="gold-gradient">
            Φόρα κάτι
          </em>
          <br />
          που δεν έχει
          <br />
          κανείς άλλος.
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
          Η αποκλειστικότητα δεν είναι πολυτέλεια. Είναι επιλογή.
          Κάνε αυτή την επιλογή σήμερα.
        </p>

        <div className="reveal delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={scrollToContact} className="btn-primary text-base">
            <span>Ξεκίνα τώρα</span>
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
