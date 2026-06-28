import "./globals.css";

export const metadata = {
  title: "INNOWEB | Software a la medida",
  description:
    "Desarrollo de paginas web, sistemas internos, e-commerce y soporte tecnico para PYMES."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
