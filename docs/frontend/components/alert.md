# Alert

Le composant **Alert** affiche un message d’alerte avec **icône**, **texte** et **bordure colorée**.
Le composant supporte différents **variants** et peut être **dismissible**.
Les classes CSS par défaut peuvent être **surchargées** depuis le parent.

---

## Props

| Prop          | Type    | Default     | Description                                                                      |
| ------------- | ------- | ----------- | -------------------------------------------------------------------------------- |
| `variant`     | String  | `'neutral'` | Variant de l'alerte, définit les couleurs du texte, de la bordure et de l’icône. |
| `dismissible` | Boolean | `false`     | Si `true`, affiche un bouton pour fermer l'alerte.                               |

---

## Variants disponibles

| Variant     | Description                    |
| ----------- | ------------------------------ |
| `neutral`   | Alerte neutre                  |
| `primary`   | Alerte d’importance principale |
| `secondary` | Variante secondaire            |
| `tertiary`  | Variante tertiaire             |
| `success`   | Succès                         |
| `error`     | Erreur                         |
| `info`      | Information                    |
| `warning`   | Avertissement                  |

---

## Slots / Classes

- Slots disponibles :
    - `title` : titre de l'alerte
    - `description` : description détaillée

- Les classes CSS sont fusionnées avec les classes par défaut du composant.

---

## Utilisation

### Alerte simple

```vue
<Alert variant="success" />
<Alert variant="info" dismissible />
```

### Avec slots personnalisés

```vue
<Alert variant="warning" dismissible>
  <template #title>Attention !</template>
  <template #description>Ceci est un avertissement important.</template>
</Alert>
```

---

## Fonctionnement

- Les couleurs et l’icône sont définies via **`alertVariants`**, qui mappe chaque `variant` sur les classes CSS et l’icône correspondante.
- Réactif : le composant met automatiquement à jour son affichage si le `variant` change.
- Le bouton de fermeture (`dismissible`) modifie la propriété interne `isVisible` pour masquer l'alerte.
- Supporte **surcharges de style** via l’attribut `class` depuis le parent.
