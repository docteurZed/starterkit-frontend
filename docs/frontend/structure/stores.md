# stores/

Le dossier `stores/` contient **les états globaux partagés** de l’application, généralement avec Pinia. Chaque store correspond à un domaine de l’état global.

### Structure générale

```text
stores/
┗ config.js       # Store pour la configuration globale de l’application
```

### Détails

* **config.js** : stocke les informations globales comme le nom de l’application, la langue, ou d’autres paramètres partagés.
* **Exploitation** :

  * Importer et utiliser le store dans les composants ou composables pour accéder ou modifier l’état global.
  * Permet de centraliser la logique de mise à jour de la configuration côté client et côté backend.

> Les stores servent à maintenir une **source unique de vérité** pour les données globales et facilitent la synchronisation entre les composants.
