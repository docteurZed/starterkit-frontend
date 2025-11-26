# Dialog

Le composant **Dialog** affiche une boîte de confirmation modale, centrée ou positionnée selon différents placements.
Il repose sur le composable `useDialog` qui contrôle l’ouverture, le message, la position et le comportement de confirmation.

Il est monté une seule fois dans l’application, généralement dans l’arbre racine (ex : `App.vue`).

---

## Installation

```vue
<Dialog />
```

---

## Fonctionnement

Le composant lit directement les valeurs retournées par **useDialog()** :

- `isOpen` → détermine si le dialog est visible
- `message` → texte affiché dans la fenêtre
- `placement` → gère la position via `dialogPlacements`
- `hideDialog()` → ferme le dialog
- `confirm()` → déclenche `onConfirm` puis ferme

Il gère également :

- la fermeture via **Esc**
- la fermeture par clic sur le **backdrop**
- une transition personnalisée `fade-slide`

---

## Composable `useDialog`

Le composable fournit toute la logique d’ouverture/fermeture.

### API du composable

```js
showDialog({
  message?: string,
  placement?: string,   // 'center', 'top', 'bottom', etc.
  onConfirm?: Function
})
```

### Propriétés exposées

| Propriété    | Type         | Description                                        |
| ------------ | ------------ | -------------------------------------------------- |
| `isOpen`     | Ref(Boolean) | Indique si le dialog est ouvert.                   |
| `message`    | Ref(String)  | Message affiché dans le dialog.                    |
| `placement`  | Ref(String)  | Position du dialog (gérée via `dialogPlacements`). |
| `showDialog` | Function     | Ouvre le dialog avec les options spécifiées.       |
| `hideDialog` | Function     | Ferme le dialog.                                   |
| `confirm`    | Function     | Exécute `onConfirm` puis ferme le dialog.          |

---

## Options de placement

Définies dans `dialogPlacements`.

Exemples possibles :

| Placement | Description         |
| --------- | ------------------- |
| `center`  | Centré dans l’écran |
| `top`     | Aligné en haut      |
| `bottom`  | Aligné en bas       |
| `left`    | Aligné à gauche     |
| `right`   | Aligné à droite     |

---

## Slots

Le composant **Dialog** n’utilise pas de slots : son contenu est entièrement contrôlé par `useDialog()`.

---

## Exemple d'utilisation

### Ouvrir un dialog simple

```vue
<script setup>
import { useDialog } from '@/composables'

const { showDialog } = useDialog()

const onDelete = () => {
    showDialog({
        message: 'Supprimer cet élément ?',
        onConfirm: () => {
            console.log('Élément supprimé !')
        },
    })
}
</script>

<template>
    <Button @click="onDelete">Supprimer</Button>
</template>
```

---

### Dialog avec placement personnalisé

```js
showDialog({
    message: 'Voulez-vous continuer ?',
    placement: 'top',
    onConfirm: () => alert('Confirmé!'),
})
```

---

## Fonctionnement interne du composant

- Le dialog apparaît uniquement lorsque `isOpen = true`.
- L'appui sur la touche **Escape** ferme également la modale.
- La transition `fade-slide` anime l’apparition/disparition du dialog.
- Deux boutons sont intégrés :
    - **Annuler** → `hideDialog()`
    - **Confirmer** → `confirm()`
