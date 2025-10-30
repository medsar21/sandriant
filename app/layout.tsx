import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Sandriant - Porte-cigarette Design Tête de Squelette',
  description: 'Découvrez nos porte-cigarettes en silicone avec design tête de squelette. Unique, durable et stylé. Disponible en rouge, noir et blanc.',
  keywords: ['sandriant', 'porte-cigarette', 'silicone', 'design', 'tête de squelette', 'accessoire fumeur'],
  authors: [{ name: 'Sandriant Shop' }],
  openGraph: {
    title: 'Sandriant - Porte-cigarette Design Tête de Squelette',
    description: 'Porte-cigarettes en silicone premium avec design unique',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}

