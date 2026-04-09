import { useReveal } from '../hooks/useInView';
import { Instagram } from 'lucide-react';

const gridImages = [
  'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80',
];

export default function InstagramSection() {
  useReveal();

  return (
    <section id="custom-order" className="py-24 md:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="gold-line" />
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-16 md:pt-24">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="reveal mb-4">
            <span className="section-tag">Εξατομικευμένη παραγγελία</span>
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--color-text)',
            }}
          >
            Σχεδίασε τη
            <br />
            <em style={{ fontStyle: 'italic' }} className="gold-gradient">δική σου τσάντα</em>
          </h2>
          <p
            className="reveal delay-200 mt-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: 'rgba(240,236,228,0.58)',
              lineHeight: 1.8,
            }}
          >
            Μοιράσου μαζί μας το ύφος, τις ανάγκες και τις λεπτομέρειες που θέλεις.
            Δημιουργούμε ένα εξατομικευμένο σχέδιο και το μετατρέπουμε σε limited handmade κομμάτι.
          </p>
        </div>

        <div className="reveal delay-200 grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mb-10">
          {gridImages.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/handstuff__"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden image-zoom"
              style={{ aspectRatio: '1/1', display: 'block' }}
            >
              <img
                src={src}
                alt={`Custom bag ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ background: 'rgba(8,8,8,0.65)' }}
              >
                <Instagram size={24} style={{ color: 'var(--color-gold)' }} />
              </div>
            </a>
          ))}
        </div>

        <div className="reveal delay-300 text-center">
          <a
            href="https://instagram.com/handstuff__"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Instagram size={14} />
            <span>Στείλε έμπνευση στο Instagram</span>
          </a>
        </div>
      </div>
      <div className="gold-line mt-16 md:mt-24" />
    </section>
  );
}
