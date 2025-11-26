# Badge

Le composant **Badge** affiche un petit label ou indicateur coloré, typiquement utilisé pour signaler un statut ou une catégorie.  
La couleur du badge est définie par le **variant** et peut être personnalisée via les classes Tailwind générées dynamiquement.

---

## Props

| Prop      | Type   | Default     | Description                                                              |
| --------- | ------ | ----------- | ------------------------------------------------------------------------ |
| `variant` | String | `'neutral'` | Variant du badge, définit la couleur de fond via `generateColorClasses`. |

---

## Variants disponibles

| Variant     | Description              |
| ----------- | ------------------------ |
| `neutral`   | Couleur neutre (`zinc`)  |
| `primary`   | Principal                |
| `secondary` | Secondaire               |
| `success`   | Vert (succès)            |
| `danger`    | Rouge (erreur)           |
| `warning`   | Jaune (avertissement)    |
| `info`      | Bleu clair (information) |
| `light`     | Couleur claire           |
| `dark`      | Couleur sombre           |

---

## Slots / Classes

- **Slots disponibles** :
    - `default` : contenu du badge (texte, nombre, icône, etc.)

- Les classes CSS sont fusionnées avec les classes par défaut :  
  `text-sm font-medium px-2.5 py-0.5 rounded-sm text-white text-center`.

---

## Utilisation

```vue
<Badge>Badge</Badge>
<Badge variant="primary">Primaire</Badge>
<Badge variant="success">Succès</Badge>
```

---

## Fonctionnement interne

- `bgClasses` est un `computed` qui utilise `generateColorClasses(props.variant).bg` pour générer la couleur de fond dynamique.
- Le composant est réactif : la couleur du badge s’adapte automatiquement si le `variant` change.
