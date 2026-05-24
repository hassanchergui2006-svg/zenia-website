# Assets ZENYA

Mettre ici les images réelles du produit quand elles seront disponibles.

## Fichiers attendus

| Fichier | Description | Taille recommandée |
|---|---|---|
| `hero-product.png` | Image principale Hero (pack complet) | 600×600 px |
| `gummies.png` | Photo des Gummies Anti-Stress | 400×400 px |
| `capsules.png` | Photo des Capsules Focus & Calm | 400×400 px |
| `logo-zenya.png` | Logo ZENYA fond transparent | 200×200 px |
| `paper-texture.png` | Texture papier fond | 800×800 px (tile) |
| `brush-green.png` | Effet brush vert (PNG transparent) | 400×100 px |
| `brush-purple.png` | Effet brush violet (PNG transparent) | 400×100 px |
| `leaf-icon.svg` | Icône feuille vectorielle | SVG |

## Comment remplacer un placeholder

1. Dépose l'image dans ce dossier `/public/assets/`
2. Dans le composant concerné, remplace le `<div>` placeholder par :
   ```jsx
   <Image src="/assets/gummies.png" alt="Gummies Anti-Stress ZENYA" width={400} height={400} />
   ```
3. N'oublie pas d'importer `Image` de Next.js : `import Image from 'next/image'`
