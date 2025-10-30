import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-brand-black to-gray-900 border-t border-brand-red/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-brand-red mb-4">SANDRIANT</h3>
            <p className="text-white/70 text-sm">
              Porte-cigarettes premium en silicone avec design unique tête de squelette.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-brand-red transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-white/70 hover:text-brand-red transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-white/70 hover:text-brand-red transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-brand-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Livraison rapide</li>
              <li className="text-white/70">Paiement sécurisé</li>
              <li className="text-white/70">Service client 7j/7</li>
              <li className="text-white/70">Satisfait ou remboursé</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-white/70">
                <Phone size={16} className="text-brand-red" />
                <a href="tel:+212656290522" className="hover:text-brand-red transition-colors">
                  +212 656 290 522
                </a>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <Mail size={16} className="text-brand-red" />
                <a href="mailto:contact@sandriant.com" className="hover:text-brand-red transition-colors">
                  contact@sandriant.com
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/70 hover:text-brand-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Sandriant. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-brand-red transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-brand-red transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-brand-red transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

