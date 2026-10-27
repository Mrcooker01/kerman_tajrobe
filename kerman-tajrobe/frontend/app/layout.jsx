import './globals.css';

export const metadata = {
  title: 'کرمان تجربه | راه‌های ارتباطی',
  description: 'راه‌های ارتباط با کرمان تجربه از طریق تلگرام، واتساپ، روبیکا، بله و تماس تلفنی.',
  applicationName: 'کرمان تجربه',
  themeColor: '#070B18',
  openGraph: {
    title: 'کرمان تجربه | راه‌های ارتباطی',
    description: 'از طریق راه‌های زیر با کرمان تجربه در ارتباط باشید.',
    locale: 'fa_IR',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
