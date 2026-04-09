import { useState } from 'react';
import { useReveal } from '../hooks/useInView';
import { hasSupabaseConfig, submitContact } from '../lib/supabase';
import { MapPin, Instagram, Facebook, ArrowRight, CheckCircle } from 'lucide-react';

const serviceOptions = [
  { value: 'shoulder', label: 'Τσάντες ώμου' },
  { value: 'crossbody', label: 'Crossbody' },
  { value: 'backpack', label: 'Σακίδια πλάτης' },
  { value: 'custom_order', label: 'Custom παραγγελία' },
];

export default function Contact() {
  useReveal();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: 'shoulder',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Παρακαλώ συμπλήρωσε όλα τα υποχρεωτικά πεδία.');
      return;
    }
    if (!hasSupabaseConfig) {
      setError('Η φόρμα είναι προσωρινά μη διαθέσιμη. Ρύθμισε πρώτα τα στοιχεία σύνδεσης.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await submitContact(form);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', service_type: 'shoulder', message: '' });
    } catch {
      setError('Κάτι πήγε στραβά. Δοκίμασε ξανά.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-sans)',
    fontSize: '14px',
    fontWeight: 300,
    padding: '14px 18px',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'rgba(240,236,228,0.45)',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <section id="contact" className="py-24 md:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="gold-line" />
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="reveal mb-4">
              <span className="section-tag">Επικοινωνία</span>
            </div>
            <h2
              className="reveal delay-100 mb-8"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--color-text)',
              }}
            >
              Ας φτιάξουμε
              <br />
              <em style={{ fontStyle: 'italic' }} className="gold-gradient">την επόμενη τσάντα σου</em>
              <br />
              μαζί
            </h2>
            <div className="gold-line-left w-16 reveal delay-200 mb-8" />
            <p
              className="reveal delay-300 mb-10"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 300,
                color: 'rgba(240,236,228,0.6)',
                lineHeight: 1.8,
                maxWidth: '380px',
              }}
            >
              Συμπλήρωσε τη φόρμα με τις λεπτομέρειες που σε εκφράζουν και
              θα επιστρέψουμε με πρόταση σχεδιασμένη αποκλειστικά για εσένα.
            </p>

            <div className="reveal delay-400 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={16} style={{ color: 'var(--color-gold)' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(240,236,228,0.4)',
                      marginBottom: '3px',
                    }}
                  >
                    Τοποθεσία
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      color: 'var(--color-text)',
                    }}
                  >
                    Τρίκαλα, Ελλάδα
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/handstuff__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className="group-hover:border-[var(--color-gold)] transition-colors duration-300"
                  >
                    <Instagram size={16} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'rgba(240,236,228,0.6)',
                    }}
                    className="group-hover:text-[var(--color-gold)] transition-colors duration-300"
                  >
                    @handstuff__
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/drshoe.trikala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className="group-hover:border-[var(--color-gold)] transition-colors duration-300"
                  >
                    <Facebook size={16} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'rgba(240,236,228,0.6)',
                    }}
                    className="group-hover:text-[var(--color-gold)] transition-colors duration-300"
                  >
                    Handstuff
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="reveal delay-200">
            {success ? (
              <div
                className="flex flex-col items-center justify-center text-center h-full gap-6 py-16"
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  padding: '48px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    border: '1px solid var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircle size={28} style={{ color: 'var(--color-gold)' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '36px',
                      fontWeight: 300,
                      color: 'var(--color-text)',
                      marginBottom: '12px',
                    }}
                  >
                    Το μήνυμά σου εστάλη!
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'rgba(240,236,228,0.6)',
                      lineHeight: 1.75,
                    }}
                  >
                    Θα επικοινωνήσουμε μαζί σου το συντομότερο δυνατό.
                    Σε ευχαριστούμε για την εμπιστοσύνη σου.
                  </p>
                </div>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-secondary"
                >
                  <span>Νέο μήνυμα</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  padding: '40px',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={labelStyle}>Όνομα *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Το όνομά σου"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={labelStyle}>Τηλέφωνο</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+30 69..."
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Τύπος υπηρεσίας</label>
                    <select
                      name="service_type"
                      value={form.service_type}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: 'none' }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    >
                      {serviceOptions.map((o) => (
                        <option key={o.value} value={o.value} style={{ background: 'var(--color-surface)' }}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label style={labelStyle}>Μήνυμα *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Περίγραψέ μας την ιδέα σου — χρώματα, στυλ, εμπνεύσεις..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                {error && (
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      color: '#e57373',
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  <span>{loading ? 'Αποστολή...' : 'Στείλε το αίτημά σου'}</span>
                  {!loading && <ArrowRight size={14} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="gold-line mt-16 md:mt-24" />
    </section>
  );
}
