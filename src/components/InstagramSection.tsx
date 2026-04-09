import { useReveal } from '../hooks/useInView';
import { Instagram } from 'lucide-react';

const gridImages = [
  'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
];

export default function InstagramSection() {
  useReveal();

  return (
    <section className="py-24 md:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="gold-line" />
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-16 md:pt-24">
        <div className="text-center mb-12">
          <div className="reveal mb-4">
            <span className="section-tag">Instagram</span>
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
            Μπες στον
            <br />
            <em style={{ fontStyle: 'italic' }} className="gold-gradient">κόσμο μας</em>
          </h2>
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
                alt={`Instagram post ${i + 1}`}
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
            <span>@handstuff__</span>
          </a>
        </div>
      </div>
      <div className="gold-line mt-16 md:mt-24" />
    </section>
  );
}
