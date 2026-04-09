import { useReveal } from '../hooks/useInView';
import { MessageCircle, Lightbulb, PenTool, Hammer, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Σχεδιασμός',
    desc: 'Μελετάμε τη φόρμα, τις αναλογίες και τη χρήση, ώστε κάθε τσάντα να έχει ισχυρή αισθητική ταυτότητα.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Επιλογή υλικών',
    desc: 'Επιλέγουμε αυθεντικό δέρμα, υψηλής ποιότητας μεταλλικά στοιχεία και νήματα αντοχής.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Χειροποίητη κατασκευή',
    desc: 'Κοπή, συναρμολόγηση και ραφή ολοκληρώνονται στο χέρι, με έλεγχο σε κάθε στάδιο.',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Λεπτομέρειες',
    desc: 'Ακμές, κλεισίματα και τελειώματα ρυθμίζονται με απόλυτη ακρίβεια για premium αποτέλεσμα.',
  },
  {
    number: '05',
    icon: Package,
    title: 'Τελικό προϊόν',
    desc: 'Η τσάντα παραδίδεται έτοιμη να φορεθεί, ως ένα διαχρονικό κομμάτι με προσωπικότητα.',
  },
];

export default function Process() {
  useReveal();

  return (
    <section id="process" className="py-24 md:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="gold-line" />
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-16 md:pt-24">
        <div className="text-center mb-16 md:mb-20">
          <div className="reveal mb-4">
            <span className="section-tag">Πώς κατασκευάζεται</span>
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
            Η διαδικασία μας
            <br />
            <em style={{ fontStyle: 'italic' }} className="gold-gradient">βήμα προς βήμα</em>
          </h2>
          <p
            className="reveal delay-200 mt-6 mx-auto"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: 'rgba(240,236,228,0.55)',
              maxWidth: '460px',
              lineHeight: 1.75,
            }}
          >
            Πέντε στάδια, ένα αποτέλεσμα: χειροποίητες τσάντες με ουσία, αντοχή και χαρακτήρα.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 hidden sm:block"
            style={{
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, var(--color-gold), var(--color-gold), transparent)',
              transform: 'translateX(-50%)',
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col gap-10 md:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`reveal delay-${Math.min((i + 1) * 100, 500)} relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ marginBottom: i < steps.length - 1 ? '0px' : '0', paddingBottom: '48px' }}
                >
                  <div
                    className={`flex-1 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                    style={{ display: 'flex', justifyContent: isEven ? 'flex-end' : 'flex-start' }}
                  >
                    <div
                      className="md:max-w-xs"
                      style={{
                        background: 'var(--color-surface-2)',
                        border: '1px solid var(--color-border)',
                        padding: '24px',
                      }}
                    >
                      <div
                        className="flex items-center gap-3 mb-3"
                        style={{ flexDirection: isEven ? 'row-reverse' : 'row' }}
                      >
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            border: '1px solid rgba(201,168,76,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={16} style={{ color: 'var(--color-gold)' }} />
                        </div>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '11px',
                            color: 'rgba(201,168,76,0.6)',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {step.number}
                        </span>
                      </div>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '26px',
                          fontWeight: 400,
                          color: 'var(--color-text)',
                          textAlign: isEven ? 'right' : 'left',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '13px',
                          fontWeight: 300,
                          color: 'rgba(240,236,228,0.55)',
                          lineHeight: 1.75,
                          textAlign: isEven ? 'right' : 'left',
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className="absolute left-0 md:left-1/2 top-0 flex-shrink-0"
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'translate(-50%, 0)',
                      zIndex: 10,
                      marginLeft: '28px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'var(--color-gold)',
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="gold-line mt-16" />
    </section>
  );
}
