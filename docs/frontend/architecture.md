# Architecture

Cette section décrit l’architecture globale du répertoire `src/` afin de comprendre comment le Starter Kit est organisé, comment les fichiers interagissent et comment étendre proprement le projet.

L’objectif est de garantir une structure cohérente, scalable et facile à maintenir.

---

# Structure générale du dossier `src/`

```

src/
┣ assets/
┣ components/
┣ composables/
┣ config/
┣ layouts/
┣ modules/
┣ pages/
┣ router/
┣ services/
┣ stores/
┣ utils/
┣ App.vue
┗ main.js

```

Chaque dossier a un rôle bien défini, détaillé ci-dessous.

---

## 1. **assets/**
Contient les fichiers statiques globaux :  
- images  
- polices  
- CSS global (`main.css`)

---

## 2. **components/**
Tous les composants globaux et réutilisables du projet.

La répartition se fait en **catégories fonctionnelles** :

### 🔹 brand/
Composants liés à l’identité visuelle (ex : `AppLogo`).

### 🔹 form/
Composants de formulaires organisés par type :  
- `input/`  
- `choice/` (checkbox, radio, select, switch)  
- `form-wrapper/`  

Chaque composant possède :  
- un fichier `.vue`  
- un fichier `*.props.js`  
- éventuellement `variants.js` / `classes.js`  
- un `index.js` pour l’export

### 🔹 table/
Système de data-table modulaire : pagination, recherche, cellules, lignes, état vide, etc.

### 🔹 theme/
Composants et outils liés au thème (foncé / clair).

### 🔹 ui/
Composants UI généraux :  
- Alert  
- Avatar  
- Badge  
- Breadcrumb  
- Button  
- Card  
- Dialog  
- Drawer  
- Dropdown  
- Modal  
- Toast  
- Icônes (media-icon)

**Note :** Toutes les entrées possèdent un export centralisé (`index.js`).

---

## 3. **composables/**
Logique partagée entre composants, regroupée par domaine :

### general/
Exemple : `usePagination`

### theme/
Gestion du thème global (`useTheme`)

### ui/
Logique des éléments d’interface :  
- useModal  
- useDrawer  
- useToast  
- useDropdown  
- useDialog  
- useVariant

Ces composables permettent de garder les composants simples et déléguent la logique.

---

## 4. **config/**
Petites configurations globales du frontend :  
- `app.js`  
- `backend.js`

---

## 5. **layouts/**
Layouts globaux utilisés par tous les modules :  
- `AdminLayout.vue`  
- `AuthLayout.vue`  
- `PublicLayout.vue`  
- `ErrorLayout.vue`

Chaque layout possède un export propre (`index.js`).

---

## 6. **modules/**
Modules fonctionnels organisés par “domaine métier” :

### admin/
- layouts (Navbar, Sidebar, SidebarGroup, etc.)  
- pages (Dashboard, User)  
- composants internes  
- wrapper

### auth/
- pages : Login, Forgot Password, Reset Password  
- sections : formulaires  
- layout header

### public/
- components (Hero, Section, Footer, Header…)  
- pages (Home…)  

Chaque module est **autonome**, **encapsulé**, et possède son propre `index.js`.

---

## 7. **pages/**
Pages globales du projet (hors modules).  
Exemple : pages d’erreur.

---

## 8. **router/**
Routing modulaire :  
- `_admin.js`  
- `_auth.js`  
- `_public.js`  
- `_error.js`  
- `index.js` (fusion des routes)

Chaque module gère ses routes dans son propre fichier.

---

## 9. **services/**
Accès au backend via des fonctions centralisées (API).

---

## 10. **stores/**
Store global partagé (ex : config globale).

---

## 11. **utils/**
Fonctions utilitaires et helpers UI :  
- generateColorClasses  
- sizes  
- variants  
- index.js

---

## Principes de conception

- **Séparation claire des responsabilités**
- **Exports centralisés** pour simplifier les imports
- **Modularité** : chaque domaine (admin/auth/public) est autonome
- **UI atomique** : props, variantes, tailles, classes générées
- **Scalabilité** pensée dès la structure

---

## Comment étendre le Starter Kit ?

- Ajouter un nouveau module → créer un dossier dans `modules/`
- Ajouter une page → la placer dans `modules/<module>/pages` ou `pages/`
- Ajouter un composant global → l'intégrer dans `components/`
- Ajouter une logique partagée → créer un composable dans `composables/`

---

Cette architecture vous permet de maintenir une organisation claire tout au long du projet, même lorsque l’application devient complexe.