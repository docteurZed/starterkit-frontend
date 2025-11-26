# Button

Le composant **Button** affiche un bouton stylisé et réutilisable.
Il supporte différentes **tailles**, **variants de couleur**, et peut être rendu comme un `<button>`, un `<a>` ou un `RouterLink`.

Les classes sont générées dynamiquement via `generateColorClasses` et `getPaddingSize`.

---

## Props

| Prop       | Type            | Default     | Description                                                                                  |
| ---------- | --------------- | ----------- | -------------------------------------------------------------------------------------------- |
| `as`       | String          | `'button'`  | Définit le type de composant (`button`, `a`, `router-link`).                                 |
| `href`     | String          | `null`      | URL du bouton si `as='a'`.                                                                   |
| `to`       | String / Object | `null`      | Destination pour `RouterLink` si `as='router-link'`.                                         |
| `variant`  | String          | `'neutral'` | Détermine le style du bouton (`neutral`, `primary`, `secondary`, `tertiary`, `error`, etc.). |
| `size`     | String          | `'md'`      | Détermine la taille du bouton (`xs`, `sm`, `md`, `lg`, `xl`).                                |
| `disabled` | Boolean         | `false`     | Désactive le bouton et applique les styles correspondants.                                   |

---

## Tailles disponibles

| Taille | Description        |
| ------ | ------------------ |
| `xs`   | Très petit         |
| `sm`   | Petit              |
| `md`   | Moyen (par défaut) |
| `lg`   | Large              |
| `xl`   | Très large         |

Les tailles contrôlent les **padding**, la **taille du texte**, et éventuellement la **dimension globale** via `getPaddingSize(size)`.

---

## Variants disponibles

| Variant       | Description des styles appliqués                                    |
| ------------- | ------------------------------------------------------------------- |
| `neutral`     | Fond neutre, texte blanc, bordure `border-strong`                   |
| `primary`     | Fond primaire (`bg-primary`), texte blanc, bordure `border-primary` |
| `secondary`   | Fond secondaire, texte blanc, bordure `border-secondary`            |
| `tertiary`    | Fond tertiaire, texte blanc, bordure `border-tertiary`              |
| `error`       | Fond rouge, texte blanc, bordure `border-error`                     |
| `info`        | Fond bleu clair, texte blanc, bordure `border-info`                 |
| `success`     | Fond vert, texte blanc, bordure `border-success`                    |
| `warning`     | Fond jaune/orange, texte blanc, bordure `border-warning`            |
| `transparent` | Fond transparent avec hover, texte par défaut, bordure par défaut   |

---

## Slots

- Contenu par défaut : texte ou éléments à l’intérieur du bouton (`<slot />`).

---

## Utilisation

### Button simple

```vue
<Button>Valider</Button>
```

### Button avec variant et taille

```vue
<Button variant="primary" size="lg">
  Envoyer
</Button>
```

### Button désactivé

```vue
<Button disabled>
  Non cliquable
</Button>
```

### Button en lien `<a>`

```vue
<Button as="a" href="https://example.com" variant="secondary">
  Aller sur le site
</Button>
```

### Button en `RouterLink`

```vue
<Button as="router-link" :to="{ name: 'home' }" variant="tertiary">
  Accueil
</Button>
```

---

## Fonctionnement interne

- `variantClasses` est un `computed` basé sur `generateColorClasses(props.variant)` et définit **couleur de fond, texte, bordure et focus**.
- `sizeClasses` est un `computed` basé sur `getPaddingSize(props.size)` et définit le **padding et taille du texte**.
- Le composant rend dynamiquement `<button>`, `<a>` ou `RouterLink` selon la prop `as`.
- Les boutons désactivés appliquent `opacity-50`, `cursor-not-allowed` et désactivent les interactions (`pointer-events-none`).
