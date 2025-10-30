import { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'

export const metadata: Metadata = {
  title: 'Catalogue - Sandriant',
  description: 'Découvrez tous nos porte-cigarettes en silicone design tête de squelette. Disponibles en rouge, noir et blanc.',
}

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-brand-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Notre <span className="text-brand-red">Catalogue</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explorez notre collection complète de porte-cigarettes Sandriant. 
            Design unique, qualité premium, style audacieux.
          </p>
        </div>

        {/* Filters (Optional - for future expansion) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900 rounded-xl p-1 border border-white/10">
            <button className="px-6 py-2 rounded-lg bg-brand-red text-white font-medium transition-colors">
              Tous
            </button>
            <button className="px-6 py-2 rounded-lg text-white/70 hover:text-white transition-colors">
              Rouge
            </button>
            <button className="px-6 py-2 rounded-lg text-white/70 hover:text-white transition-colors">
              Noir
            </button>
            <button className="px-6 py-2 rounded-lg text-white/70 hover:text-white transition-colors">
              Blanc
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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

        {/* Empty State if no products */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-xl">Aucun produit disponible pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}

