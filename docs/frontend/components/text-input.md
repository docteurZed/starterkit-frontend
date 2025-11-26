# TextInput

Le composant **TextInput** fournit un champ de saisie stylisé, accompagné d’un label optionnel, d’un helperText et d’un message d’erreur.
Il gère automatiquement les styles de bordures selon l’état (normal ou erreur) et émet les mises à jour via `v-model`.

---

## Props

| Prop          | Type           | Default        | Description                                                       |
| ------------- | -------------- | -------------- | ----------------------------------------------------------------- |
| `id`          | String, Number | `'text-input'` | Identifiant unique du champ.                                      |
| `modelValue`  | String, Number | `''`           | Valeur du champ (utilisé avec `v-model`).                         |
| `label`       | String         | `''`           | Label affiché au-dessus du champ.                                 |
| `type`        | String         | `'text'`       | Type du champ (`text`, `email`, `password`, `number`, etc.).      |
| `name`        | String         | `''`           | Attribut `name` du champ.                                         |
| `placeholder` | String         | `''`           | Texte indicatif affiché dans le champ.                            |
| `required`    | Boolean        | `false`        | Rend le champ obligatoire.                                        |
| `helperText`  | String         | `''`           | Texte d’aide affiché sous le champ lorsqu’il n’y a pas d’erreur.  |
| `error`       | String         | `''`           | Message d’erreur affiché sous le champ (active les styles rouge). |

---

## États visuels

| État       | Description                                           |
| ---------- | ----------------------------------------------------- |
| **Normal** | Bordures neutres + focus gris / zinc.                 |
| **Erreur** | Bordure rouge + focus rouge + message d’erreur rouge. |

Ces styles sont déterminés via la propriété calculée `borderClasses`.

---

## Slots

Le composant **n’utilise pas de slot** : tout est rendu à partir des props.

---

## Utilisation

### Champ simple

```vue
<TextInput v-model="email" label="Email" placeholder="Entrez votre email" />
```

### Champ requis

```vue
<TextInput v-model="username" label="Nom d'utilisateur" required />
```

### Avec texte d’aide

```vue
<TextInput v-model="phone" label="Téléphone" helperText="Incluez l'indicatif du pays." />
```

### Avec message d’erreur

```vue
<TextInput
    v-model="password"
    type="password"
    label="Mot de passe"
    error="Le mot de passe est trop court."
/>
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le champ utilise `v-model` via l’événement `update:modelValue`.
    - L’affichage des messages dépend de `helperText` et `error`.
