# Select

Le composant **Select** fournit un champ de sélection stylisé avec options filtrables et label optionnel.
Il prend en charge le clic pour ouvrir le menu, le filtre des options, la sélection et l’émission via `v-model`.

---

## Props

| Prop          | Type           | Default                        | Description                                                       |
| ------------- | -------------- | ------------------------------ | ----------------------------------------------------------------- |
| `id`          | String, Number | `'select'`                     | Identifiant unique du champ.                                      |
| `modelValue`  | String, Number | `null`                         | Valeur actuellement sélectionnée (utilisé avec `v-model`).        |
| `name`        | String         | `''`                           | Attribut `name` du champ pour formulaire.                         |
| `label`       | String         | `''`                           | Label affiché au-dessus du champ.                                 |
| `placeholder` | String         | `'Sélectionnez une option...'` | Texte indicatif affiché lorsqu’aucune option n’est sélectionnée.  |
| `filterable`  | Boolean        | `false`                        | Active la barre de recherche pour filtrer les options.            |
| `helperText`  | String         | `''`                           | Texte d’aide affiché sous le champ lorsqu’il n’y a pas d’erreur.  |
| `error`       | String         | `''`                           | Message d’erreur affiché sous le champ (active les styles rouge). |
| `options`     | Array          | `[]`                           | Liste des options `{ value, label }` à afficher.                  |

---

## États visuels

| État         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| **Normal**   | Bordure neutre + focus gris/zinc.                                                     |
| **Erreur**   | Bordure rouge + message d’erreur rouge.                                               |
| **Ouvert**   | Affiche la liste des options sous le champ.                                           |
| **Filtrage** | Affiche uniquement les options correspondant au texte de recherche (si `filterable`). |

---

## Slots

Le composant **n’utilise pas de slot** : tout est rendu à partir des props.

---

## Utilisation

### Sélecteur simple

```vue
<Select
    v-model="selectedOption"
    label="Choisissez une option"
    :options="[
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
    ]"
/>
```

### Sélecteur filtrable

```vue
<Select v-model="selectedItem" label="Recherche" filterable :options="items" />
```

### Sélecteur avec message d’erreur

```vue
<Select v-model="country" label="Pays" :options="countries" error="Veuillez sélectionner un pays" />
```

---

## Fonctionnement interne

- **Réactivité** :
    - Utilise `v-model` via `update:modelValue`.
    - `selectedLabel` est mis à jour automatiquement en fonction de `modelValue`.

- **Ouverture/Fermeture** :
    - Clic sur le champ pour basculer l’ouverture (`isOpen`).
    - Fermeture automatique si clic en dehors du composant (`handleClickOutside`).

- **Filtrage des options** :
    - Si `filterable` est activé, les options sont filtrées en temps réel selon la saisie dans le champ de recherche.
