# Breadcrumb

Le composant **Breadcrumb** affiche une **navigation hiérarchique** permettant à l’utilisateur de savoir où il se situe dans l’application et de naviguer facilement vers les niveaux supérieurs. Chaque élément peut être un lien ou un texte représentant la page actuelle. Le composant gère l’affichage du **premier élément avec l’icône Home**, les séparateurs (`ChevronRight`) et le dernier élément comme **élément courant**.

---

## Props

| Prop         | Type    | Default | Description                                                                      |
| ------------ | ------- | ------- | -------------------------------------------------------------------------------- |
| `items`      | Array   | `[]`    | Liste des éléments du breadcrumb. Chaque élément est un objet `{ label, href }`. |
| `lightColor` | Boolean | `false` | Définit si le breadcrumb utilise un style clair (pour fond sombre).              |

---

## Slots / Classes

* **Slots disponibles** :

  * `default` : Aucun slot spécifique ; le contenu est généré automatiquement à partir de la prop `items`.

* Les classes CSS de base sont fusionnées avec les classes dynamiques appliquant la taille, la couleur et l’alignement selon la prop `lightColor` et la direction RTL.

---

## Utilisation

```vue
<script setup>
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Produits', href: '/produits' },
  { label: 'Chaussures', href: '/produits/chaussures' }
]
</script>

<Breadcrumb :items="breadcrumbItems" :lightColor="false" />
```

---

## Fonctionnement interne

* **Premier élément** : toujours affiché avec l’icône `Home`.
* **Séparateurs** : le composant insère un `ChevronRight` entre chaque élément.
* **Dernier élément** : affiché en texte simple et marqué avec `aria-current="page"`.
* **Réactivité** : le composant s’adapte dynamiquement aux props `items` et `lightColor`.
