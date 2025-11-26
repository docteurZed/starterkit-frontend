# SearchInput

Le composant **SearchInput** fournit un champ de recherche stylisé avec une icône intégrée, un label optionnel et un message d’erreur.
Il émet automatiquement les mises à jour via `v-model` ainsi qu’un événement `search` à chaque saisie, pratique pour filtrer des listes en temps réel.

---

## Props

| Prop          | Type           | Default           | Description                                                       |
| ------------- | -------------- | ----------------- | ----------------------------------------------------------------- |
| `id`          | String, Number | `'search-input'`  | Identifiant unique du champ.                                      |
| `modelValue`  | String         | `''`              | Valeur du champ (utilisé avec `v-model`).                         |
| `label`       | String         | `''`              | Label affiché au-dessus du champ.                                 |
| `name`        | String         | `''`              | Attribut `name` du champ.                                         |
| `placeholder` | String         | `'Rechercher...'` | Texte indicatif affiché dans le champ.                            |
| `required`    | Boolean        | `false`           | Rend le champ obligatoire.                                        |
| `error`       | String         | `''`              | Message d’erreur affiché sous le champ (active les styles rouge). |

---

## États visuels

| État       | Description                                           |
| ---------- | ----------------------------------------------------- |
| **Normal** | Bordures neutres + focus gris / défaut.               |
| **Erreur** | Bordure rouge + focus rouge + message d’erreur rouge. |

Les styles sont gérés via la propriété calculée `borderClasses`.

---

## Événements

| Événement           | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `update:modelValue` | Émis lors d’une saisie, met à jour la valeur pour `v-model`.      |
| `search`            | Émis à chaque saisie, pratique pour lancer un filtrage en direct. |

Les deux événements sont déclenchés dans la méthode interne `handleInput`.

---

## Slots

Le composant **n’utilise pas de slot** : tout est généré automatiquement.

---

## Utilisation

### Champ de recherche simple

```vue
<SearchInput v-model="query" />
```

### Champ avec label

```vue
<SearchInput v-model="query" label="Recherche" placeholder="Tapez un mot-clé..." />
```

### Détection instantanée de la recherche

```vue
<SearchInput v-model="query" @search="filterItems" />
```

### Avec message d’erreur

```vue
<SearchInput v-model="query" label="Rechercher" error="Ce champ est requis." />
```

---

## Fonctionnement interne

- **Icône de recherche**
  Le composant affiche une icône `Search` de `lucide-vue-next` à gauche du champ (position absolute).

- **Réactivité** :
    - L’événement `update:modelValue` met à jour la valeur liée au `v-model`.
    - L’événement `search` permet une recherche dynamique en temps réel.
