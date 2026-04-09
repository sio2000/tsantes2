import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Μαρία Π.',
    location: 'Αθήνα',
    text: 'Έφτιαξα custom sneakers για τα γενέθλιά μου και ήταν ακριβώς αυτό που φανταζόμουν. Η προσοχή στη λεπτομέρεια είναι εκπληκτική. Σε έχω ξαναπαράγγειλα ήδη!',
    rating: 5,
    item: 'Custom Sneakers',
  },
  {
    name: 'Νίκος Δ.',
    location: 'Θεσσαλονίκη',
    text: 'Ζήτησα μια handmade τσάντα για δώρο στη σύντροφό μου. Όταν την είδε, δεν μπορούσε να πιστέψει ότι ήταν χειροποίητη. Η ποιότητα ξεπερνά τις προσδοκίες.',
    rating: 5,
    item: 'Luxury Bag',
  },
  {
    name: 'Ελένη Κ.',
    location: 'Τρίκαλα',
    text: 'Το αποτέλεσμα ήταν πέρα από κάθε προσδοκία. Ένα truly unique κομμάτι που κάνει κάθε outfit να ξεχωρίζει. Τέλεια εξυπηρέτηση και επικοινωνία.',
    rating: 5,
    item: 'Full Custom',
  },
  {
    name: 'Δημήτρης Α.',
    location: 'Λάρισα',
    text: 'Παρήγγειλα custom sneakers με το δικό μου σχέδιο. Η διαδικασία ήταν ομαλή και το αποτέλεσμα τέλειο. Φοράω κάτι που δεν έχει κανείς άλλος.',
    rating: 5,
    item: 'Custom Sneakers',
  },
];

export default function Testimonials() {
  useReveal();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5500);
    return () => clearInterval(interval);
  });

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="reveal mb-4">
            <span className="section-tag">Κριτικές</span>
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--color-text)',
            }}
          >
            Αυτό λένε
            <br />
            <em style={{ fontStyle: 'italic' }} className="gold-gradient">οι πελάτες μας</em>
          </h2>
          <div className="gold-line-left reveal delay-200 mt-6 w-16" />
          <p
            className="reveal delay-300 mt-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'rgba(240,236,228,0.5)',
              maxWidth: '360px',
              lineHeight: 1.8,
            }}
          >
            Κάθε κριτική είναι μια ιστορία. Κάθε πελάτης είναι μέρος της οικογένειας HANDSTUFF.
          </p>
        </div>

        <div className="reveal delay-200">
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              padding: '40px',
              transition: 'opacity 0.3s ease',
              opacity: animating ? 0 : 1,
            }}
          >
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />
              ))}
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-text)',
                lineHeight: 1.6,
                marginBottom: '28px',
              }}
            >
              "{t.text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    color: 'rgba(240,236,228,0.4)',
                    marginTop: '2px',
                  }}
                >
                  {t.location} · {t.item}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  style={{
                    background: 'none',
                    border: '1px solid var(--color-border)',
                    color: 'rgba(240,236,228,0.4)',
                    padding: '8px',
                    display: 'flex',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-gold)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-gold)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(240,236,228,0.4)';
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  style={{
                    background: 'none',
                    border: '1px solid var(--color-border)',
                    color: 'rgba(240,236,228,0.4)',
                    padding: '8px',
                    display: 'flex',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-gold)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-gold)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(240,236,228,0.4)';
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: '2px',
                    background: i === current ? 'var(--color-gold)' : 'var(--color-border)',
                    flex: i === current ? 2 : 1,
                    border: 'none',
                    transition: 'all 0.4s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
