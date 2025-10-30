'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { ArrowRight, Truck, Shield, Headphones } from 'lucide-react'
import products from '@/data/products.json'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Prevent scrolling while loader is visible
    if (showLoader) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showLoader])

  const featuredProducts = products.slice(0, 3)

  return (
    <>
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
      
      <div className={showLoader ? 'hidden' : ''}>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-brand-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-brand-red/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/20 rounded-full mb-4">
                  <Truck className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Livraison Rapide</h3>
                <p className="text-white/70">Expédition sous 24h partout au Maroc</p>
              </div>

              <div className="text-center p-8 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-brand-red/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/20 rounded-full mb-4">
                  <Shield className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Qualité Garantie</h3>
                <p className="text-white/70">Silicone premium, durable et sécuritaire</p>
              </div>

              <div className="text-center p-8 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-brand-red/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/20 rounded-full mb-4">
                  <Headphones className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Support 24/7</h3>
                <p className="text-white/70">Service client disponible tous les jours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Notre <span className="text-brand-red">Collection</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Découvrez nos porte-cigarettes en silicone avec design tête de squelette. 
                Disponibles en plusieurs coloris pour s'adapter à votre style.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  short={product.short}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/catalogue"
                className="inline-flex items-center space-x-2 bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-brand-red/50 hover:shadow-brand-red/70 group"
              >
                <span>Voir tous les produits</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-red to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à commander ?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et obtenez votre Sandriant dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center bg-white text-brand-red px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Commander maintenant
              </Link>
              <a
                href="https://wa.me/212656290522?text=Bonjour, je veux commander le Sandriant !"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-red transition-all"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

