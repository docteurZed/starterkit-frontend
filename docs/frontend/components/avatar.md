# Avatar

Le composant **Avatar** affiche un avatar centré ou carré.  
Il supporte différentes **tailles**, un **anneau coloré**, ainsi qu’un **arrondi complet**.

Les classes sont générées dynamiquement via `generateColorClasses` et `generateSizeClasses`.

---

## Props

| Prop          | Type    | Default     | Description                                                    |
| ------------- | ------- | ----------- | -------------------------------------------------------------- |
| `size`        | String  | `'md'`      | Définit la taille de l’avatar (`box`, `text`, etc.).           |
| `roundedFull` | Boolean | `false`     | Si `true`, applique un arrondi complet (`rounded-full`).       |
| `ring`        | Boolean | `false`     | Active l’anneau autour de l’avatar (`ring-2`).                 |
| `ringVariant` | String  | `'neutral'` | Détermine la couleur de l’anneau (via `generateColorClasses`). |

---

## Tailles disponibles

| Taille | Description        |
| ------ | ------------------ |
| `xs`   | Très petit avatar  |
| `sm`   | Petit              |
| `md`   | Moyen (par défaut) |
| `lg`   | Large              |
| `xl`   | Très large         |

---

## Génération dynamique

- **`generateSizeClasses(size)`** : produit les classes pour
    - `box` → largeur / hauteur
    - `text` → taille de police

- **`generateColorClasses(ringVariant)`** : retourne les classes colorées pour
    - `ring` → couleurs du contour

Les classes fusionnent automatiquement avec celles du parent.

---

## Slots

- Contenu par défaut : affichage du texte ou de l'initiale à l'intérieur de l’avatar.

---

## Utilisation

### Avatar simple

```vue
<Avatar size="md">A</Avatar>
```

### Avatar avec arrondi complet

```vue
<Avatar size="lg" roundedFull>J</Avatar>
```

### Avatar avec anneau coloré

```vue
<Avatar ring ringVariant="primary">
  K
</Avatar>
```

### Avatar personnalisé

```vue
<Avatar size="xl" ring ringVariant="success" roundedFull>
    <template #default>
        U
    </template>
</Avatar>
```

---

## Fonctionnement interne

- `sizeClasses` est un `computed` basé sur `generateSizeClasses`, mis à jour dès que `size` change.
- `ringClasses` est calculé via `generateColorClasses(ringVariant).ring`.
- L’arrondi se base sur la prop `roundedFull`.
