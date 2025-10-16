import "../../styles/globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "HQ Kitchen",
  description: "Home cooking business based in San Diego, CA.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container nav">
            <Link href="/" className="brand">HQ Kitchen</Link>
            <nav className="navLinks">
              <Link href="/">Home</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container">© {new Date().getFullYear()} HQ Kitchen LLC</div>
        </footer>
      </body>
    </html>
  );
}
