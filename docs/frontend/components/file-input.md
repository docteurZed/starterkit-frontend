# FileInput

Le composant **FileInput** fournit un champ de sélection de fichiers stylisé, avec un label optionnel, un texte d’aide et un message d’erreur.
Il prend en charge la sélection unique ou multiple et affiche la liste des fichiers sélectionnés. Les mises à jour sont émises via `v-model`.

---

## Props

| Prop         | Type           | Default        | Description                                                          |
| ------------ | -------------- | -------------- | -------------------------------------------------------------------- |
| `id`         | String, Number | `'file-input'` | Identifiant unique du champ.                                         |
| `modelValue` | File, Array    | `null`         | Fichier sélectionné ou tableau de fichiers (utilisé avec `v-model`). |
| `label`      | String         | `''`           | Label affiché au-dessus du champ.                                    |
| `name`       | String         | `''`           | Attribut `name` du champ.                                            |
| `required`   | Boolean        | `false`        | Rend le champ obligatoire.                                           |
| `helperText` | String         | `''`           | Texte d’aide affiché sous le champ lorsqu’il n’y a pas d’erreur.     |
| `error`      | String         | `''`           | Message d’erreur affiché sous le champ (active les styles rouge).    |
| `multiple`   | Boolean        | `false`        | Permet de sélectionner plusieurs fichiers.                           |

---

## États visuels

| État       | Description                                           |
| ---------- | ----------------------------------------------------- |
| **Normal** | Bordures neutres + focus gris/zinc.                   |
| **Erreur** | Bordure rouge + focus rouge + message d’erreur rouge. |

Les styles sont définis via la propriété calculée `borderClasses`.

---

## Slots

Le composant **n’utilise pas de slot** : tout est rendu à partir des props.

---

## Utilisation

### Sélection d’un seul fichier

```vue
<FileInput v-model="document" label="Choisir un fichier" />
```

### Sélection multiple

```vue
<FileInput v-model="documents" label="Choisir plusieurs fichiers" multiple />
```

### Avec texte d’aide

```vue
<FileInput
    v-model="image"
    label="Télécharger une image"
    helperText="Formats acceptés : PNG, JPG, GIF"
/>
```

### Avec message d’erreur

```vue
<FileInput
    v-model="file"
    label="Fichier obligatoire"
    required
    error="Veuillez sélectionner un fichier."
/>
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le composant utilise `v-model` via l’événement `update:modelValue`.
    - Si `multiple` est activé, un tableau de fichiers est renvoyé ; sinon, le premier fichier sélectionné ou `null`.

- **Affichage des fichiers** :
    - Les fichiers sélectionnés sont listés sous le champ avec leurs noms.
