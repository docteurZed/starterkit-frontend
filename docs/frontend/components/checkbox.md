# Checkbox

Le composant **Checkbox** fournit une case à cocher stylisée avec un label optionnel.
Il gère la sélection via `v-model` et émet les mises à jour automatiquement.

---

## Props

| Prop         | Type           | Default      | Description                                          |
| ------------ | -------------- | ------------ | ---------------------------------------------------- |
| `id`         | String, Number | `'checkbox'` | Identifiant unique du champ.                         |
| `modelValue` | Boolean        | `false`      | Valeur de la case à cocher (utilisé avec `v-model`). |
| `label`      | String         | `''`         | Texte affiché à côté de la case.                     |
| `name`       | String         | `''`         | Attribut `name` de la case.                          |

---

## États visuels

| État       | Description                                            |
| ---------- | ------------------------------------------------------ |
| **Normal** | Case décochée avec bordure neutre.                     |
| **Cochée** | Case remplie avec couleur principale (`text-primary`). |

Le style inclut un focus stylisé avec `ring` et supporte le mode sombre.

---

## Slots

Le composant **n’utilise pas de slot** : tout est rendu à partir des props.

---

## Utilisation

### Case simple

```vue
<Checkbox v-model="agreed" label="J'accepte les conditions" />
```

### Case avec nom et id personnalisés

```vue
<Checkbox
    v-model="newsletter"
    id="newsletter"
    name="newsletter"
    label="S'inscrire à la newsletter"
/>
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le composant utilise `v-model` via l’événement `update:modelValue`.
    - La fonction interne `toggle` inverse la valeur actuelle lors d’un changement.
