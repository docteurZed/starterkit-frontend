# Démarrage et Configuration

Cette section décrit **comment installer le Starter Kit UI** dans un projet Vue 3, puis détaille les **configurations essentielles** fournies par défaut.

---

## 1. Installation du projet

```bash
npm create vue@latest my-app
cd my-app
```

Sélectionnez les options Router, Pinia et Prettier.

> Si vous utilisez le Starter Kit complet, gardez Router + Pinia activés.

---

## 2. Installer TailwindCSS

Le Starter Kit utilise Tailwind pour toutes les bases UI.

```bash
npm install tailwindcss @tailwindcss/vite
```

Ajoutez Tailwind dans votre fichier CSS principal :

```css
/* /src/assets/css/main.css */
@import 'tailwindcss';
```

---

## 3. Installer les dépendances du Starter Kit

```bash
npm install lucide-vue-next
```

Selon les modules utilisés, vous pouvez aussi installer :

```bash
npm install axios
```

---

## 4. Intégrer les fichiers du Starter Kit

Téléchargez le front-end du starter kit :

👉 **[https://github.com/docteurZed/starterkit-frontend](https://github.com/docteurZed/starterkit-frontend)**

Placez les dossiers nécessaires dans votre projet :

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

> Cette structure est expliquée dans la page **Architecture du Frontend**.

---

## 5. Remplacer/Mettre à jour les fichiers de configuration

Les fichiers suivants sont essentiels pour que le Starter Kit fonctionne.
Vous devez **les remplacer** par ceux fournis dans la documentation.

---

## 6. Configurations essentielles du Starter Kit

### 6.1 `main.css` — Configuration globale du style

```css
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));
```

#### Rôle

- Active Tailwind dans toute l’app
- Ajoute une variante “dark” compatible avec le système de thème
- Permet l’utilisation de `dark:` même si le thème change dynamiquement

> Utilisé par `useTheme()` dès le chargement de l’app.

---

### 6.2 `tailwind.config.js` — Configuration TailwindCSS

```js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [{ pattern: /^(text|border|focus:ring|bg|hover:bg)-./ }],
    theme: { extend: {} },
    plugins: [],
}
```

#### Rôle

- Scan des fichiers Vue
- Classements dynamiques sauvegardés via `safelist`
- Base extensible (couleurs, tailles, animations)

---

### 6.3 `vite.config.js` — Configuration Vite

```js
export default defineConfig({
    plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
```

#### Rôle

- Charge Vue + JSX
- Active Vue DevTools
- Configure Tailwind via plugin
- Définit l’alias `@` pour simplifier les imports

---

### 6.4 `main.js` — Initialisation de l'application

```js
const app = createApp(App)
app.use(createPinia())
app.use(router)

const configStore = useConfigStore()
await configStore.loadConfig()

useTheme()

app.mount('#app')
```

#### Rôle

- Initialise Vue
- Active Pinia + Router
- Charge la configuration depuis le store
- Applique automatiquement le thème (dark/light)

---

### 6.5 `.prettierrc.json` — Formatage du projet

```json
{
    "semi": false,
    "singleQuote": true,
    "printWidth": 100,
    "tabWidth": 4
}
```

#### Rôle

- Standardise le style de code
- Maintient une base propre et cohérente

---

## 7. Lancer le projet

```bash
npm run dev
```

L’application démarre sur **[http://localhost:5173/](http://localhost:5173/)**.
