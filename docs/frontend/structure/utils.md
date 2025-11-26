# Utils (`utils/`)

Le dossier `utils/` contient **des fonctions utilitaires et helpers** qui sont utilisées dans toute l’application. Ces fonctions permettent de centraliser la logique récurrente et d’éviter les duplications.

### Structure générale

```text
utils/
┣ ui/
┃ ┣ sizes.js                  # Contient les tailles standardisées pour composants
┃ ┗ variants.js               # Contient les variantes réutilisables pour les composants UI
┗ index.js                     # Point d’export centralisé pour toutes les fonctions utilitaires
```

### Détails

* **ui/sizes.js** : contient les valeurs standard pour les tailles (petit, moyen, grand…) utilisées dans les composants UI.
* **ui/variants.js** : définit des variantes de composants (ex. boutons, badges) pour uniformiser le style.
* **index.js** : exporte tous les helpers pour simplifier l’importation dans les composants, modules ou composables.

### Exploitation

* Importer directement les fonctions depuis `utils/` ou `utils/ui/` dans vos composants ou composables.
* Permet d’avoir une **logique UI cohérente** et centralisée, facilement réutilisable et maintenable.

> Le dossier `utils/` est la base pour la création de composants modulaires et flexibles, car il fournit des helpers pour couleurs, tailles et variantes.
