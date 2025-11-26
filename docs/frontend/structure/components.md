# components/

Le dossier `components/` contient **tous les composants Vue réutilisables** du Starter Kit.
Chaque composant est organisé par **catégorie fonctionnelle**, facilitant la découverte et l’extension du projet.

---

## Structure générale

```text
components/
┣ brand/
┣ form/
┣ table/
┣ theme/
┣ ui/
┗ index.js
```

* `index.js` : exporte tous les composants globaux pour simplifier les imports.

---

## Sous-dossiers principaux

### 1. **brand/**

Contient les composants liés à l’identité visuelle de l’application, par exemple :

* `AppLogo.vue`
* `index.js` pour centraliser l’export

---

### 2. **form/**

Organise tous les composants liés aux formulaires :

* **choice/** : checkbox, radio, select, switch
* **input/** : text-input, password-input, textarea, search-input, file-input, image-dropzone
* **form-wrapper/** : composants enveloppant des formulaires

Chaque composant possède :

* un fichier `.vue`
* un fichier `*.props.js` pour les props
* éventuellement `variants.js` ou `classes.js` pour les styles dynamiques
* un `index.js` pour l’export centralisé

---

### 3. **table/**

Système de **data table modulaire**, comprenant :

* lignes, cellules, pagination, recherche, état vide
* export centralisé via `index.js`

---

### 4. **theme/**

Composants et outils pour **la gestion du thème global** :

* `ThemeSwitcher.vue`
* `index.js`

---

### 5. **ui/**

Composants UI généraux :

* Alert, Avatar, Badge, Breadcrumb, Button, Card, Dialog, Drawer, Dropdown, Modal, Toast, Media Icons…
* Chaque composant a son propre sous-dossier avec props, variantes, fichier `.vue` et `index.js`
* Export centralisé pour simplifier l’import dans le projet

---

## Principes de conception

* **Séparation fonctionnelle** : chaque catégorie regroupe un type de composants similaire.
* **Composants autonomes** : chaque composant peut être utilisé seul ou intégré dans un layout/module.
* **Exports centralisés** : tous les sous-dossiers possèdent un `index.js` pour simplifier l’import :

```js
import { AppLogo, Button, Alert } from '@/components'
```

* **Scalabilité** : la structure permet d’ajouter de nouveaux composants sans casser la hiérarchie.