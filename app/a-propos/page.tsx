import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Shield, Heart, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos - Sandriant',
  description: 'Découvrez l\'histoire et les valeurs de Sandriant, créateur de porte-cigarettes design en silicone premium.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            À Propos de <span className="text-brand-red">Sandriant</span>
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Une marque unique qui allie style, qualité et innovation dans le monde des accessoires pour fumeurs.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=1200&h=800&fit=crop&auto=format"
              alt="Histoire de Sandriant"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Sandriant est né d'une passion pour le design unique et la qualité supérieure. 
                Nous croyons que chaque accessoire doit être à la fois fonctionnel et esthétique.
              </p>
              <p>
                Notre porte-cigarette signature avec design tête de squelette représente 
                l'audace, le style et l'individualité. Fabriqué en silicone médical premium, 
                il combine durabilité et confort d'utilisation.
              </p>
              <p>
                Chaque produit Sandriant est soigneusement conçu pour offrir une expérience 
                exceptionnelle à nos clients, tout en respectant les normes de qualité les plus élevées.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Nos <span className="text-brand-red">Valeurs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-white/10 hover:border-brand-red/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/20 rounded-full mb-4">
                <Award className="text-brand-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Qualité Premium</h3>
              <p className="text-white/70">
                Nous utilisons uniquement des matériaux de la plus haute qualité pour garantir durabilité et sécurité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-white/10 hover:border-brand-red/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/20 rounded-full mb-4">
                <Zap className="text-brand-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Design Unique</h3>
              <p className="text-white/70">
                Nos créations se démarquent par leur originalité et leur audace, reflétant votre personnalité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-white/10 hover:border-brand-red/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/20 rounded-full mb-4">
                <Shield className="text-brand-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sécurité</h3>
              <p className="text-white/70">
                Silicone médical anti-chaleur, testé et certifié pour une utilisation en toute sécurité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-white/10 hover:border-brand-red/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/20 rounded-full mb-4">
                <Heart className="text-brand-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Satisfaction Client</h3>
              <p className="text-white/70">
                Votre satisfaction est notre priorité. Service client disponible 24/7 pour vous accompagner.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-brand-red to-red-700 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Sandriant en Chiffres
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-white/90">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90">Silicone Premium</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90">Service Client</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">⭐ 4.9</div>
              <div className="text-white/90">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

