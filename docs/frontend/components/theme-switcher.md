# ThemeSwitcher

Le composant **ThemeSwitcher** permet de basculer entre les thèmes **clair** et **sombre**.
Il utilise le composable `useTheme` pour gérer le thème et le stocker dans `localStorage`.

---

## Utilisation

```vue
<template>
    <ThemeSwitcher :size="36" />
</template>

<script setup>
import { ThemeSwitcher } from '@/components/ThemeSwitcher.vue'
</script>
```

- `size` : définit la largeur et la hauteur de l’icône (par défaut `24`px).

> Cliquez sur l’icône pour changer le thème. Le choix est appliqué immédiatement et conservé entre les sessions.

---

## Exemple intégré

```vue
<template>
    <header
        class="flex justify-between items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow"
    >
        <span>Mon Application</span>
        <ThemeSwitcher :size="28" />
    </header>
</template>
```

> Idéal pour les headers, toolbars ou dashboards.
