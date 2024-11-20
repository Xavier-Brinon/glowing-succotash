// The topmost layout, by convention is called RootLayout
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1>My App from Layout</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};
