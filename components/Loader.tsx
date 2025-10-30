'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  durationMs?: number
  onComplete?: () => void
}

export default function Loader({ durationMs = 1800, onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, durationMs)

    return () => clearTimeout(timer)
  }, [durationMs, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-brand-black via-gray-900 to-brand-black"
        >
          <motion.div
            animate={{
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Logo SVG - Tête de squelette stylisée */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse-glow"
            >
              {/* Crâne */}
              <ellipse cx="50" cy="45" rx="28" ry="32" fill="#e11d48" opacity="0.9"/>
              <ellipse cx="50" cy="45" rx="24" ry="28" fill="#0f172a"/>
              
              {/* Yeux */}
              <ellipse cx="40" cy="40" rx="6" ry="8" fill="#e11d48"/>
              <ellipse cx="60" cy="40" rx="6" ry="8" fill="#e11d48"/>
              
              {/* Nez */}
              <path d="M 45 52 L 50 58 L 55 52 Z" fill="#e11d48"/>
              
              {/* Dents */}
              <rect x="35" y="62" width="6" height="8" rx="1" fill="white"/>
              <rect x="43" y="62" width="6" height="8" rx="1" fill="white"/>
              <rect x="51" y="62" width="6" height="8" rx="1" fill="white"/>
              <rect x="59" y="62" width="6" height="8" rx="1" fill="white"/>
            </svg>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <p className="text-brand-red font-bold text-xl tracking-wider">SANDRIANT</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

