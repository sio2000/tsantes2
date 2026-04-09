import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Συλλογή', href: '#portfolio' },
  { label: 'Υπηρεσίες', href: '#services' },
  { label: 'Διαδικασία', href: '#process' },
  { label: 'Επικοινωνία', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8,8,8,0.96)'
            : 'transparent',
          borderBottom: scrolled
            ? '1px solid rgba(40,40,40,0.8)'
            : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            <a
              href="#"
              className="group"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="flex flex-col">
                <span
                  className="text-[15px] font-medium tracking-[0.25em] uppercase"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', letterSpacing: '0.25em' }}
                >
                  HANDSTUFF
                </span>
                <span
                  className="text-[9px] tracking-[0.4em] uppercase"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-gold)', letterSpacing: '0.4em' }}
                >
                  / DRSHOE
                </span>
              </div>
            </a>

            <ul className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="relative group"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(240,236,228,0.7)',
                      background: 'none',
                      border: 'none',
                      padding: '4px 0',
                      transition: 'color 0.3s',
                    }}
                  >
                    <span className="group-hover:text-[var(--color-text)] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span
                      className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: 'var(--color-gold)' }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <button
                onClick={() => handleLink('#contact')}
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '10px' }}
              >
                <span>Ζήτα Custom</span>
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: 'var(--color-text)', background: 'none', border: 'none' }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex items-center justify-between h-[72px] px-6">
            <div className="flex flex-col">
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                HANDSTUFF
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                / DRSHOE
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--color-text)', background: 'none', border: 'none' }}
            >
              <X size={22} />
            </button>
          </div>
          <div className="gold-line" />
          <ul className="flex flex-col justify-center flex-1 px-8 gap-8">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ animationDelay: `${i * 0.08}s` }}>
                <button
                  onClick={() => handleLink(link.href)}
                  className="text-left w-full group"
                  style={{ background: 'none', border: 'none' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '42px',
                      fontWeight: 300,
                      color: 'var(--color-text)',
                    }}
                    className="group-hover:text-[var(--color-gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="px-8 pb-12">
            <button
              onClick={() => handleLink('#contact')}
              className="btn-primary w-full justify-center"
            >
              <span>Ζήτα το δικό σου Custom</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
