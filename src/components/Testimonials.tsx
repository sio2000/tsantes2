import { useReveal } from '../hooks/useInView';
import { ShieldCheck, Scissors, Gem } from 'lucide-react';

const materialCards = [
  {
    icon: Gem,
    title: 'Γνήσιο δέρμα',
    text: 'Επιλέγουμε φυσικό δέρμα με πλούσια υφή και χαρακτήρα που ωριμάζει όμορφα στον χρόνο.',
  },
  {
    icon: Scissors,
    title: 'Χειροποίητη διαδικασία',
    text: 'Κάθε κοπή, ραφή και τελείωμα γίνεται στο χέρι, με έλεγχο λεπτομέρειας σε κάθε στάδιο.',
  },
  {
    icon: ShieldCheck,
    title: 'Αντοχή',
    text: 'Σχεδιάζουμε τις τσάντες ώστε να αντέχουν καθημερινή χρήση χωρίς να χάνουν την premium αισθητική τους.',
  },
];

export default function Testimonials() {
  useReveal();

  return (
    <section id="materials" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="reveal mb-4">
            <span className="section-tag">Υλικά</span>
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
            Υλικά που
            <br />
            <em style={{ fontStyle: 'italic' }} className="gold-gradient">μιλούν από μόνα τους</em>
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
            Χτίζουμε κάθε τσάντα πάνω σε τρεις αρχές:
            premium πρώτη ύλη, καθαρή χειροποίητη εκτέλεση, διαχρονική αντοχή.
          </p>
        </div>

        <div className="reveal delay-200 grid grid-cols-1 gap-4">
          {materialCards.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`card-hover reveal delay-${Math.min((i + 1) * 100, 400)}`}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  padding: '28px',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      border: '1px solid rgba(201,168,76,0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={16} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '28px',
                      fontWeight: 400,
                      color: 'var(--color-text)',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: 'rgba(240,236,228,0.6)',
                    lineHeight: 1.75,
                  }}
                >
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
