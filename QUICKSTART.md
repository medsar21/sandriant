# ⚡ Démarrage Rapide - Sandriant E-commerce

## 🎯 Projet Généré avec Succès !

Votre site e-commerce **Sandriant** est prêt à être lancé ! Voici comment démarrer en quelques commandes.

---

## 🚀 Lancer le Projet (3 étapes)

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

### 3. Ouvrir le navigateur
```
http://localhost:3000
```

**C'est tout !** 🎉

---

## 📋 Ce qui a été créé

### ✅ Pages (7 pages complètes)
- **/** - Page d'accueil avec Hero animé et loader
- **/catalogue** - Grille de tous les produits
- **/produit/[slug]** - Page détaillée de chaque produit
- **/panier** - Gestion du panier d'achat
- **/commander** - Formulaire de commande avec validation
- **/a-propos** - Histoire et valeurs de la marque
- **/contact** - Formulaire de contact

### ✅ Composants (8 composants)
- `Header` - Navigation avec panier
- `Footer` - Pied de page avec liens
- `Hero` - Section hero animée
- `Loader` - Animation de chargement
- `ProductCard` - Carte produit avec like
- `ProductGallery` - Carrousel d'images
- `WhatsAppButton` - Bouton WhatsApp flottant (+212 656 290 522)

### ✅ Fonctionnalités
- ✨ Animations Framer Motion
- 🛒 Panier avec localStorage
- ❤️ Like produits
- 📱 100% Responsive
- ♿ Accessible (ARIA labels)
- 🎨 Thème rouge/noir/blanc
- 📝 Validation de formulaires
- 🔍 SEO optimisé

### ✅ Données
- 3 produits de démonstration (Rouge, Noir, Blanc)
- Prix : 129.00 DH chacun
- Fichier modifiable : `data/products.json`

---

## ⚠️ Images à Ajouter

Le site fonctionne mais les images sont manquantes. Ajoutez vos images dans `public/images/` :

**Images requises :**
```
public/images/
├── hero-product.webp          (1200x1200px)
├── skull-red-1.webp           (800x800px)
├── skull-red-2.webp           (800x800px)
├── skull-red-3.webp           (800x800px)
├── skull-black-1.webp         (800x800px)
├── skull-black-2.webp         (800x800px)
├── skull-white-1.webp         (800x800px)
├── skull-white-2.webp         (800x800px)
└── about-story.webp           (1200x800px)
```

**Solution temporaire :**
Le site fonctionne sans images, Next.js affichera juste un placeholder.

---

## 🎨 Personnalisation Rapide

### Changer les couleurs
Éditez `tailwind.config.ts` :
```typescript
colors: {
  brand: {
    red: '#e11d48',    // Votre couleur rouge
    black: '#0f172a',  // Votre couleur noire
    white: '#ffffff',
  },
}
```

### Modifier les produits
Éditez `data/products.json` :
```json
{
  "id": "nouveau-produit",
  "slug": "nouveau-produit",
  "title": "Mon Nouveau Produit",
  "price": 99.00,
  ...
}
```

### Changer le numéro WhatsApp
Éditez `components/WhatsAppButton.tsx` :
```typescript
const phoneNumber = '212XXXXXXXXX'  // Votre numéro
```

---

## 📦 Déployer sur Vercel

### Option 1 : Via GitHub (Recommandé)
```bash
# 1. Initialiser Git
git init
git add .
git commit -m "Initial commit - Sandriant"

# 2. Pusher sur GitHub
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/sandriant.git
git push -u origin main

# 3. Sur vercel.com
# - Cliquer "New Project"
# - Importer votre repo
# - Cliquer "Deploy"
```

### Option 2 : Via Vercel CLI
```bash
npm i -g vercel
vercel
```

**Temps de déploiement : ~2 minutes** ⚡

---

## 🔧 Commandes Disponibles

```bash
npm run dev      # Développement (http://localhost:3000)
npm run build    # Build de production
npm run start    # Lancer en production
npm run lint     # Vérifier le code
```

---

## 📁 Structure du Projet

```
safouan/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Accueil
│   ├── catalogue/         # Catalogue
│   ├── produit/[slug]/    # Produit dynamique
│   ├── panier/            # Panier
│   ├── commander/         # Commande
│   ├── a-propos/          # À propos
│   ├── contact/           # Contact
│   └── layout.tsx         # Layout global
│
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Loader.tsx
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   └── WhatsAppButton.tsx
│
├── context/               # State management
│   └── CartContext.tsx   # Gestion panier
│
├── data/                  # Données
│   └── products.json     # Catalogue
│
├── public/
│   └── images/           # ⚠️ Ajouter vos images ici
│
├── package.json          # Dépendances
├── tailwind.config.ts    # Config Tailwind
├── next.config.js        # Config Next.js
│
└── README.md            # Documentation complète
```

---

## ✅ Checklist Avant Production

- [ ] Ajouter toutes les images WebP
- [ ] Tester sur mobile et desktop
- [ ] Vérifier le formulaire de commande
- [ ] Configurer les vraies informations de contact
- [ ] Ajouter CGV et mentions légales
- [ ] Tester la performance (Google Lighthouse)
- [ ] Configurer le vrai backend pour les commandes (optionnel)

---

## 🎯 Fonctionnalités Avancées (Optionnel)

### Backend pour les commandes
Actuellement, les commandes sont simulées. Pour un vrai backend :
1. Créer une API (Node.js, Firebase, Supabase...)
2. Modifier `app/commander/page.tsx` pour envoyer à votre API
3. Ajouter confirmation par email

### Paiement en ligne
Intégrer Stripe, PayPal ou un service local :
```bash
npm install @stripe/stripe-js
```

### Analytics
Ajouter Google Analytics dans `app/layout.tsx`

---

## 📞 Support

- **WhatsApp**: [+212 656 290 522](https://wa.me/212656290522)
- **Email**: contact@sandriant.com

---

## 🎉 Projet Complet !

Tout est prêt pour :
- ✅ Développement local
- ✅ Personnalisation
- ✅ Déploiement production

**Bon lancement !** 🚀

---

*Développé avec Next.js 14, Tailwind CSS, Framer Motion & TypeScript*

