import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Yasiru Premarathna | Portfolio",
  description:
    "Portfolio of Yasiru Premarathna, a BSc (Hons) Information Technology undergraduate at the University of Moratuwa, Sri Lanka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
      overflow-x-hidden bg-navy-950 text-navy-50`}
      >
        {children}
      </body>
    </html>
  );
}
