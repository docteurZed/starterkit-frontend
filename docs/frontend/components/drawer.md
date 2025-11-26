# Drawer

Le composant **Drawer** affiche un panneau coulissant pouvant apparaître sur les **quatre côtés de l’écran**.
Il supporte différentes **tailles**, un placement personnalisable, et peut être **fermé programmatiquement** grâce aux méthodes exposées (`show()` et `hide()`).

---

## Props

| Prop          | Type    | Default   | Description                                                                     |
| ------------- | ------- | --------- | ------------------------------------------------------------------------------- |
| `placement`   | String  | `'right'` | Définit le côté d'apparition du drawer (`top`, `right`, `bottom`, `left`).      |
| `size`        | String  | `'md'`    | Taille du drawer, basée sur les clés de `sizes` depuis `getDimensionSize`.      |
| `dismissible` | Boolean | `true`    | Si `true`, affiche une icône pour fermer le drawer et permet un clic hors-zone. |

---

## Tailles disponibles

Les tailles correspondent aux clés définies dans `sizes` (`xs`, `sm`, `md`, `lg`, etc.).
Elles influencent largueur/hauteur selon le placement.

Cette fonction retourne une combinaison de classes Tailwind :

- Pour `left` / `right` → la **largeur**
- Pour `top` / `bottom` → la **hauteur**

---

## Placements disponibles

| Placement | Description                                       |
| --------- | ------------------------------------------------- |
| `top`     | Le drawer apparaît du haut et glisse vers le bas. |
| `right`   | Le drawer apparaît de la droite (par défaut).     |
| `bottom`  | Le drawer apparaît du bas et remonte.             |
| `left`    | Le drawer apparaît de la gauche.                  |

Ces transitions sont gérées automatiquement dans `useDrawerClasses`.

---

## Slots

- **Slot par défaut** : contenu affiché à l’intérieur du drawer.

---

## Utilisation

### Basic

```vue
<script setup>
import { ref } from 'vue'

const drawer = ref(null)
const open = () => drawer.value.show()
</script>

<template>
    <Drawer ref="drawer"> Contenu du drawer </Drawer>

    <Button @click="open">Ouvrir</Button>
</template>
```

### Placement personnalisé

```vue
<Drawer ref="drawer" placement="left">
  Menu latéral
</Drawer>
```

### Drawer non dismissible

```vue
<Drawer ref="drawer" :dismissible="false">
  Drawer qui ne peut être fermé qu’avec hide()
</Drawer>
```

---

## Méthodes exposées

Le composant expose deux méthodes pour contrôler son état :

| Méthode  | Description      |
| -------- | ---------------- |
| `show()` | Ouvre le drawer. |
| `hide()` | Ferme le drawer. |

Elles sont accessibles via `ref` grâce à :

```vue
defineExpose({ show, hide })
```

---

## Fonctionnement interne

- `isOpen` est un `ref` interne qui contrôle l’affichage du drawer et du backdrop.
- `show()` et `hide()` modifient `isOpen`.
- Les classes du drawer sont générées via : `dismissible` est activé.
