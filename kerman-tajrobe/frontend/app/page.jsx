import ContactCard from '../components/ContactCard';

const fallbackContacts = [
  { id: 'telegram', title: 'تلگرام', description: '@Kerman_tajrobeh', href: 'https://t.me/Kerman_tajrobeh', icon: 'telegram', external: true, ariaLabel: 'ارتباط با کرمان تجربه در تلگرام' },
  { id: 'whatsapp', title: 'واتساپ', description: 'گفت‌وگوی مستقیم', href: 'https://wa.me/989013702037', icon: 'whatsapp', external: true, ariaLabel: 'گفت‌وگوی مستقیم با کرمان تجربه در واتساپ' },
  { id: 'phone', title: 'تماس تلفنی', description: '۰۹۰۱۳۷۰۲۰۳۷', href: 'tel:+989013702037', icon: 'phone', external: false, ariaLabel: 'تماس تلفنی با کرمان تجربه' },
  { id: 'rubika', title: 'روبیکا', description: '@kerman_tajrobeeh', href: 'https://rubika.ir/kerman_tajrobeeh', icon: 'rubika', external: true, ariaLabel: 'ارتباط با کرمان تجربه در روبیکا' },
  { id: 'bale', title: 'بله', description: '@kerman_tajrobe', href: 'https://ble.ir/kerman_tajrobe', icon: 'bale', external: true, ariaLabel: 'ارتباط با کرمان تجربه در بله' }
];

async function getContacts() {
  const apiUrl = process.env.API_URL || 'http://localhost:4000/api/contacts';

  try {
    const response = await fetch(apiUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    const result = await response.json();
    if (!result.success || !Array.isArray(result.data)) throw new Error('Invalid API response');
    return result.data;
  } catch (error) {
    console.error('Could not load contacts from Express API; using fallback data.', error.message);
    return fallbackContacts;
  }
}

export default async function HomePage() {
  const contacts = await getContacts();

  return (
    <>
      <div className="background-effects" aria-hidden="true">
        <div className="bg-shape shape-1" />
        <div className="bg-shape shape-2" />
      </div>

      <main className="container">
        <header className="brand-header">
          <div className="logo-placeholder" aria-hidden="true"><span>KT</span></div>
          <h1>کرمان تجربه</h1>
          <p>از طریق راه‌های زیر با ما در ارتباط باشید</p>
        </header>

        <nav className="links-grid" aria-label="راه‌های ارتباطی">
          {contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)}
        </nav>

        <footer className="footer">
          <p>© Kerman tajrobe 2026</p>
        </footer>
      </main>
    </>
  );
}
