# Dropdown

Le composant **Dropdown** permet d’afficher un menu déroulant interactif.
Il repose sur le composable `useDropdown` qui contrôle l’ouverture et la fermeture du menu, et communique via `provide/inject` avec ses sous-composants.

Le composant est généralement monté une seule fois dans l’arbre parent où le dropdown est utilisé.

---

## Composants principaux

### Dropdown

- Conteneur principal du menu.
- Fournit le contexte via `provide('dropdown', dropdown)`.
- Gère la fermeture automatique si clic à l’extérieur.

```vue
<Dropdown>
  <DropdownTrigger>Actions</DropdownTrigger>
  <DropdownMenu>
    <DropdownItem>Éditer</DropdownItem>
    <DropdownItem>Supprimer</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

---

### DropdownTrigger

- Déclenche l’ouverture/fermeture du menu.
- Utilise `toggle()` injecté depuis `Dropdown`.

```vue
<DropdownTrigger>
  <button>Ouvrir le menu</button>
</DropdownTrigger>
```

---

### DropdownMenu

- Contient les éléments du menu.
- Affiche dynamiquement selon `isOpen`.
- Prop `size` pour la largeur du menu (`sm`, `md`, `lg`, `xl`).
- Prop `align` pour l’alignement (`left`, `right`).

```vue
<DropdownMenu size="md" align="right">
  <DropdownItem>Option 1</DropdownItem>
  <DropdownItem>Option 2</DropdownItem>
</DropdownMenu>
```

---

### DropdownItem

- Élément du menu.
- Prop `divider` pour séparer les items.
- Ferme automatiquement le menu au clic si ce n’est pas un séparateur.

```vue
<DropdownItem>Éditer</DropdownItem>
<DropdownItem divider />
<DropdownItem>Supprimer</DropdownItem>
```

---

## Composable `useDropdown`

Gère l’état d’ouverture/fermeture du menu.

### API du composable

```js
const { isOpen, toggle, close } = useDropdown()
```

### Propriétés exposées

| Propriété  | Type         | Description                         |
| ---------- | ------------ | ----------------------------------- |
| `isOpen`   | Ref(Boolean) | Indique si le menu est ouvert       |
| `toggle()` | Function     | Ouvre ou ferme le menu selon l’état |
| `close()`  | Function     | Ferme le menu                       |

---

## Slots

| Slot    | Description                                        |
| ------- | -------------------------------------------------- |
| default | Contenu à l’intérieur du dropdown (trigger + menu) |

---

## Fonctionnement interne

- `Dropdown` fournit le contexte aux sous-composants via `provide`.
- `DropdownTrigger` appelle `toggle()` pour ouvrir/fermer le menu.
- `DropdownMenu` s’affiche uniquement si `isOpen = true`.
- `DropdownItem` appelle `close()` lors du clic pour fermer le menu.
- La fermeture automatique du menu est déclenchée par un clic extérieur.
- Transition `fade` anime l’apparition et la disparition du menu.
