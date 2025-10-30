# 🎨 Images Placeholder SVG

En attendant vos vraies images, vous pouvez utiliser ces placeholders SVG temporaires.

## Comment utiliser

### Option 1 : Créer des fichiers SVG

Créez ces fichiers dans `public/images/` avec l'extension `.svg` (au lieu de `.webp`).
Puis modifiez `data/products.json` pour utiliser `.svg` au lieu de `.webp`.

### Option 2 : Utiliser des URLs placeholder

Dans `data/products.json`, remplacez les chemins par :
```json
"images": [
  "https://via.placeholder.com/800x800/0f172a/e11d48?text=Sandriant+Rouge",
  ...
]
```

---

## 🎭 SVG Tête de Squelette (Rouge)

Créez `skull-red.svg` :

```svg
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="800" fill="#0f172a"/>
  
  <!-- Skull -->
  <ellipse cx="400" cy="380" rx="180" ry="200" fill="#e11d48" opacity="0.9"/>
  <ellipse cx="400" cy="380" rx="160" ry="180" fill="#1e293b"/>
  
  <!-- Eyes -->
  <ellipse cx="350" cy="360" rx="35" ry="50" fill="#e11d48"/>
  <ellipse cx="450" cy="360" rx="35" ry="50" fill="#e11d48"/>
  
  <!-- Nose -->
  <path d="M 380 420 L 400 440 L 420 420 Z" fill="#e11d48"/>
  
  <!-- Teeth -->
  <rect x="320" y="480" width="30" height="50" rx="5" fill="white"/>
  <rect x="360" y="480" width="30" height="50" rx="5" fill="white"/>
  <rect x="400" y="480" width="30" height="50" rx="5" fill="white"/>
  <rect x="440" y="480" width="30" height="50" rx="5" fill="white"/>
  
  <!-- Text -->
  <text x="400" y="650" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#e11d48" text-anchor="middle">
    SANDRIANT
  </text>
  <text x="400" y="690" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">
    Porte-cigarette Design
  </text>
</svg>
```

---

## 🎭 SVG Tête de Squelette (Noir)

Créez `skull-black.svg` :

```svg
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="800" fill="#0f172a"/>
  
  <!-- Skull -->
  <ellipse cx="400" cy="380" rx="180" ry="200" fill="#1e293b" opacity="0.9"/>
  <ellipse cx="400" cy="380" rx="160" ry="180" fill="#000000"/>
  
  <!-- Eyes -->
  <ellipse cx="350" cy="360" rx="35" ry="50" fill="#ef4444"/>
  <ellipse cx="450" cy="360" rx="35" ry="50" fill="#ef4444"/>
  
  <!-- Nose -->
  <path d="M 380 420 L 400 440 L 420 420 Z" fill="#ef4444"/>
  
  <!-- Teeth -->
  <rect x="320" y="480" width="30" height="50" rx="5" fill="#e5e7eb"/>
  <rect x="360" y="480" width="30" height="50" rx="5" fill="#e5e7eb"/>
  <rect x="400" y="480" width="30" height="50" rx="5" fill="#e5e7eb"/>
  <rect x="440" y="480" width="30" height="50" rx="5" fill="#e5e7eb"/>
  
  <!-- Text -->
  <text x="400" y="650" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#ffffff" text-anchor="middle">
    SANDRIANT
  </text>
  <text x="400" y="690" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">
    Version Noire
  </text>
</svg>
```

---

## 🎭 SVG Tête de Squelette (Blanc)

Créez `skull-white.svg` :

```svg
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="800" fill="#0f172a"/>
  
  <!-- Skull -->
  <ellipse cx="400" cy="380" rx="180" ry="200" fill="#f1f5f9" opacity="0.9"/>
  <ellipse cx="400" cy="380" rx="160" ry="180" fill="#e2e8f0"/>
  
  <!-- Eyes -->
  <ellipse cx="350" cy="360" rx="35" ry="50" fill="#1e293b"/>
  <ellipse cx="450" cy="360" rx="35" ry="50" fill="#1e293b"/>
  
  <!-- Nose -->
  <path d="M 380 420 L 400 440 L 420 420 Z" fill="#1e293b"/>
  
  <!-- Teeth -->
  <rect x="320" y="480" width="30" height="50" rx="5" fill="#0f172a"/>
  <rect x="360" y="480" width="30" height="50" rx="5" fill="#0f172a"/>
  <rect x="400" y="480" width="30" height="50" rx="5" fill="#0f172a"/>
  <rect x="440" y="480" width="30" height="50" rx="5" fill="#0f172a"/>
  
  <!-- Text -->
  <text x="400" y="650" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#f1f5f9" text-anchor="middle">
    SANDRIANT
  </text>
  <text x="400" y="690" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">
    Version Blanche
  </text>
</svg>
```

