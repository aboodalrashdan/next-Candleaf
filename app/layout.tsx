import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "project shopping",
  description: "A Next.js project shopping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />
          <main className="page">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
