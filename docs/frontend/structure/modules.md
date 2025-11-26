# modules/

Le dossier `modules/` contient tous les **modules fonctionnels** de l’application.
Chaque module correspond à un **domaine métier** et suit une structure similaire pour faciliter la maintenance et l’évolution.

---

## Structure générale d’un module

```text
modules/
┣ <module-name>/
┃ ┣ components/       # Composants internes spécifiques au module
┃ ┣ pages/            # Pages principales du module
┃ ┗ index.js          # Export centralisé du module
```

* **components/** : contient tous les composants réutilisables **uniquement** à l’intérieur du module.
  Exemple : Navbar, Sidebar, Layouts spécifiques au module.

* **pages/** : contient toutes les pages du module. Chaque page est autonome et peut avoir sa propre organisation interne.

* **index.js** : fichier d’export centralisé pour faciliter l’importation du module dans d’autres parties de l’application.

---

## Structure générale d’une page dans un module

```text
pages/
┣ <page-name>/
┃ ┣ pages/            # Composant Vue principal de la page
┃ ┣ components/       # Composants spécifiques à cette page
┃ ┣ sections/         # Sections modulaires ou sous-composants de la page
┃ ┣ services/         # Services ou appels API spécifiques à cette page
┃ ┗ store/            # Store Pinia dédié (si nécessaire)
```

* **pages/** : le composant Vue principal représentant la page.
* **components/** : composants propres à cette page, réutilisables uniquement ici.
* **sections/** : sous-composants modulaires de la page (ex : formulaires, tableaux, blocs de contenu).
* **services/** : fonctions pour gérer les appels API ou la logique métier spécifique à la page.
* **store/** : store Pinia pour gérer l’état local de la page, si nécessaire.

---

## Principes clés

1. **Encapsulation** : chaque page et module est autonome et gère ses propres dépendances.
2. **Modularité** : les composants, sections, services et stores sont organisés pour éviter la duplication.
3. **Clarté** : chaque page a tout ce dont elle a besoin au même endroit pour faciliter le développement et le debug.
4. **Réutilisabilité** : les composants très génériques restent dans `components/` global, tandis que les composants spécifiques restent dans le module ou la page.