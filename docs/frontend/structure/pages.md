# pages/

Le dossier `pages/` contient **toutes les pages globales du projet**, hors modules. Chaque page représente une vue complète de l’application.

### Structure générale

```text
pages/
┣ error/
┃ ┣ NotFound.vue      # Composant pour les pages 404
┃ ┗ index.js          # Export des pages du dossier error
┗ index.js            # Export centralisé de toutes les pages globales
```

### Détails

* **error/** : contient les pages liées aux erreurs (ex. `NotFound.vue`).
* **index.js** : exporte toutes les pages pour pouvoir les utiliser facilement ailleurs dans le projet.

> Chaque page est un composant Vue complet et peut contenir ses propres **composants internes**, **sections**, **services** et **stores** si nécessaire, mais dans `pages/` global, elles sont surtout utilisées pour des cas particuliers (erreurs ou pages système).
