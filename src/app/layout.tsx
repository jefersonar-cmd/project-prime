import "./globals.css";

export const metadata = {
  title: "Tarsus Prime | Inteligência que conecta",
  description: "Arquitetura, integrações e aplicações corporativas com excelência e legado.",
  openGraph: {
    title: "Tarsus Prime | Inteligência que conecta",
    description: "Arquitetura, integrações e aplicações corporativas com excelência e legado.",
    url: "https://tarsusprime.com.br",
    siteName: "Tarsus Prime",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tarsus Prime" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarsus Prime | Inteligência que conecta",
    description: "Arquitetura, integrações e aplicações corporativas com excelência e legado.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-prime-ink text-neutral-100 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
