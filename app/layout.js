import "../styles/globals.css";

import { Navigation } from "./components/Navigation";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Mi Calculadora</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
