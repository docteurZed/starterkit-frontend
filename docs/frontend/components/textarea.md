# Textarea

Le composant **Textarea** fournit une zone de texte multiligne stylisée, accompagnée d’un label optionnel, d’un helperText et d’un message d’erreur.
Il gère automatiquement les styles de bordures selon l’état (normal ou erreur) et émet les mises à jour via `v-model`.

---

## Props

| Prop          | Type           | Default      | Description                                                       |
| ------------- | -------------- | ------------ | ----------------------------------------------------------------- |
| `id`          | String, Number | `'textarea'` | Identifiant unique du champ.                                      |
| `modelValue`  | String         | `''`         | Valeur du textarea (utilisé avec `v-model`).                      |
| `label`       | String         | `''`         | Label affiché au-dessus du champ.                                 |
| `name`        | String         | `''`         | Attribut `name` du textarea.                                      |
| `placeholder` | String         | `''`         | Texte indicatif affiché dans la zone.                             |
| `required`    | Boolean        | `false`      | Rend le champ obligatoire.                                        |
| `rows`        | Number         | `4`          | Nombre de lignes visibles par défaut.                             |
| `helperText`  | String         | `''`         | Texte d’aide affiché sous le champ lorsqu’il n’y a pas d’erreur.  |
| `error`       | String         | `''`         | Message d’erreur affiché sous le champ (active les styles rouge). |

---

## États visuels

| État       | Description                                           |
| ---------- | ----------------------------------------------------- |
| **Normal** | Bordures neutres + focus gris / zinc.                 |
| **Erreur** | Bordure rouge + focus rouge + message d’erreur rouge. |

---

## Slots

Le composant **n’utilise aucun slot** : tout est rendu à partir des props.

---

## Utilisation

### Textarea simple

```vue
<Textarea v-model="description" label="Description" placeholder="Décrivez votre projet..." />
```

### Textarea requis

```vue
<Textarea v-model="bio" label="Biographie" required />
```

### Avec texte d’aide

```vue
<Textarea v-model="notes" label="Notes" helperText="Max 500 caractères." />
```

### Avec message d’erreur

```vue
<Textarea v-model="comment" label="Commentaire" error="Ce champ est obligatoire." />
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le composant utilise `v-model` via l’événement `update:modelValue`.
    - L’affichage des messages dépend de `helperText` et `error`.
