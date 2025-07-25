import './globals.css';
import '../public/assets/css/plugins.css';
import '../public/assets/css/style.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Removed manual <link rel="stylesheet" ... /> tags */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
