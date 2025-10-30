'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Heart, ShoppingCart, Check, Star } from 'lucide-react'
import ProductGallery from '@/components/ProductGallery'
import { useCart } from '@/context/CartContext'
import products from '@/data/products.json'
import { motion } from 'framer-motion'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [isLiked, setIsLiked] = useState(false)
  const [showAddedToast, setShowAddedToast] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Produit non trouvé</h1>
          <a href="/catalogue" className="text-brand-red hover:underline">
            Retour au catalogue
          </a>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.images[0],
    })
    setShowAddedToast(true)
    setTimeout(() => setShowAddedToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-brand-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Product Gallery */}
          <div>
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {product.title}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-white/70">(127 avis)</span>
              </div>
              <p className="text-3xl font-bold text-brand-red mb-6">
                {product.price.toFixed(2)} DH
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
              <p className="text-white/70 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl font-semibold text-white mb-3">Caractéristiques</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-white/70">
                    <Check size={20} className="text-brand-red mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center space-x-2 mb-4">
                {product.inStock ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 font-medium">En stock</span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-500 font-medium">Rupture de stock</span>
                  </>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center space-x-2 bg-brand-red hover:bg-red-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg"
                >
                  <ShoppingCart size={20} />
                  <span>{product.inStock ? 'Ajouter au panier' : 'Indisponible'}</span>
                </button>

                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-4 border-2 border-white/20 hover:border-brand-red rounded-xl transition-colors"
                  aria-label="Ajouter aux favoris"
                >
                  <Heart
                    size={24}
                    className={isLiked ? 'fill-brand-red text-brand-red' : 'text-white'}
                  />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <p className="text-xs text-white/70">Livraison rapide</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✓</div>
                <p className="text-xs text-white/70">Qualité garantie</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🔒</div>
                <p className="text-xs text-white/70">Paiement sécurisé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {showAddedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 z-50"
          >
            <Check size={24} />
            <div>
              <p className="font-semibold">Ajouté au panier !</p>
              <p className="text-sm opacity-90">Produit ajouté avec succès</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

