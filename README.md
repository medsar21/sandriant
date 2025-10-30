# 🔥 Sandriant - Site E-commerce

Site e-commerce moderne et responsive pour **Sandriant**, porte-cigarettes en silicone avec design tête de squelette unique.

![Sandriant](public/images/hero-product.webp)

## ✨ Fonctionnalités

### Pages
- 🏠 **Accueil** - Hero animé avec loader et présentation produit
- 📦 **Catalogue** - Grille de produits avec filtres
- 🔍 **Produit détaillé** - Galerie d'images, description, caractéristiques
- 🛒 **Panier** - Gestion du panier avec localStorage
- 📝 **Commander** - Formulaire de commande validé
- ℹ️ **À propos** - Histoire et valeurs de la marque
- 📧 **Contact** - Formulaire de contact avec validation

### Fonctionnalités techniques
- ✅ Animations fluides (Framer Motion)
- ✅ Panier persistant (localStorage)
- ✅ Validation de formulaires (react-hook-form + Zod)
- ✅ Bouton WhatsApp flottant (+212 656 290 522)
- ✅ Like produits
- ✅ Responsive mobile/desktop
- ✅ SEO optimisé
- ✅ Accessibilité (ARIA labels, navigation clavier)
- ✅ Performance optimisée (lazy loading, WebP)

## 🚀 Technologies

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Formulaires**: React Hook Form + Zod
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm, yarn, ou pnpm

### Étapes

1. **Cloner le projet** (ou utiliser les fichiers générés)
```bash
cd safouan
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🎨 Personnalisation

### Couleurs (Tailwind)
Les couleurs de la marque sont définies dans `tailwind.config.ts` :
```typescript
colors: {
  brand: {
    red: '#e11d48',    // Rouge principal
    black: '#0f172a',  // Noir de fond
    white: '#ffffff',  // Blanc
  },
}
```

### Images
Remplacez les images placeholder dans `/public/images/` par vos vraies images :

**Images requises :**
- `hero-product.webp` - Image principale hero (1200x1200px recommandé)
- `skull-red-1.webp`, `skull-red-2.webp`, `skull-red-3.webp` - Produit rouge
- `skull-black-1.webp`, `skull-black-2.webp` - Produit noir
- `skull-white-1.webp`, `skull-white-2.webp` - Produit blanc
- `about-story.webp` - Image "À propos" (1200x800px)

**Format recommandé :** WebP pour performance optimale

### Produits
Modifiez les produits dans `data/products.json` :
```json
{
  "id": "skull-red-01",
  "slug": "skull-red",
  "title": "Sandriant Tête de Squelette - Rouge",
  "price": 129.00,
  "images": ["/images/skull-red-1.webp", ...],
  "short": "Description courte",
  "description": "Description longue",
  "features": [...],
  "inStock": true
}
```

### WhatsApp
Le numéro WhatsApp est configuré dans `components/WhatsAppButton.tsx` :
```typescript
const phoneNumber = '212656290522'
```

## 🏗️ Structure du Projet

```
safouan/
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── catalogue/           # Page catalogue
│   ├── produit/[slug]/      # Page produit dynamique
│   ├── panier/              # Page panier
│   ├── commander/           # Page commande
│   ├── a-propos/            # Page à propos
│   ├── contact/             # Page contact
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Styles globaux
├── components/              # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Loader.tsx
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   └── WhatsAppButton.tsx
├── context/                 # Contextes React
│   └── CartContext.tsx      # Gestion du panier
├── data/                    # Données
│   └── products.json        # Catalogue produits
├── public/                  # Assets statiques
│   └── images/              # Images
├── tailwind.config.ts       # Configuration Tailwind
├── next.config.js           # Configuration Next.js
└── package.json             # Dépendances
```

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Hero + produits vedettes + CTA |
| `/catalogue` | Catalogue | Liste complète des produits |
| `/produit/[slug]` | Produit | Page détaillée d'un produit |
| `/panier` | Panier | Gestion du panier d'achat |
| `/commander` | Commander | Formulaire de commande |
| `/a-propos` | À propos | Histoire et valeurs |
| `/contact` | Contact | Formulaire de contact |

## 🎯 Fonctionnalités Clés

### Loader Animé
Animation de chargement avec logo pulsant qui disparaît en fondu après 1.8s.

### Hero Animé
- Texte avec gradient animé
- Image produit avec rotation 3D et translation Y
- CTA vers le catalogue
- Indicateur de scroll

### Panier (localStorage)
- Ajout/suppression de produits
- Modification des quantités
- Calcul du total
- Persistance entre sessions

### Formulaire de Commande
- Validation avec Zod
- Champs : nom, prénom, téléphone (format marocain), adresse, ville
- Génération d'ID de commande
- Page de confirmation
- Lien WhatsApp pour finaliser

### Like Produits
Animation cœur qui se remplit au clic (non persistant, peut être étendu).

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Push sur GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <votre-repo-github>
git push -u origin main
```

2. **Déployer sur Vercel**
- Aller sur [vercel.com](https://vercel.com)
- Cliquer "New Project"
- Importer votre repo GitHub
- Vercel détecte automatiquement Next.js
- Cliquer "Deploy"

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Framework**: Next.js

## 🔧 Scripts

```bash
npm run dev      # Lancer serveur de développement
npm run build    # Build de production
npm run start    # Lancer en production
npm run lint     # Vérifier le code
```

## 📊 Performance

- ⚡ Images optimisées en WebP
- 🎨 Tailwind CSS (purge automatique)
- 🚀 Next.js Image Optimization
- 📦 Code splitting automatique
- 🔄 Lazy loading des images

## 🎨 Palette de Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Rouge | `#e11d48` | Accent, CTA, liens |
| Noir | `#0f172a` | Fond principal |
| Gris foncé | `#1e293b` | Cards, sections |
| Blanc | `#ffffff` | Texte principal |
| Blanc/70 | `rgba(255,255,255,0.7)` | Texte secondaire |

## 📝 À faire avant production

- [ ] Remplacer toutes les images placeholder par les vraies images WebP
- [ ] Tester sur mobile (iOS + Android)
- [ ] Tester sur desktop (Chrome, Firefox, Safari)
- [ ] Vérifier l'accessibilité (navigation clavier, lecteurs d'écran)
- [ ] Configurer favicon et meta tags Open Graph
- [ ] Tester le formulaire de commande (validation téléphone)
- [ ] Ajouter page CGV et Politique de confidentialité
- [ ] Configurer Google Analytics (optionnel)
- [ ] Tester les performances avec Lighthouse
- [ ] Configurer un vrai backend/API pour les commandes (optionnel)

## 🆘 Support

- **WhatsApp**: [+212 656 290 522](https://wa.me/212656290522)
- **Email**: contact@sandriant.com

## 📄 Licence

Ce projet est privé. Tous droits réservés © 2024 Sandriant.

---

**Développé avec ❤️ pour Sandriant**

