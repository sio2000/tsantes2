const words = [
  'Χειροποίητες Τσάντες',
  '✦',
  'Γνήσιο Δέρμα',
  '✦',
  'Limited Pieces',
  '✦',
  'Τσάντες Ώμου',
  '✦',
  'Crossbody',
  '✦',
  'Σακίδια Πλάτης',
  '✦',
  'Χειροποίητη Κατασκευή',
  '✦',
];

export default function Marquee() {
  const doubled = [...words, ...words];

  return (
    <div
      className="marquee-wrapper py-5 overflow-hidden"
      style={{
        background: 'var(--color-gold)',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        borderBottom: '1px solid rgba(201,168,76,0.3)',
      }}
    >
      <div className="marquee-inner">
        {doubled.map((word, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#080808',
              padding: '0 20px',
              whiteSpace: 'nowrap',
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
