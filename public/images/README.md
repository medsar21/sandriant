# Images Placeholder

Ce dossier doit contenir toutes les images du site.

## Images Requises

### Hero & Home
- **hero-product.webp** (1200x1200px) - Image principale du produit pour la section hero

### Produits - Rouge
- **skull-red-1.webp** (800x800px) - Vue principale
- **skull-red-2.webp** (800x800px) - Vue angle 2
- **skull-red-3.webp** (800x800px) - Vue angle 3

### Produits - Noir
- **skull-black-1.webp** (800x800px) - Vue principale
- **skull-black-2.webp** (800x800px) - Vue angle 2

### Produits - Blanc
- **skull-white-1.webp** (800x800px) - Vue principale
- **skull-white-2.webp** (800x800px) - Vue angle 2

### Page À Propos
- **about-story.webp** (1200x800px) - Image illustrant l'histoire de la marque

## Format Recommandé

- **Format**: WebP (meilleure compression)
- **Fond**: Transparent ou fond sombre/neutre
- **Qualité**: 80-90% pour balance qualité/taille
- **Résolution**: Haute résolution pour affichage net

## Comment Convertir en WebP

### En ligne
- [Squoosh.app](https://squoosh.app/) - Outil Google gratuit

### Ligne de commande (ImageMagick)
```bash
convert image.png -quality 85 image.webp
```

### Photoshop
- Fichier > Exporter > Enregistrer pour le Web > Format WebP

## Images Temporaires

Pour le développement, vous pouvez utiliser:
- [Placeholder.com](https://placeholder.com/)
- [Unsplash](https://unsplash.com/) pour images gratuites
- Créer des SVG simples

Exemple URL placeholder:
```
https://via.placeholder.com/800x800/0f172a/e11d48?text=Sandriant
```

## Optimisation

Avant de déployer en production:
1. Compresser toutes les images
2. Utiliser le format WebP
3. Fournir des images en plusieurs résolutions si possible
4. Vérifier que les images sont < 200KB chacune

