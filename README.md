# Frontend - Starter Kit Vue.js

**Auteur : docteurZed**  
**Outils utilisés : Vue.js 3, TailwindCSS, Lucide**

Ce **Starter Kit** est un ensemble complet de composants, layouts, modules et utilitaires prêts à l’emploi pour accélérer la création d’applications web professionnelles.  
Il a été pensé pour des projets modulaires, scalables et maintenables, tout en offrant une base claire pour développer rapidement des interfaces robustes.

---

## Télécharger le Starter Kit (Frontend)

Le code source complet du frontend est disponible ici :

👉 **[https://github.com/docteurZed/starterkit-frontend](https://github.com/docteurZed/starterkit-frontend)**

Vous pouvez l'utiliser comme base pour vos propres projets, ou simplement explorer son architecture pour comprendre son fonctionnement.

---

## Objectifs du Starter Kit

- Proposer une **structure front-end standardisée**, claire et modulaire
- Fournir des **composants réutilisables** et extensibles (UI, formulaires, tableaux, navigation…)
- Faciliter la gestion de la logique partagée via des **composables**
- Standardiser les pratiques communes : variantes, tailles, thèmes, tokens
- Offrir une base **maintenable, scalable et rapide à prendre en main**

---

## Contenu du Starter Kit

- **Composants UI** : Button, Avatar, Card, Modal, Drawer, Dialog, Dropdown, Toast…
- **Composants de formulaires** : Input, Select, Checkbox, Radio, Switch…
- **Système complet de data-table**
- **Layouts globaux** : Admin, Auth, Public, Error
- **Modules fonctionnels** : admin, auth, public
- **Routing modulaire**
- **Composables** : useModal, useDrawer, useTheme, useDialog, useToast…
- **Utils / helpers** pour variants, sizes, couleurs
- **Services, stores, config, pages**

---

## Technologies principales

- Vue 3 (Composition API)
- TailwindCSS
- Vue Router
- Architecture modulaire orientée composants
- Exports globaux par dossier pour une utilisation simplifiée

---

## Démarrage et Configuration

### 1. Installation du projet

```bash
npm create vue@latest my-app
cd my-app
```

````

Sélectionnez les options **Router, Pinia, Prettier**.

---

### 2. Installer TailwindCSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Ajoutez Tailwind dans votre fichier CSS principal :

```css
/* /src/assets/css/main.css */
@import 'tailwindcss';
```

---

### 3. Installer les dépendances du Starter Kit

```bash
npm install lucide-vue-next
```

Selon les modules utilisés :

```bash
npm install axios
```

---

### 4. Intégrer les fichiers du Starter Kit

Téléchargez le front-end :

👉 **[https://github.com/docteurZed/starterkit-frontend](https://github.com/docteurZed/starterkit-frontend)**

Placez les dossiers dans votre projet :

```
src/
 ├─ components/
 ├─ composables/
 ├─ stores/
 ├─ modules/
 ├─ utils/
 ├─ router/
 ├─ services/
 ├─ config/
 └─ assets/
```

---

### 5. Remplacer/Mettre à jour les fichiers de configuration

Assurez-vous de remplacer les fichiers suivants par ceux fournis dans le Starter Kit : `main.css`, `tailwind.config.js`, `vite.config.js`, `main.js`, `.prettierrc.json`.

---

### 6. Lancer le projet

```bash
npm run dev
```

L’application démarre sur **[http://localhost:5173/](http://localhost:5173/)**.

---

## Composants UI

### Button

Bouton stylisé avec **variants et tailles**.

```vue
<Button variant="primary" size="lg">Envoyer</Button>
```

- Props principales : `variant`, `size`, `disabled`, `as`, `href`, `to`
- Slots : contenu du bouton
- Tailles : `xs`, `sm`, `md`, `lg`, `xl`
- Variants : `neutral`, `primary`, `secondary`, `tertiary`, `error`, `success`, `info`, `warning`

---

### Avatar / AvatarImage

Avatar carré ou rond, avec anneau coloré et tailles dynamiques.

```vue
<Avatar size="md" ring ringVariant="primary">A</Avatar>
<AvatarImage size="lg" ring src="/img/user.jpg" />
```

- Props : `size`, `src`, `alt`, `roundedFull`, `ring`, `ringVariant`
- Slots : initiales ou contenu par défaut

---

### Card / CardImage

Cartes avec header, body et footer, et images optionnelles.

```vue
<Card>
  <template #header>Header</template>
  Contenu
  <template #footer>Footer</template>
</Card>

<CardImage imageSrc="/img/pic.jpg" imagePosition="left">
  <template #header>Title</template>
</CardImage>
```

- Props : `setPadding` (Card), `imageSrc`, `imageAlt`, `imagePosition` (CardImage)

---

### Drawer

Panneau coulissant depuis un côté.
Monté via ref et exposé `show()` / `hide()`.

```vue
<Drawer ref="drawer" placement="left" size="lg" dismissible>
  Contenu
</Drawer>
```

- Props : `placement`, `size`, `dismissible`

---

### Modal

Fenêtre modale avec placement et taille configurables.

```vue
<Modal ref="modal" placement="center" size="md">
  <template #header>Titre</template>
  Contenu
</Modal>
```

- Props : `placement`, `size`
- Expose : `show()`, `hide()`
- Slots : `header`, `footer`, contenu par défaut

---

### Dialog

Boîte de confirmation contrôlée via `useDialog()`.
Monté une seule fois dans l’app.

```vue
<Dialog />
```

- Composable : `showDialog({ message, placement, onConfirm })`
- Gère fermeture via **Esc**, clic sur **backdrop**
- Boutons : Annuler / Confirmer

---

### Dropdown

Menu déroulant avec trigger et items.

```vue
<Dropdown>
  <DropdownTrigger>Menu</DropdownTrigger>
  <DropdownMenu>
    <DropdownItem>Option 1</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Option 2</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

- Composable : `useDropdown()`
- Props : `size`, `align` (menu)
- Slots : trigger, menu, items

---

### Toast

Notifications temporaires avec variant et position.
Monté une seule fois dans l’app.

```vue
<Toast placement="top-right" />
```

- Composable : `addToast({ message, variant, duration, dismissible })`, `removeToast(id)`
- Variants : `info`, `success`, `warning`, `error`, `neutral`
- Positions : `top-right`, `top-left`, `bottom-right`, `bottom-left`, `top-center`, `bottom-center`

---

### Social Icons

Icônes cliquables vers les réseaux sociaux.

```vue
<Facebook />
<Github />
<Instagram />
<Linkedin />
<Threads />
<TikTok />
<Whatsapp />
<XSocial />
```

- Props : `to` (URL), ouverture dans un nouvel onglet

---

## Composables

- **useDialog** : contrôle l’ouverture et confirmation des Dialogs
- **useToast** : notifications temporaires
- **useDropdown** : ouverture / fermeture menus déroulants
- **useModal / useDrawer / useTheme** : gestion modale, drawer et thèmes

---

## Personnalisation

Tous les composants utilisent **TailwindCSS**, donc toutes les classes peuvent être surchargées via `class` ou `:class` :

```vue
<Button class="bg-pink-500 hover:bg-pink-600">Personnalisé</Button>
```
````
