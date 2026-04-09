import { useReveal } from '../hooks/useInView';

export default function BrandStory() {
  useReveal();

  return (
    <section id="story" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="reveal mb-4">
            <span className="section-tag">Η ταυτότητά μας</span>
          </div>

          <h2
            className="reveal delay-100 mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--color-text)',
            }}
          >
            Από το εργαστήριο
            <br />
            των Τρικάλων
            <br />
            <em className="gold-gradient" style={{ fontStyle: 'italic' }}>σε κάθε διαδρομή σου</em>
          </h2>

          <div className="gold-line-left reveal delay-200 mb-8 w-16" />

          <p
            className="reveal delay-300 mb-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(240,236,228,0.7)',
              lineHeight: 1.85,
              maxWidth: '480px',
            }}
          >
            Στην καρδιά των Τρικάλων, κάθε τσάντα ξεκινά ως ιδέα πάνω στο χαρτί
            και ολοκληρώνεται στο χέρι με ακρίβεια, ρυθμό και σεβασμό στο υλικό.
          </p>

          <p
            className="reveal delay-400 mb-10"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(240,236,228,0.7)',
              lineHeight: 1.85,
              maxWidth: '480px',
            }}
          >
            Πιστεύουμε στη μοναδικότητα: περιορισμένα κομμάτια, premium δέρμα,
            καθαρές γραμμές και λεπτομέρειες που αντέχουν στον χρόνο.
          </p>

          <div className="reveal delay-500 flex flex-col sm:flex-row gap-10">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '52px',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
                className="gold-gradient"
              >
                100%
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,236,228,0.5)',
                  marginTop: '6px',
                }}
              >
                Χειροποίητο
              </div>
            </div>
            <div style={{ width: '1px', background: 'var(--color-border)' }} className="hidden sm:block" />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '52px',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
                className="gold-gradient"
              >
                5
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,236,228,0.5)',
                  marginTop: '6px',
                }}
              >
                Στάδια ελέγχου
              </div>
            </div>
            <div style={{ width: '1px', background: 'var(--color-border)' }} className="hidden sm:block" />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '52px',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
                className="gold-gradient"
              >
                1
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,236,228,0.5)',
                  marginTop: '6px',
                }}
              >
                Αντίτυπο
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 reveal from-right">
          <div className="relative">
            <div
              className="image-zoom overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80"
                alt="Χειροποίητη κατασκευή τσάντας"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 50%)' }}
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden md:block"
              style={{
                width: '180px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '13px',
                  fontStyle: 'italic',
                  color: 'var(--color-gold)',
                  lineHeight: 1.5,
                }}
              >
                "Κάθε ράμμα έχει λόγο ύπαρξης."
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 w-24 h-24 hidden md:block"
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