---

## 🖼️ Hero Product SVG

Créez `hero-product.svg` :

```svg
<svg width="1200" height="1200" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
  <!-- Radial gradient background -->
  <defs>
    <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#e11d48;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </radialGradient>
  </defs>
  
  <rect width="1200" height="1200" fill="url(#heroGradient)"/>
  
  <!-- Main Skull -->
  <ellipse cx="600" cy="550" rx="280" ry="320" fill="#e11d48" opacity="0.95"/>
  <ellipse cx="600" cy="550" rx="250" ry="290" fill="#1e293b"/>
  
  <!-- Eyes -->
  <ellipse cx="520" cy="520" rx="50" ry="75" fill="#e11d48"/>
  <ellipse cx="680" cy="520" rx="50" ry="75" fill="#e11d48"/>
  <circle cx="520" cy="520" r="25" fill="#0f172a"/>
  <circle cx="680" cy="520" r="25" fill="#0f172a"/>
  
  <!-- Nose -->
  <path d="M 570 620 L 600 660 L 630 620 Z" fill="#e11d48"/>
  
  <!-- Teeth Top -->
  <rect x="460" y="700" width="45" height="70" rx="8" fill="white"/>
  <rect x="520" y="700" width="45" height="70" rx="8" fill="white"/>
  <rect x="580" y="700" width="45" height="70" rx="8" fill="white"/>
  <rect x="640" y="700" width="45" height="70" rx="8" fill="white"/>
  <rect x="700" y="700" width="45" height="70" rx="8" fill="white"/>
  
  <!-- Jaw -->
  <path d="M 400 750 Q 600 850 800 750" stroke="#e11d48" stroke-width="4" fill="none"/>
  
  <!-- Glow effect -->
  <circle cx="600" cy="550" r="320" fill="none" stroke="#e11d48" stroke-width="3" opacity="0.3"/>
  <circle cx="600" cy="550" r="350" fill="none" stroke="#e11d48" stroke-width="2" opacity="0.2"/>
  
  <!-- Brand Text -->
  <text x="600" y="1000" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="#e11d48" text-anchor="middle">
    SANDRIANT
  </text>
  <text x="600" y="1060" font-family="Arial, sans-serif" font-size="36" fill="#94a3b8" text-anchor="middle">
    Design Tête de Squelette
  </text>
</svg>
```

---

## 📷 About Story SVG

Créez `about-story.svg` :

```svg
<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#0f172a"/>
  
  <!-- Gradient overlay -->
  <defs>
    <linearGradient id="storyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e11d48;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#storyGradient)"/>
  
  <!-- Multiple skulls pattern -->
  <g opacity="0.3">
    <ellipse cx="300" cy="250" rx="80" ry="90" fill="#e11d48"/>
    <ellipse cx="600" cy="400" rx="120" ry="140" fill="#e11d48"/>
    <ellipse cx="900" cy="250" rx="80" ry="90" fill="#e11d48"/>
  </g>
  
  <!-- Main text -->
  <text x="600" y="400" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="#e11d48" text-anchor="middle">
    SANDRIANT
  </text>
  <text x="600" y="480" font-family="Arial, sans-serif" font-size="48" fill="#ffffff" text-anchor="middle" opacity="0.8">
    Notre Histoire
  </text>
  <text x="600" y="540" font-family="Arial, sans-serif" font-size="28" fill="#94a3b8" text-anchor="middle">
    Design unique depuis 2024
  </text>
</svg>
```

---

## 🔄 Comment utiliser ces SVG

### Méthode 1 : Créer les fichiers SVG

1. Créez chaque fichier dans `public/images/`
2. Modifiez `data/products.json` :

```json
{
  "images": [
    "/images/skull-red.svg",
    "/images/skull-red.svg",
    "/images/skull-red.svg"
  ]
}
```

### Méthode 2 : Outil en ligne

Utilisez [SVGViewer](https://www.svgviewer.dev/) pour prévisualiser et télécharger.

### Méthode 3 : URLs Placeholder

Utilisez des services comme :
- `https://via.placeholder.com/800x800/0f172a/e11d48?text=Sandriant`
- `https://placehold.co/800x800/0f172a/e11d48/svg?text=Sandriant`

---

## ✨ Résultat

Ces SVG temporaires vous permettront de :
- ✅ Tester le site immédiatement
- ✅ Voir le rendu des pages
- ✅ Vérifier le responsive
- ✅ Présenter une démo fonctionnelle

**Remplacez-les par vos vraies photos dès que possible !**

---

*Note : Les SVG sont légers (~2-3KB) vs images réelles (~50-200KB)*

