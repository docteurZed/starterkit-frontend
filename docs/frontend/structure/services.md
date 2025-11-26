# services/

Le dossier `services/` centralise **toutes les interactions avec le backend** ou d’autres API externes. Chaque fichier correspond à un domaine particulier.

### Structure générale

```text
services/
┗ backend.js       # Communication avec le backend (API)
```

### Détails

* **backend.js** : contient les fonctions et clients HTTP pour effectuer des requêtes vers le backend.
* **Exploitation** :

  * Importer les clients ou fonctions depuis `services/backend.js` pour effectuer vos appels API dans les composants, modules ou composables.
  * Les erreurs et réponses sont centralisées pour uniformiser la gestion des retours.

> Le but est d’avoir un point unique pour gérer toutes les communications avec le serveur, ce qui simplifie les modifications futures (URL, headers, authentification…).
