import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "GrowLium Digital - Power Your Sales Pipeline",
  description:
    "We provide the infrastructure to move prospects from initial contact to successful business outcomes globally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
