# layouts/

Le dossier `layouts/` contient les **layouts globaux** de l’application.
Chaque layout définit la **structure générale** de l’interface pour un type de module ou de page. Cela permet de **standardiser l’apparence** tout en gardant la possibilité de personnaliser chaque type de vue.

---

## Structure générale

```text
layouts/
┣ AdminLayout.vue
┣ AuthLayout.vue
┣ PublicLayout.vue
┣ ErrorLayout.vue
┗ index.js
```

* `index.js` : export centralisé des layouts pour simplifier les imports.

---

## Fichiers principaux

### 1. **AdminLayout.vue**

* Layout utilisé pour les modules **administratifs**.
* Permet de structurer toutes les pages du module `admin` de manière cohérente.

---

### 2. **AuthLayout.vue**

* Layout pour les pages **d’authentification**.
* Sépare visuellement le module auth du reste de l’application.

---

### 3. **PublicLayout.vue**

* Layout pour le **contenu public** de l’application.
* Adapté aux pages comme `Home`, `About`, etc.

---

### 4. **ErrorLayout.vue**

* Layout pour les **pages d’erreur** (404, 500…).
* Contient un design simplifié pour afficher les messages d’erreur.
* Permet de conserver une structure propre même sur les pages exceptionnelles.

---

## Principes de conception

* **Séparation claire des responsabilités** : chaque layout correspond à un type de module ou page.
* **Réutilisabilité** : les composants comme Navbar, Sidebar ou Footer peuvent être importés dans plusieurs layouts.
* **Export centralisé** via `index.js` pour simplifier les imports dans le router ou les modules :

```js
import { AdminLayout, AuthLayout, PublicLayout, ErrorLayout } from '@/layouts'
```