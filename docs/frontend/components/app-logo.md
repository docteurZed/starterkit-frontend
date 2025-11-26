# AppLogo

Le composant **AppLogo** affiche le logo de l'application, soit sous forme de **texte dynamique** (nom de l'application depuis le config), soit sous forme d'**image**.  
Le composant est réactif et supporte le **surcharge des classes CSS** depuis le parent.

---

## Props

| Prop       | Type    | Default | Description                                                                         |
| ---------- | ------- | ------- | ----------------------------------------------------------------------------------- |
| `asText`   | Boolean | `true`  | Si `true`, affiche le nom de l'application en texte. Si `false`, affiche une image. |
| `imageSrc` | String  | `''`    | Chemin de l'image à afficher si `asText` est `false`.                               |

---

## Slots / Classes

- Les classes peuvent être passées depuis le parent via l’attribut `class` et seront fusionnées avec les classes par défaut.
- Exemple de classes par défaut :
    - Texte : `text-2xl uppercase font-bold text-primary-600 tracking-wide`
    - Image : `h-10 w-auto`

---

## Utilisation

### Texte dynamique (par défaut)

```vue
<AppLogo />
<AppLogo class="text-red-500" />
```

### Logo image

```vue
<AppLogo :asText="false" imageSrc="/logo.png" class="border rounded" />
```

---

## Fonctionnement

- Récupère le nom de l'application depuis le **store `config` Pinia** (`configStore.state.name`).
- Réactif : toute modification de la config (via `loadConfig()` ou `setConfig()`) met automatiquement à jour le texte.
- Permet de **surcharger les styles** depuis le parent sans modifier le composant.
