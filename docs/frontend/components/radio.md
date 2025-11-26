# Radio

Le composant **Radio** fournit un bouton radio stylisé avec un label optionnel.
Il gère la sélection via `v-model` et émet automatiquement la valeur sélectionnée.

---

## Props

| Prop         | Type                    | Default    | Description                                             |
| ------------ | ----------------------- | ---------- | ------------------------------------------------------- |
| `id`         | String, Number          | `'radio'`  | Identifiant unique du champ.                            |
| `modelValue` | String, Number, Boolean | `null`     | Valeur actuelle sélectionnée (utilisé avec `v-model`).  |
| `label`      | String                  | `''`       | Texte affiché à côté du bouton radio.                   |
| `name`       | String                  | `''`       | Attribut `name` du bouton radio, identifiant le groupe. |
| `value`      | String, Number, Boolean | **requis** | Valeur associée à ce bouton radio.                      |
| `disabled`   | Boolean                 | `false`    | Désactive la sélection si vrai.                         |

---

## États visuels

| État            | Description                                              |
| --------------- | -------------------------------------------------------- |
| **Normal**      | Bouton décoché avec bordure neutre.                      |
| **Sélectionné** | Bouton rempli lorsque `modelValue` correspond à `value`. |
| **Désactivé**   | Bouton grisé et non interactif si `disabled` est vrai.   |

Le style inclut un focus stylisé avec `ring` et supporte le mode sombre.

---

## Slots

Le composant **n’utilise pas de slot** : tout est rendu à partir des props.

---

## Utilisation

### Bouton radio simple

```vue
<Radio v-model="selectedOption" value="option1" label="Option 1" />
<Radio v-model="selectedOption" value="option2" label="Option 2" />
```

### Bouton radio désactivé

```vue
<Radio v-model="selectedOption" value="option3" label="Option 3" disabled />
```

### Groupe de boutons radio

```vue
<Radio v-model="color" value="red" label="Rouge" name="colors" />
<Radio v-model="color" value="blue" label="Bleu" name="colors" />
<Radio v-model="color" value="green" label="Vert" name="colors" />
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le composant utilise `v-model` via l’événement `update:modelValue`.
    - La fonction interne `select` émet `value` uniquement si le bouton n’est pas désactivé.
