const iconClasses = {
  telegram: 'fa-brands fa-telegram',
  whatsapp: 'fa-brands fa-whatsapp',
  phone: 'fa-solid fa-phone-volume',
  rubika: 'fa-solid fa-mobile-screen-button',
  bale: 'fa-solid fa-comment-dots'
};

export default function ContactCard({ contact }) {
  const isLtr = ['telegram', 'phone', 'rubika', 'bale'].includes(contact.id);

  return (
    <a
      href={contact.href}
      className={`link-card ${contact.id}`}
      target={contact.external ? '_blank' : undefined}
      rel={contact.external ? 'noopener noreferrer' : undefined}
      aria-label={contact.ariaLabel}
    >
      <i className={`${iconClasses[contact.icon] || 'fa-solid fa-link'} icon`} aria-hidden="true" />
      <span className="text-content">
        <span className="label">{contact.title}</span>
        <span className="desc" dir={isLtr ? 'ltr' : undefined}>{contact.description}</span>
      </span>
      {contact.external && <i className="fa-solid fa-arrow-up-left-from-square external-indicator" aria-hidden="true" />}
    </a>
  );
}
