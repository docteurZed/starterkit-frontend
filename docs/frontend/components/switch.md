# Switch

Le composant **Switch** fournit un interrupteur stylisé avec un label optionnel.
Il gère l’état activé/désactivé via `v-model` et permet de personnaliser les couleurs pour les états `on` et `off`.

---

## Props

| Prop         | Type           | Default     | Description                                         |
| ------------ | -------------- | ----------- | --------------------------------------------------- |
| `id`         | String, Number | `'switch'`  | Identifiant unique du champ.                        |
| `modelValue` | Boolean        | `false`     | Valeur actuelle du switch (utilisé avec `v-model`). |
| `label`      | String         | `''`        | Texte affiché à côté de l’interrupteur.             |
| `variantOn`  | String         | `'primary'` | Couleur de fond lorsque le switch est activé.       |
| `variantOff` | String         | `'neutral'` | Couleur de fond lorsque le switch est désactivé.    |

---

## États visuels

| État    | Description                                      |
| ------- | ------------------------------------------------ |
| **Off** | Fond de couleur `variantOff` + curseur à gauche. |
| **On**  | Fond de couleur `variantOn` + curseur à droite.  |

Les transitions de couleur et de position du curseur sont animées via `transition-colors` et `transition-transform`.

---

## Slots

Le composant **n’utilise pas de slot** : tout est rendu à partir des props.

---

## Utilisation

### Switch simple

```vue
<Switch v-model="enabled" label="Activer la fonctionnalité" />
```

### Switch avec variantes de couleur

```vue
<Switch v-model="darkMode" label="Mode sombre" variantOn="success" variantOff="neutral" />
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le composant utilise `v-model` via la propriété calculée `isChecked`.
    - L’état change lors du clic sur le switch.
