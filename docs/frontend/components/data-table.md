# DataTable

Le composant **DataTable** fournit un tableau réactif complet avec :

- Recherche (`searchable`)
- Tri (`sortable`)
- Pagination
- Slots pour personnaliser l’en-tête et les lignes
- Affichage d’un message quand il n’y a pas de résultats

Il s’appuie sur plusieurs sous-composants : `DataTableRow`, `DataTableCell`, `DataTableCellHeader`, `DataTableEmpty`, `DataTablePagination`, `DataTableSearch`.

---

## Props

| Prop             | Type    | Default        | Description                                         |
| ---------------- | ------- | -------------- | --------------------------------------------------- |
| `rows`           | Array   | **requis**     | Tableau de données à afficher                       |
| `searchable`     | Boolean | true           | Affiche un champ de recherche en haut du tableau    |
| `perPageOptions` | Array   | `[10, 25, 50]` | Options pour le nombre de lignes affichées par page |

---

## Slots

| Slot    | Description                                                                          |
| ------- | ------------------------------------------------------------------------------------ |
| `thead` | Personnalisation de l’en-tête du tableau                                             |
| `tbody` | Personnalisation des lignes du tableau, reçoit `rows` (après filtrage et pagination) |

---

## Sous-composants

### DataTableRow

Représente une ligne du tableau.

| Prop       | Type    | Default | Description                         |
| ---------- | ------- | ------- | ----------------------------------- |
| `isHeader` | Boolean | false   | Applique le style d’en-tête si vrai |

---

### DataTableCell

Représente une cellule du tableau.
Slot uniquement.

```vue
<DataTableCell>{{ row.name }}</DataTableCell>
```

---

### DataTableCellHeader

Cellule d’en-tête avec tri optionnel.

| Prop        | Type    | Default | Description                               |
| ----------- | ------- | ------- | ----------------------------------------- |
| `label`     | String  | ''      | Texte affiché dans la cellule             |
| `sortable`  | Boolean | false   | Permet de trier la colonne si vrai        |
| `columnKey` | String  | null    | Clé utilisée pour le tri dans les données |

Affiche des icônes de tri automatiquement selon l’état : ascendant / descendant / non trié.

---

### DataTableEmpty

Affiche un message quand aucune donnée n’est trouvée.

| Prop      | Type   | Default                    | Description                |
| --------- | ------ | -------------------------- | -------------------------- |
| `message` | String | "Pas de résultats trouvés" | Message affiché quand vide |

---

### DataTablePagination

Gestion de la pagination avec boutons “Précédent”, “Suivant” et sélection du nombre de lignes par page.

| Prop             | Type   | Default        | Description                           |
| ---------------- | ------ | -------------- | ------------------------------------- |
| `totalRows`      | Number | **requis**     | Nombre total de lignes disponibles    |
| `perPageOptions` | Array  | `[10, 25, 50]` | Options pour le nombre de lignes/page |
| `modelValue`     | Number | 1              | Page courante                         |
| `perPage`        | Number | 10             | Nombre de lignes affichées par page   |

---

### DataTableSearch

Champ de recherche intégré pour filtrer les lignes par contenu si `searchable=true`.
Utilisé en interne par `DataTable`.

---

## Exemple d’utilisation

```vue
<DataTable :rows="users">
  <template #thead>
    <DataTableRow :is-header="true">
      <DataTableCellHeader label="#" sortable columnKey="id" />
      <DataTableCellHeader label="Nom" sortable columnKey="name" />
      <DataTableCellHeader label="Email" sortable columnKey="email" />
      <DataTableCellHeader label="Rôle" columnKey="role" />
      <DataTableCellHeader label="Action" />
    </DataTableRow>
  </template>

  <template #tbody="{ rows }">
    <DataTableRow v-for="(u, index) in rows" :key="index">
      <DataTableCell>{{ u.id }}</DataTableCell>
      <DataTableCell>{{ u.name }}</DataTableCell>
      <DataTableCell>{{ u.email }}</DataTableCell>
      <DataTableCell>{{ u.role }}</DataTableCell>
      <DataTableCell> </DataTableCell>
    </DataTableRow>
  </template>
</DataTable>
```

---

## Fonctionnement interne

1. **Recherche** : Filtre les lignes via `search` si `searchable=true`.
2. **Tri** :
    - Cliquer sur une `DataTableCellHeader` triable change `sortColumn` et `sortAsc`.
    - Les lignes sont triées automatiquement.
