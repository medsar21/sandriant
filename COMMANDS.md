# ⚡ Commandes Essentielles - Sandriant

Toutes les commandes dont vous avez besoin, en un coup d'œil.

---

## 🚀 Démarrer le Projet

```bash
# Installation (première fois uniquement)
npm install

# Lancer en mode développement
npm run dev

# Ouvrir le navigateur
# http://localhost:3000
```

---

## 🔨 Développement

```bash
# Lancer le serveur de développement
npm run dev

# Lancer sur un port différent
npm run dev -- -p 3001

# Build de production
npm run build

# Lancer en production (après build)
npm run start

# Vérifier le code (ESLint)
npm run lint
```

---

## 📦 Gestion des Packages

```bash
# Installer une nouvelle dépendance
npm install <package-name>

# Installer une dépendance de développement
npm install -D <package-name>

# Mettre à jour les dépendances
npm update

# Voir les packages obsolètes
npm outdated

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

---

## 🎨 Personnalisation

### Modifier les couleurs
```bash
# Éditer tailwind.config.ts
code tailwind.config.ts
```

### Modifier les produits
```bash
# Éditer data/products.json
code data/products.json
```

### Ajouter une image
```bash
# Copier l'image dans public/images/
cp votre-image.webp public/images/
```

---

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
# Via GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Puis sur vercel.com : Import project
```

```bash
# Via Vercel CLI
npm i -g vercel
vercel login
vercel
```

### Netlify

```bash
# Via Netlify CLI
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## 🧹 Maintenance

```bash
# Nettoyer le cache Next.js
rm -rf .next

# Nettoyer tout et recommencer
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

---

## 📊 Analyse et Tests

```bash
# Build de production avec analyse
npm run build

# Tester le build de production localement
npm run build
npm run start
```

---

## 🔍 Debugging

```bash
# Voir les erreurs en détail
npm run dev

# Vérifier les ports utilisés (Windows)
netstat -ano | findstr :3000

# Vérifier les ports utilisés (Mac/Linux)
lsof -i :3000

# Tuer un processus sur le port 3000 (Windows)
taskkill /PID <PID> /F

# Tuer un processus sur le port 3000 (Mac/Linux)
kill -9 <PID>
```

---

## 📝 Git (si vous utilisez Git)

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Message de commit"

# Créer une branche
git branch -M main

# Ajouter remote
git remote add origin https://github.com/USERNAME/REPO.git

# Push
git push -u origin main

# Voir le statut
git status

# Voir l'historique
git log

# Créer une nouvelle branche
git checkout -b nouvelle-branche

# Revenir à main
git checkout main
```

---

## 🖼️ Images

```bash
# Créer le dossier images (s'il n'existe pas)
mkdir -p public/images

# Lister les images
ls public/images

# Copier toutes vos images
cp chemin/vers/vos/images/*.webp public/images/
```

---

## 🔐 Variables d'Environnement (si nécessaire)

```bash
# Créer .env.local
echo "NEXT_PUBLIC_API_URL=https://api.example.com" > .env.local

# Éditer .env.local
code .env.local
```

---

## 📱 Tests Mobile

```bash
# Trouver votre IP locale (Windows)
ipconfig

# Trouver votre IP locale (Mac/Linux)
ifconfig

# Lancer le serveur et accéder depuis mobile
npm run dev
# Puis sur mobile : http://VOTRE_IP:3000
```

---

## 🚨 Résolution de Problèmes

### Problème : Port déjà utilisé
```bash
# Solution 1 : Utiliser un autre port
npm run dev -- -p 3001

# Solution 2 : Tuer le processus
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Problème : Erreurs de modules
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json .next
npm install
```

### Problème : Images ne s'affichent pas
```bash
# Vérifier que les images existent
ls public/images

# Vérifier les chemins dans products.json
cat data/products.json
```

### Problème : Erreurs TypeScript
```bash
# Reconstruire
rm -rf .next
npm run dev
```

---

## 📚 Documentation

```bash
# Ouvrir le README
code README.md

# Ouvrir le Quick Start
code QUICKSTART.md

# Ouvrir ce fichier
code COMMANDS.md
```

---

## 🎯 Workflows Courants

### Workflow 1 : Démarrage quotidien
```bash
cd safouan
npm run dev
# Ouvrir http://localhost:3000
```

### Workflow 2 : Ajouter un nouveau produit
```bash
# 1. Éditer data/products.json
code data/products.json

# 2. Ajouter les images
cp nouvelle-image.webp public/images/

# 3. Tester
npm run dev
```

### Workflow 3 : Déployer une mise à jour
```bash
# 1. Commit les changements
git add .
git commit -m "Description des changements"
git push

# 2. Vercel déploie automatiquement
# Ou : vercel --prod
```

---

## 💡 Astuces

```bash
# Ouvrir VSCode dans le dossier courant
code .

# Installer rapidement avec yarn (plus rapide que npm)
yarn install
yarn dev

# Installer rapidement avec pnpm (encore plus rapide)
pnpm install
pnpm dev
```

---

## 📞 Aide

Si vous avez des problèmes :
1. Vérifiez les logs dans le terminal
2. Consultez le README.md
3. Vérifiez que Node.js est installé : `node --version`
4. Vérifiez que npm est installé : `npm --version`

---

**Gardez ce fichier à portée de main !** 📌

---

*Dernière mise à jour : 30 octobre 2024*

