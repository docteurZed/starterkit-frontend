# composables/

Le dossier `composables/` contient **toutes les fonctions réutilisables** (composables Vue 3) permettant de centraliser la logique métier ou UI partagée entre les composants.
L’objectif est de garder les composants **propres, légers et découplés**, tout en facilitant la maintenance et l’extension du Starter Kit.

---

## Structure générale

```text
composables/
┣ general/
┣ theme/
┣ ui/
┗ index.js
```

* `index.js` : export centralisé de tous les composables pour simplifier les imports.

---

## Sous-dossiers principaux

### 1. **general/**

Contient les composables **génériques** qui peuvent être utilisés partout dans l’application :

* `usePagination.js` : gestion de la pagination pour les listes et tables

---

### 2. **theme/**

Composables liés spécifiquement à la gestion du **thème global** :

* `useTheme.js` : applique le thème, synchronise les préférences utilisateur et système, déclenche les classes Tailwind pour le mode sombre / clair

---

### 3. **ui/**

Composables liés à la logique des **éléments d’interface utilisateur** :

* `useToast.js` et `toastManager.js` : gestion des notifications Toast
* `useDialog.js` : gestion des modales et dialogues
* `useDrawer.js` : gestion des tiroirs (drawer)
* `useDropdown.js` : gestion des menus déroulants
* `useModal.js` : logique pour les modales
* `useVariant.js` : gestion des variantes pour les composants UI

Chaque composable encapsule la logique spécifique et permet de **déléguer le comportement complexe hors des composants**.

---

## Principes de conception

* **Séparation claire de la logique** : la logique UI et métier est isolée des composants.
* **Réutilisabilité** : chaque composable peut être importé et utilisé dans n’importe quel composant ou module.
* **Exports centralisés** : grâce à `index.js`, tous les composables sont accessibles via :

```js
import { useToast, useDrawer, usePagination } from '@/composables'
```

* **Extensible** : facile d’ajouter de nouveaux composables pour de nouvelles fonctionnalités.