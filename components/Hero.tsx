'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-brand-red rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-brand-red/20 text-brand-red rounded-full text-sm font-semibold mb-6 border border-brand-red/30"
            >
              Collection 2024
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Style</span>{' '}
              <span className="bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent">
                Unique
              </span>
              <br />
              <span className="text-white/90">Design Squelette</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 mb-8 max-w-xl"
            >
              Découvrez le Sandriant, porte-cigarette en silicone premium avec un design tête de squelette audacieux. 
              Qualité supérieure, style incomparable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="/catalogue"
                className="group inline-flex items-center justify-center space-x-2 bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-brand-red/50 hover:shadow-brand-red/70 hover:scale-105"
              >
                <span>Voir la collection</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border-2 border-white/20 text-white hover:border-brand-red hover:text-brand-red transition-all"
              >
                En savoir plus
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
            >
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-brand-red mb-1">100%</div>
                <div className="text-sm text-white/60">Silicone Premium</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-brand-red mb-1">24/7</div>
                <div className="text-sm text-white/60">Service Client</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-brand-red mb-1">⭐⭐⭐⭐⭐</div>
                <div className="text-sm text-white/60">5 Étoiles</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <motion.div
                className="relative h-96 md:h-[600px] animate-rotate-3d"
              >
                <Image
                  src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=1200&fit=crop&auto=format"
                  alt="Sandriant - Porte-cigarette design tête de squelette"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-brand-red/30 to-transparent blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-red rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

