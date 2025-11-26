# router/

Le dossier `router/` gère **toutes les routes du frontend**, modulaires et globales.

### Structure générale

```text
router/
┣ index.js            # Fichier principal fusionnant toutes les routes
┣ _admin.js           # Routes du module admin
┣ _auth.js            # Routes du module auth
┣ _public.js          # Routes du module public
┗ _error.js           # Routes globales pour les erreurs
```

### Détails

* **index.js** : centralise et fusionne toutes les routes pour l’injection dans le VueRouter.
* **_admin.js / _auth.js / _public.js** : chaque module gère ses propres routes dans son fichier dédié.
* **_error.js** : routes pour les pages globales d’erreur, comme 404.

### Principes clés

1. **Modularité** : chaque module gère ses routes séparément.
2. **Fusion centralisée** : le fichier `index.js` crée une route globale à partir de tous les modules.
3. **Séparation des responsabilités** : les routes globales et celles des modules ne se mélangent pas.
4. **Extensible** : ajouter une page ou un module implique simplement de créer ses routes et de les importer dans `router/index.js`.
