# CardImage

Le composant **CardImage** est une variante du composant Card qui intègre une image, positionnable sur les **quatre côtés** : `top`, `bottom`, `left`, ou `right`.
Il permet de créer des cartes visuelles élégantes comme des aperçus d’articles, des fiches produits ou des cartes informatives.

Le layout change dynamiquement selon la prop `imagePosition`, et l’image bénéficie d’un léger effet d’agrandissement au survol.

---

## Props

| Prop            | Type   | Default        | Description                                             |
| --------------- | ------ | -------------- | ------------------------------------------------------- |
| `imageSrc`      | String | **(required)** | Source de l’image affichée dans la card.                |
| `imageAlt`      | String | `'Image'`      | Texte alternatif de l’image.                            |
| `imagePosition` | String | `'top'`        | Position de l’image : `top`, `bottom`, `left`, `right`. |

---

## Positions disponibles

| Position | Effet                                                     |
| -------- | --------------------------------------------------------- |
| `top`    | L’image se place au-dessus du contenu, en pleine largeur. |
| `bottom` | L’image se place en bas du card, en pleine largeur.       |
| `left`   | L’image se place à gauche, avec largeur fixe (`w-40`).    |
| `right`  | L’image se place à droite, avec largeur fixe (`w-40`).    |

---

## Structure et classes

Le composant applique automatiquement :

* Image avec animation :

  * `transition-transform duration-300 ease-in-out group-hover:scale-102`
* Sections :

  * `header` avec `border-b`,
  * `footer` avec `border-t`,
  * contenu central toujours actif

---

## Slots

| Slot      | Description                                               |
| --------- | --------------------------------------------------------- |
| `header`  | Zone d’en-tête : titre, sous-titre ou actions.            |
| `default` | Contenu principal du card (texte, paragraphe, etc.).      |
| `footer`  | Zone basse du card : boutons, actions, infos secondaires. |

---

## Utilisation

### CardImage simple

```vue
<CardImage imageSrc="/img/product.jpg">
  Description du produit…
</CardImage>
```

### Image en haut (par défaut)

```vue
<CardImage
  imageSrc="/img/banner.jpg"
  imageAlt="Bannière"
>
  <template #header>
    Bienvenue
  </template>

  Texte de présentation.
</CardImage>
```

### Image à gauche

```vue
<CardImage
  imageSrc="/img/profile.jpg"
  imagePosition="left"
>
  <template #header>
    Profil
  </template>

  <p>Informations sur l’utilisateur.</p>
</CardImage>
```

### Image à droite + footer

```vue
<CardImage
  imageSrc="/img/item.jpg"
  imagePosition="right"
>
  <template #footer>
    <Button size="sm">Détails</Button>
  </template>
</CardImage>
```

### Image en bas

```vue
<CardImage
  imageSrc="/img/footer.jpg"
  imagePosition="bottom"
>
  Contenu du card avec image en bas.
</CardImage>
```

---

## Fonctionnement interne

* L’image est affichée avant ou après le contenu selon la position.
* Une animation de **zoom léger au hover** est appliquée grâce à `group-hover:scale-102`.
* Le card conserve la même architecture que `Card` : `header`, `content`, `footer`.
