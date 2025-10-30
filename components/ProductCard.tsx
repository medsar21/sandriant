'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  id: string
  slug: string
  title: string
  price: number
  image: string
  short: string
}

export default function ProductCard({ id, slug, title, price, image, short }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({ id, slug, title, price, image })
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-300"
    >
      {/* Like Button */}
      <button
        onClick={handleLike}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
        aria-label={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      >
        <Heart
          size={20}
          className={`${
            isLiked ? 'fill-brand-red text-brand-red' : 'text-white'
          } transition-colors`}
        />
      </button>

      {/* Image */}
      <Link href={`/produit/${slug}`}>
        <div className="relative h-64 bg-gradient-to-br from-brand-black to-gray-900 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-colors duration-300"></div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/produit/${slug}`}>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{short}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-brand-red">
            {price.toFixed(2)} DH
          </span>

          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Ajouter au panier"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Ajouter</span>
          </button>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-4 left-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm text-center shadow-lg"
        >
          ✓ Ajouté au panier !
        </motion.div>
      )}
    </motion.div>
  )
}

