# 🚀 Guide d'Installation Rapide - Sandriant

## Installation en 5 minutes

### 1️⃣ Installer les dépendances

```bash
npm install
```

### 2️⃣ Lancer le projet

```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur

```
http://localhost:3000
```

C'est tout ! 🎉

---

## ⚠️ Important - Images

Le site utilise des chemins d'images qui doivent être créés. Pour l'instant, Next.js affichera des erreurs d'images manquantes.

### Solution rapide (développement)

Créez des fichiers placeholder dans `public/images/`:
- hero-product.webp
- skull-red-1.webp, skull-red-2.webp, skull-red-3.webp
- skull-black-1.webp, skull-black-2.webp
- skull-white-1.webp, skull-white-2.webp
- about-story.webp

Vous pouvez utiliser n'importe quelle image temporairement.

### Solution alternative

Remplacez temporairement les images par des placeholders en ligne :

Dans `data/products.json`, remplacez les chemins par:
```json
"images": [
  "https://via.placeholder.com/800x800/0f172a/e11d48?text=Sandriant+Rouge",
  ...
]
```

---

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production (après build)
npm run start

# Vérifier le code
npm run lint
```

---

## 📁 Structure Minimale Requise

```
safouan/
├── app/              ✅ Créé
├── components/       ✅ Créé
├── context/          ✅ Créé
├── data/             ✅ Créé
├── public/
│   └── images/       ⚠️ Ajouter vos images ici
├── package.json      ✅ Créé
└── README.md         ✅ Créé
```

---

## 🆘 Problèmes Courants

### Port 3000 déjà utilisé
```bash
# Utiliser un autre port
npm run dev -- -p 3001
```

### Erreurs TypeScript
```bash
# Reconstruire
rm -rf .next
npm run dev
```

### Images manquantes
- Voir section "Important - Images" ci-dessus
- Ou ajouter vos vraies images dans `public/images/`

---

## ✅ Vérification

Une fois lancé, vous devriez voir:
- ✅ Loader animé au chargement
- ✅ Hero avec animation
- ✅ Header avec panier
- ✅ Bouton WhatsApp flottant
- ⚠️ Images manquantes (normal si non ajoutées)

---

## 📞 Contact

**WhatsApp**: +212 656 290 522

**Bon développement !** 🚀

