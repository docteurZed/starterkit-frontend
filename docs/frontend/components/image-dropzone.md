# ImageDropzone

Le composant **ImageDropzone** fournit une zone de dépôt de fichiers avec prévisualisation des images.
Il prend en charge le drag & drop, le clic pour ouvrir la boîte de dialogue de fichiers, et affiche un aperçu de l’image sélectionnée. Les mises à jour sont émises via `v-model`.

---

## Props

| Prop         | Type       | Default           | Description                                                                           |
| ------------ | ---------- | ----------------- | ------------------------------------------------------------------------------------- |
| `id`         | String     | `'dropzone-file'` | Identifiant unique du champ.                                                          |
| `modelValue` | File, null | `null`            | Fichier sélectionné (utilisé avec `v-model`).                                         |
| `label`      | String     | `''`              | Label affiché au-dessus de la zone de dépôt.                                          |
| `helperText` | String     | `'PNG, JPG, GIF'` | Texte d’aide affiché à l’intérieur de la zone lorsqu’aucune image n’est sélectionnée. |
| `error`      | String     | `''`              | Message d’erreur affiché sous la zone (active les styles rouge).                      |

---

## États visuels

| État       | Description                                           |
| ---------- | ----------------------------------------------------- |
| **Normal** | Bordures neutres + focus par défaut.                  |
| **Erreur** | Bordure rouge + focus rouge + message d’erreur rouge. |

---

## Slots

Le composant **n’utilise pas de slot** : tout est rendu à partir des props.

---

## Utilisation

### Zone de dépôt simple

```vue
<ImageDropzone v-model="imageFile" helperText="Déposez votre image ici" />
```

### Avec label

```vue
<ImageDropzone v-model="profileImage" label="Photo de profil" helperText="PNG, JPG ou JPEG" />
```

### Avec message d’erreur

```vue
<ImageDropzone
    v-model="bannerImage"
    label="Bannière"
    error="Veuillez sélectionner une image valide"
/>
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le composant utilise `v-model` via l’événement `update:modelValue`.
    - Lorsque `modelValue` change, une URL d’aperçu est générée automatiquement si le fichier est une image.

- **Drag & Drop** :
    - Le composant gère `dragover` et `drop` pour permettre le glisser-déposer d’un fichier.

- **Clic pour sélectionner un fichier** :
    - L’utilisateur peut cliquer sur la zone pour ouvrir la boîte de dialogue de fichiers.

- **Prévisualisation** :
    - Si une image est sélectionnée, elle est affichée en `object-contain` dans la zone.
    - Sinon, le `helperText` et l’icône par défaut sont affichés.
