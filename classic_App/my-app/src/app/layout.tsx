
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Header</h1>
        </header>
        {children}
        <footer>
          <p>Footer content</p>
        </footer>
      </body>
    </html>
  );
}
