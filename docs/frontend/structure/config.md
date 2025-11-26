# config/

Le dossier `config/` contient les **fichiers de configuration globale** du frontend.
Ces fichiers centralisent les paramètres qui peuvent être utilisés **partout dans l’application**, permettant une modification facile des valeurs sans toucher aux composants ou aux modules.

---

## Structure générale

```text
config/
┣ app.js
┗ backend.js
```

* `index.js` (optionnel) : peut être utilisé pour regrouper et exporter toutes les configs.

---

## Fichiers principaux

### 1. **app.js**

Contient la **configuration de l’application** elle-même :

```js
// Exemple d'utilisation
import appConfig from '@/config/app'
console.log(appConfig.name)
```

---

### 2. **backend.js**

Contient la configuration du **backend** :

```js
// Exemple d'utilisation
import backendConfig from '@/config/backend'
fetch(`${backendConfig.backendUrl}/api/users`)
```

---

## 🔹 Principes de conception

* **Centralisation** : tous les paramètres globaux sont regroupés dans `config/`.
* **Flexibilité** : facile à modifier via `.env` ou directement dans les fichiers JS.
* **Réutilisabilité** : accessible dans tous les modules, composables ou services.