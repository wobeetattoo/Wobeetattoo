export const metadata = {
  title: "Wobee Tattoo Gallery — Real recognize real",
  description: "Co‑created statement tattoos. Nothing copied. Nothing watered down.",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
