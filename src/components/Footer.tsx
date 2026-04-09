import { Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                }}
              >
                HANDSTUFF
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}
              >
                / HANDMADE BAGS
              </div>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 300,
                color: 'rgba(240,236,228,0.4)',
                lineHeight: 1.8,
                maxWidth: '260px',
              }}
            >
              Χειροποίητες δερμάτινες τσάντες σε περιορισμένα κομμάτια.
              Ταυτότητα υψηλής χειροποίητης τέχνης από τα Τρίκαλα.
            </p>
          </div>

          <div>
            <div
              className="mb-5"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(240,236,228,0.3)',
              }}
            >
              Πλοήγηση
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Συλλογές', href: '#collections' },
                { label: 'Υλικά', href: '#materials' },
                { label: 'Η ιστορία μας', href: '#story' },
                { label: 'Διαδικασία', href: '#process' },
                { label: 'Εξατομικευμένη παραγγελία', href: '#custom-order' },
                { label: 'Επικοινωνία', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'rgba(240,236,228,0.5)',
                      letterSpacing: '0.05em',
                      transition: 'color 0.3s',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,236,228,0.5)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="mb-5"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(240,236,228,0.3)',
              }}
            >
              Βρες μας
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/handstuff__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                style={{ textDecoration: 'none' }}
              >
                <Instagram size={16} style={{ color: 'var(--color-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: 'rgba(240,236,228,0.5)',
                    transition: 'color 0.3s',
                  }}
                  className="group-hover:text-[var(--color-gold)]"
                >
                  Instagram
                </span>
              </a>
              <a
                href="https://www.facebook.com/drshoe.trikala/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                style={{ textDecoration: 'none' }}
              >
                <Facebook size={16} style={{ color: 'var(--color-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: 'rgba(240,236,228,0.5)',
                    transition: 'color 0.3s',
                  }}
                  className="group-hover:text-[var(--color-gold)]"
                >
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              color: 'rgba(240,236,228,0.25)',
              letterSpacing: '0.05em',
            }}
          >
            © {new Date().getFullYear()} HANDSTUFF Χειροποίητες Τσάντες. Όλα τα δικαιώματα διατηρούνται.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
            style={{
              background: 'none',
              border: '1px solid var(--color-border)',
              color: 'rgba(240,236,228,0.4)',
              padding: '8px 16px',
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
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
            <span>Πίσω στην αρχή</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
