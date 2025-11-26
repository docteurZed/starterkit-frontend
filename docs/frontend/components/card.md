# Card

Le composant **Card** permet d’afficher un conteneur élégant avec un style cohérent : fond, bordures, ombres et arrondis.
Il est idéal pour structurer des sections de page, des panneaux d’information, des listes, ou des widgets.

Le composant gère automatiquement les sections **header**, **content** et **footer**, et applique un padding conditionnel basé sur la prop `setPadding`.

---

## Props

| Prop         | Type    | Default | Description                                                              |
| ------------ | ------- | ------- | ------------------------------------------------------------------------ |
| `setPadding` | Boolean | `true`  | Si `true`, applique un padding interne (`p-4`) sur le contenu principal. |

---

## Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `header`  | Zone d’en-tête du card (titre, actions, etc.) |
| `default` | Contenu principal du card                     |
| `footer`  | Zone de bas de page (boutons, infos, etc.)    |

---

## Utilisation

### Card simple

```vue
<Card>
  Contenu du card
</Card>
```

### Card avec en-tête

```vue
<Card>
  <template #header>
    Informations importantes
  </template>

  Voici le contenu du card.
</Card>
```

### Card avec footer

```vue
<Card>
  <template #footer>
    <Button variant="primary">Action</Button>
  </template>
</Card>
```

### Card complet avec header + content + footer

```vue
<Card>
  <template #header>
    Détails de l’utilisateur
  </template>

  <p>Nom : John Doe</p>
  <p>Email : john@example.com</p>

  <template #footer>
    <Button size="sm">Modifier</Button>
  </template>
</Card>
```

### Card sans padding intérieur

```vue
<Card :setPadding="false">
  <img src="/banner.jpg" class="w-full" />
</Card>
```

---

## Fonctionnement interne

- Le card est rendu comme un conteneur `div` avec style standardisé (bordure, fond, ombre).
- La présence des slots `header` ou `footer` détermine automatiquement l’affichage de ces sections.
- Le padding du contenu dépend entièrement de la prop `setPadding`.
