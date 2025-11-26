# AvatarImage

Le composant **AvatarImage** affiche une image d’avatar avec différentes tailles, un arrondi optionnel et un anneau coloré autour de l’image.
Il utilise `getBoxSize` et `getRingColor` pour générer automatiquement les classes liées à la taille et à la couleur de l’anneau.

---

## Props

| Prop          | Type    | Default     | Description                                                   |
| ------------- | ------- | ----------- | ------------------------------------------------------------- |
| `size`        | String  | `'md'`      | Définit la taille de l’avatar (`xs`, `sm`, `md`, `lg`, `xl`). |
| `src`         | String  | `undefined` | Chemin de l’image affichée.                                   |
| `alt`         | String  | `'Avatar'`  | Texte alternatif de l’image.                                  |
| `roundedFull` | Boolean | `false`     | Si `true`, applique un arrondi complet (`rounded-full`).      |
| `ring`        | Boolean | `false`     | Active l’anneau autour de l’image (`ring-2`).                 |
| `ringVariant` | String  | `'neutral'` | Détermine la couleur de l’anneau (via `getRingColor`).        |

---

## Tailles disponibles

| Taille | Description        |
| ------ | ------------------ |
| `xs`   | Très petit avatar  |
| `sm`   | Petit              |
| `md`   | Moyen (par défaut) |
| `lg`   | Large              |
| `xl`   | Très large         |

Les classes de dimensions (`width`, `height`) sont générées via **getBoxSize**.

---

## Génération dynamique

- **`getBoxSize(size)`** : retourne les classes Tailwind correspondant à la largeur et à la hauteur de l’avatar.
- **`getRingColor(ringVariant)`** : génère les classes de couleur prêtes pour l’anneau (`ring-primary`, `ring-success`, etc.).

Les classes générées se combinent automatiquement avec les classes statiques du composant.

---

## Exemple d'utilisation

### Avatar image par défaut

```vue
<AvatarImage src="/users/john.png" />
```

### Avatar avec taille personnalisée

```vue
<AvatarImage src="/img/hero.png" size="lg" />
```

### Avatar arrondi complet

```vue
<AvatarImage src="/img/profile.jpg" roundedFull />
```

### Avatar avec anneau coloré

```vue
<AvatarImage src="/img/user.png" ring ringVariant="primary" />
```

### Avatar avec tous les paramètres

```vue
<AvatarImage size="xl" src="/img/user.png" ring ringVariant="success" roundedFull />
```

---

## Fonctionnement interne

- **sizeClasses**
  Généré via `getBoxSize(props.size)` et appliqué directement à l’image.

- **roundedClass**
  Ajoute soit `rounded-full`, soit `rounded-sm` selon la prop `roundedFull`.

- **ringClass & ringColor**
    - `ringClass` ajoute `ring-2` lorsque `ring = true`.
    - `ringColor` provient de `getRingColor(ringVariant)` pour la couleur du contour.
