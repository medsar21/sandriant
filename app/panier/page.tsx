'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CartPage() {
  const { items, removeItem, updateQty, getTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-800 rounded-full mb-6">
            <ShoppingBag size={48} className="text-white/30" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Votre panier est vide</h1>
          <p className="text-white/70 mb-8">
            Découvrez notre collection et ajoutez des produits à votre panier
          </p>
          <Link
            href="/catalogue"
            className="inline-flex items-center space-x-2 bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            <span>Voir le catalogue</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Votre <span className="text-brand-red">Panier</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 border border-white/10"
              >
                {/* Image */}
                <div className="relative w-full sm:w-32 h-32 bg-brand-black rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                    sizes="128px"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      href={`/produit/${item.slug}`}
                      className="text-xl font-bold text-white hover:text-brand-red transition-colors line-clamp-2 mb-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-brand-red font-bold text-lg">
                      {item.price.toFixed(2)} DH
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-3 bg-brand-black rounded-lg p-1">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus size={18} className="text-white" />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus size={18} className="text-white" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      aria-label="Supprimer du panier"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="text-right">
                  <p className="text-white/50 text-sm mb-1">Sous-total</p>
                  <p className="text-2xl font-bold text-white">
                    {(item.price * item.quantity).toFixed(2)} DH
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Récapitulatif</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between text-white/70">
                  <span>Sous-total</span>
                  <span>{getTotal().toFixed(2)} DH</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Livraison</span>
                  <span className="text-green-500">Gratuite</span>
                </div>
              </div>

              <div className="flex justify-between text-white text-xl font-bold mb-6">
                <span>Total</span>
                <span className="text-brand-red">{getTotal().toFixed(2)} DH</span>
              </div>

              <Link
                href="/commander"
                className="block w-full text-center bg-brand-red hover:bg-red-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg mb-3"
              >
                Passer la commande
              </Link>

              <Link
                href="/catalogue"
                className="block w-full text-center border-2 border-white/20 hover:border-brand-red text-white px-6 py-3 rounded-xl font-medium transition-all"
              >
                Continuer mes achats
              </Link>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
                <div className="text-center text-sm text-white/70">
                  <div className="text-xl mb-1">🔒</div>
                  <div>Paiement sécurisé</div>
                </div>
                <div className="text-center text-sm text-white/70">
                  <div className="text-xl mb-1">🚚</div>
                  <div>Livraison rapide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

