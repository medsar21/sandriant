'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Loader2 } from 'lucide-react'

const orderSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  phone: z.string().regex(/^(\+212|0)[5-7][0-9]{8}$/, 'Numéro de téléphone marocain invalide'),
  address: z.string().min(10, 'L\'adresse doit contenir au moins 10 caractères'),
  city: z.string().min(2, 'La ville est requise'),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  notes: z.string().optional(),
})

type OrderFormData = z.infer<typeof orderSchema>

export default function CommanderPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [orderId, setOrderId] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  })

  if (items.length === 0 && !orderSuccess) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Votre panier est vide
          </h1>
          <Link
            href="/catalogue"
            className="text-brand-red hover:underline"
          >
            Retour au catalogue
          </Link>
        </div>
      </div>
    )
  }

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate order ID
    const newOrderId = `ORD-${Date.now()}`
    setOrderId(newOrderId)
    setOrderSuccess(true)
    clearCart()
    setIsSubmitting(false)

    // In a real app, you would send this data to your backend
    console.log('Order data:', { ...data, items, total: getTotal(), orderId: newOrderId })
  }

  if (orderSuccess) {
    const whatsappMessage = encodeURIComponent(
      `Bonjour, je viens de passer une commande (${orderId}). Voici mes informations :`
    )
    const whatsappUrl = `https://wa.me/212656290522?text=${whatsappMessage}`

    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 border border-white/10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <Check size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Commande confirmée !
            </h1>
            <p className="text-white/70 text-lg mb-2">
              Merci pour votre commande
            </p>
            <p className="text-brand-red font-bold text-xl mb-8">
              Numéro de commande : {orderId}
            </p>
            <p className="text-white/70 mb-8">
              Nous avons bien reçu votre demande. Notre équipe vous contactera très bientôt pour finaliser votre commande.
            </p>
            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Confirmer via WhatsApp
              </a>
              <Link
                href="/"
                className="block w-full border-2 border-white/20 hover:border-brand-red text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-black py-20">
      <div className="container mx-auto px-4">
        <Link
          href="/panier"
          className="inline-flex items-center space-x-2 text-white/70 hover:text-brand-red transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Retour au panier</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Finaliser la <span className="text-brand-red">Commande</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Informations de livraison
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Prénom <span className="text-brand-red">*</span>
                    </label>
                    <input
                      {...register('firstName')}
                      className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                      placeholder="Mohamed"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Nom <span className="text-brand-red">*</span>
                    </label>
                    <input
                      {...register('lastName')}
                      className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                      placeholder="Alami"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-white mb-2 font-medium">
                    Téléphone <span className="text-brand-red">*</span>
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="+212 6 12 34 56 78"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-white mb-2 font-medium">
                    Email (optionnel)
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="exemple@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-white mb-2 font-medium">
                    Adresse <span className="text-brand-red">*</span>
                  </label>
                  <input
                    {...register('address')}
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="123 Rue Example, Appartement 4"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-white mb-2 font-medium">
                    Ville <span className="text-brand-red">*</span>
                  </label>
                  <input
                    {...register('city')}
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors"
                    placeholder="Casablanca"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-white mb-2 font-medium">
                    Notes (optionnel)
                  </label>
                  <textarea
                    {...register('notes')}
                    rows={3}
                    className="w-full bg-brand-black text-white px-4 py-3 rounded-lg border border-white/10 focus:border-brand-red focus:outline-none transition-colors resize-none"
                    placeholder="Instructions de livraison ou autres remarques..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-red hover:bg-red-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Traitement en cours...</span>
                  </>
                ) : (
                  <span>Confirmer la commande</span>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">
                Récapitulatif
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 bg-brand-black rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-2"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm line-clamp-2">{item.title}</p>
                      <p className="text-white/70 text-sm">Qté: {item.quantity}</p>
                    </div>
                    <div className="text-white font-semibold">
                      {(item.price * item.quantity).toFixed(2)} DH
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-white/70">
                  <span>Sous-total</span>
                  <span>{getTotal().toFixed(2)} DH</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Livraison</span>
                  <span className="text-green-500">Gratuite</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-white border-t border-white/10 pt-4">
                <span>Total</span>
                <span className="text-brand-red">{getTotal().toFixed(2)} DH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

