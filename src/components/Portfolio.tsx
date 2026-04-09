import { useState } from 'react';
import { useReveal } from '../hooks/useInView';
import { X, ZoomIn } from 'lucide-react';

const categories = ['Όλα', 'Τσάντες ώμου', 'Crossbody', 'Σακίδια πλάτης'];

const items = [
  {
    id: 1,
    category: 'Τσάντες ώμου',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80',
    title: 'Noir Shoulder 01',
    desc: 'Δομημένη τσάντα ώμου',
    tall: true,
  },
  {
    id: 2,
    category: 'Crossbody',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    title: 'Crossbody Atelier',
    desc: 'Καθημερινή κομψότητα',
    tall: false,
  },
  {
    id: 3,
    category: 'Τσάντες ώμου',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=900&q=80',
    title: 'Limited Grain',
    desc: 'Premium texture detail',
    tall: false,
  },
  {
    id: 4,
    category: 'Σακίδια πλάτης',
    image: 'https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?auto=format&fit=crop&w=900&q=80',
    title: 'Backpack Heritage',
    desc: 'Ανθεκτική κατασκευή',
    tall: true,
  },
  {
    id: 5,
    category: 'Crossbody',
    image: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26d?auto=format&fit=crop&w=900&q=80',
    title: 'Soft Edge Cross',
    desc: 'Minimal urban line',
    tall: false,
  },
  {
    id: 6,
    category: 'Τσάντες ώμου',
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&q=80',
    title: 'Atelier Detail',
    desc: 'Ραφή και φινίρισμα',
    tall: false,
  },
  {
    id: 7,
    category: 'Σακίδια πλάτης',
    image: 'https://images.unsplash.com/photo-1591561954555-607968c989ab?auto=format&fit=crop&w=900&q=80',
    title: 'City Backpack',
    desc: 'Ισορροπία άνεσης και κύρους',
    tall: false,
  },
  {
    id: 8,
    category: 'Crossbody',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=900&q=80',
    title: 'Midnight Cross',
    desc: 'Limited edition',
    tall: true,
  },
];

export default function Portfolio() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState('Όλα');
  const [lightbox, setLightbox] = useState<(typeof items)[0] | null>(null);

  const filtered = activeCategory === 'Όλα' ? items : items.filter((i) => i.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div className="reveal mb-4">
            <span className="section-tag">Συλλογή</span>
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
            Γκαλερί
            <br />
            <em style={{ fontStyle: 'italic' }} className="gold-gradient">χειροποίητης ταυτότητας</em>
          </h2>
        </div>

        <div className="reveal delay-200 flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '8px 18px',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--color-gold)' : 'var(--color-border)',
                color: activeCategory === cat ? 'var(--color-gold)' : 'rgba(240,236,228,0.4)',
                background: activeCategory === cat ? 'rgba(201,168,76,0.06)' : 'transparent',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            className={`reveal delay-${Math.min((i % 3 + 1) * 100, 400)} break-inside-avoid group relative image-zoom overflow-hidden`}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              marginBottom: '16px',
            }}
          >
            <div
              className="overflow-hidden"
              style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.4) 60%, transparent 100%)' }}
            >
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span
                  className="block mb-1"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '9px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                  }}
                >
                  {item.category}
                </span>
                <span
                  className="block"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: 'var(--color-text)',
                  }}
                >
                  {item.title}
                </span>
                <span
                  className="block mt-1"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    color: 'rgba(240,236,228,0.6)',
                  }}
                >
                  {item.desc}
                </span>
              </div>
            </div>

            <button
              onClick={() => setLightbox(item)}
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'rgba(8,8,8,0.8)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: 'var(--color-gold)',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              data-cursor
            >
              <ZoomIn size={14} />
            </button>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(8,8,8,0.96)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6"
            onClick={() => setLightbox(null)}
            style={{
              background: 'none',
              border: '1px solid rgba(240,236,228,0.2)',
              color: 'var(--color-text)',
              padding: '10px',
              display: 'flex',
            }}
          >
            <X size={18} />
          </button>
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
            <div className="mt-4 flex items-center gap-4">
              <span className="section-tag">{lightbox.category}</span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 300,
                  color: 'var(--color-text)',
                }}
              >
                {lightbox.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
