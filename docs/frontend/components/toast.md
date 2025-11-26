# Toast

Le composant **Toast** affiche des notifications temporaires (alertes) sur l’écran.
Il repose sur le composable `useToast` qui gère la liste des toasts, leur contenu, leur durée, et leur fermeture automatique.

Il est **monté une seule fois** dans l’application, généralement dans l’arbre racine (`App.vue`).

---

## Installation

```vue
<Toast placement="top-right" />
```

---

## Fonctionnement

Le composant lit directement les valeurs retournées par **useToast** :

- `toasts` → liste réactive des notifications
- `removeToast(id)` → supprime un toast par son identifiant

Il gère également :

- La position via la prop `placement` et `placementClasses` (`top-right`, `bottom-left`, etc.)
- La transition avec `<transition-group name="toast">`
- L’icône dynamique selon le variant (`info`, `success`, `warning`, `error`, `neutral`)
- La fermeture manuelle si `dismissible = true`

---

## Composable `useToast`

Le composable fournit toute la logique d’affichage et de suppression des toasts.

### API du composable

```js
addToast({
  message: string,         // Texte affiché
  variant?: string,        // 'info', 'success', 'warning', 'error', 'neutral' (défaut)
  duration?: number,       // Durée en ms avant disparition automatique (défaut 3000)
  dismissible?: boolean    // Affiche le bouton de fermeture (défaut true)
})

removeToast(id: number)    // Supprime un toast spécifique
```

### Propriétés exposées

| Propriété       | Type       | Description                           |
| --------------- | ---------- | ------------------------------------- |
| `toasts`        | Ref(Array) | Liste des toasts affichés             |
| `addToast()`    | Function   | Ajoute un toast à la liste            |
| `removeToast()` | Function   | Supprime un toast par son identifiant |

---

## Options de placement

| Placement       | Description                    |
| --------------- | ------------------------------ |
| `top-right`     | En haut à droite (par défaut)  |
| `top-left`      | En haut à gauche               |
| `bottom-right`  | En bas à droite                |
| `bottom-left`   | En bas à gauche                |
| `top-center`    | En haut centré horizontalement |
| `bottom-center` | En bas centré horizontalement  |

Ces classes sont appliquées dynamiquement via `placementClasses`.

---

## Variants disponibles

| Variant   | Description de l’icône et styles appliqués                        |
| --------- | ----------------------------------------------------------------- |
| `info`    | Icône `AlertOctagon`, bordure et texte `text-info`, `border-info` |
| `success` | Icône `CheckCircle`, bordure et texte `text-success`              |
| `warning` | Icône `TriangleAlert`, bordure et texte `text-warning`            |
| `error`   | Icône `X`, bordure et texte `text-error`                          |
| `neutral` | Icône `AlertCircle`, bordure et texte `text-muted`                |

---

## Slots

Le composant **Toast** n’utilise pas de slots : le contenu est entièrement fourni via `addToast()`.

---

## Exemple d'utilisation

### Ajouter un toast simple

```vue
<script setup>
import { addToast } from '@/composables'

const notify = () => {
    addToast({ message: 'Opération réussie !', variant: 'success' })
}
</script>

<template>
    <Button @click="notify">Afficher Toast</Button>
</template>
```

### Ajouter un toast avec options

```js
addToast({
    message: 'Erreur lors de l’enregistrement',
    variant: 'error',
    duration: 5000,
    dismissible: true,
})
```
