'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Contact form data:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen bg-brand-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contactez-<span className="text-brand-red">nous</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Une question ? Une suggestion ? Notre équipe est là pour vous aider. 
            N&apos;hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Téléphone</h3>
                  <a
                    href="tel:+212656290522"
                    className="text-white/70 hover:text-brand-red transition-colors"
                  >
                    +212 656 290 522
                  </a>
                  <p className="text-white/50 text-sm mt-1">Lun-Dim: 9h-22h</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:contact@sandriant.com"
                    className="text-white/70 hover:text-brand-red transition-colors"
                  >
                    contact@sandriant.com
                  </a>
                  <p className="text-white/50 text-sm mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Adresse</h3>
                  <p className="text-white/70">Casablanca, Maroc</p>
                  <p className="text-white/50 text-sm mt-1">
                    Livraison dans tout le Maroc
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">
                Besoin d&apos;une réponse rapide ?
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Contactez-nous directement sur WhatsApp pour une assistance immédiate !
              </p>
              <a
                href="https://wa.me/212656290522?text=Bonjour, j&apos;ai une question sur Sandriant"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Ouvrir WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Nom complet <span className="text-brand-red">*</span>
                  </label>
                  <input
                    {...register('name')}
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Email <span className="text-brand-red">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Sujet <span className="text-brand-red">*</span>
                  </label>
                  <input
                    {...register('subject')}
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="L'objet de votre message"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors resize-none"
                    placeholder="Écrivez votre message ici..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-red-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Message */}
              {isSuccess && (
                <div className="mt-6 bg-green-500/20 border border-green-500 text-green-500 px-6 py-4 rounded-xl flex items-center space-x-3">
                  <Check size={24} />
                  <div>
                    <p className="font-semibold">Message envoyé avec succès !</p>
                    <p className="text-sm opacity-90">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

