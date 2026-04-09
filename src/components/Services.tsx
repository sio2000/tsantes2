import { useReveal } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Τσάντες ώμου',
    subtitle: 'Συλλογή ώμου',
    description:
      'Δομημένες σιλουέτες με ήρεμη πολυτέλεια, ιδανικές για καθημερινή χρήση με premium αισθητική.',
    image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=800&q=80',
    tags: ['Δέρμα υψηλής ποιότητας', 'Χειροποίητη ραφή', 'Περιορισμένα κομμάτια'],
  },
  {
    number: '02',
    title: 'Crossbody',
    subtitle: 'Αστική συλλογή',
    description:
      'Λιτές γραμμές, καθαρά τελειώματα και ισορροπία ανάμεσα σε λειτουργικότητα και κομψότητα.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80',
    tags: ['Ελαφριά αίσθηση', 'Ποιοτικά μεταλλικά στοιχεία', 'Artisan φινίρισμα'],
  },
  {
    number: '03',
    title: 'Σακίδια πλάτης',
    subtitle: 'Atelier πλάτης',
    description:
      'Δερμάτινα σακίδια με έμφαση στην αντοχή και τη διαχρονική αισθητική, για κίνηση χωρίς συμβιβασμούς.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    tags: ['Ενισχυμένη κατασκευή', 'Ανθεκτικότητα', 'Κομψή λειτουργικότητα'],
  },
];

export default function Services() {
  useReveal();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="collections" className="py-24 md:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="gold-line" />
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="pt-16 md:pt-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="reveal mb-4">
                <span className="section-tag">Συλλογές</span>
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
                Οι συλλογές μας
                <br />
                <em style={{ fontStyle: 'italic' }} className="gold-gradient">μόνο σε τσάντες</em>
              </h2>
            </div>
            <p
              className="reveal delay-200 md:max-w-xs"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'rgba(240,236,228,0.5)',
                lineHeight: 1.8,
              }}
            >
              Σχεδιάζουμε αποκλειστικά χειροποίητες τσάντες.
              Καμία μαζική παραγωγή, μόνο συλλογές με περιορισμένα κομμάτια.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div
                key={service.number}
                className={`reveal delay-${(i + 1) * 100} card-hover group`}
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                }}
              >
                <div className="image-zoom overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 50%)' }}
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '11px',
                        color: 'var(--color-gold)',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {service.number}
                    </span>
                    <div className="gold-line-left flex-1 mx-4" />
                  </div>

                  <div
                    className="mb-1"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {service.subtitle}
                  </div>

                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '28px',
                      fontWeight: 400,
                      color: 'var(--color-text)',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mb-6"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      fontWeight: 300,
                      color: 'rgba(240,236,228,0.6)',
                      lineHeight: 1.75,
                    }}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '9px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--color-gold)',
                          border: '1px solid rgba(201,168,76,0.3)',
                          padding: '4px 10px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="group/btn flex items-center gap-2"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      background: 'none',
                      border: 'none',
                    }}
                  >
                    <span>Ενδιαφέρομαι</span>
                    <ArrowRight
                      size={13}
                      className="transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gold-line mt-16 md:mt-24" />
    </section>
  );
}
