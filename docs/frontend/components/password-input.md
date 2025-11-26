# PasswordInput

Le composant **PasswordInput** est une évolution du `TextInput` spécialisée pour les champs de mot de passe.
Il propose :

- Une **icône pour afficher/masquer le mot de passe** (`Eye` / `EyeOff`)
- Une **gestion d’erreur** identique à `TextInput`
- Un **v-model synchronisé** avec une valeur interne
- Une option facultative **"Mot de passe oublié ?"**, reliée à une route

---

## Props

| Prop                 | Type           | Default            | Description                                              |
| -------------------- | -------------- | ------------------ | -------------------------------------------------------- |
| `id`                 | String, Number | `'password-input'` | Identifiant du champ.                                    |
| `modelValue`         | String         | `''`               | Valeur du champ (utilisé avec `v-model`).                |
| `label`              | String         | `''`               | Label du champ.                                          |
| `name`               | String         | `''`               | Attribut `name` du champ.                                |
| `placeholder`        | String         | `''`               | Placeholder affiché dans le champ.                       |
| `required`           | Boolean        | `false`            | Rend le champ obligatoire.                               |
| `helperText`         | String         | `''`               | Texte d’aide (s'affiche uniquement si aucune erreur).    |
| `error`              | String         | `''`               | Message d’erreur (active le style rouge).                |
| `showToggle`         | Boolean        | `true`             | Affiche ou masque l’icône de visibilité du mot de passe. |
| `forgotPassword`     | Boolean        | `false`            | Affiche le lien “Mot de passe oublié ?”.                 |
| `forgotPasswordLink` | String, Object | `'/'`              |                                                          |

---

## Fonctionnalités

| Fonction                             | Description                                                |
| ------------------------------------ | ---------------------------------------------------------- |
| **Afficher/Masquer le mot de passe** | Géré via `showPassword` et changé avec un bouton toggle.   |
| **Gestion d’erreur**                 | Styles rouges + message d'erreur.                          |
| **Valeur interne**                   | `localValue` permet de synchroniser proprement le v-model. |
| **Animation**                        | L’icône bascule avec une transition `fade`.                |

---

## Slots

Aucun slot n’est utilisé.
Le composant rend tout son contenu à partir des props.

---

## Utilisation

### Champ mot de passe simple

```vue
<PasswordInput v-model="password" label="Mot de passe" />
```

### Toggle visible/invisible désactivé

```vue
<PasswordInput v-model="password" label="Mot de passe" :showToggle="false" />
```

### Avec lien “Mot de passe oublié ?”

```vue
<PasswordInput
    v-model="password"
    label="Mot de passe"
    forgotPassword
    :forgotPasswordLink="{ name: 'forgot' }"
/>
```

### Avec gestion d’erreur

```vue
<PasswordInput v-model="password" label="Mot de passe" error="Mot de passe incorrect." />
```

### Avec texte d’aide

```vue
<PasswordInput
    v-model="password"
    label="Mot de passe"
    helperText="Doit contenir au moins 8 caractères."
/>
```

---

## Fonctionnement interne

- **Icônes dynamiques** :
    - Affichage conditionnel entre `Eye` et `EyeOff`.
    - Transition `fade` pour une animation douce.
