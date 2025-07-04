import Script from 'next/script';

import './globals.css';

export const metadata = {
  title: 'Nelson C. - Porfolio',
  description: 'Welcome to my Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (
    <html lang="es">
      <body>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
