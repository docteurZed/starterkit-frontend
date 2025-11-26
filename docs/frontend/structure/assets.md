# assets/

Le dossier `assets/` contient tous les **fichiers statiques globaux** du projet :

* **CSS global** : `main.css`
* **Images** : logos, illustrations
* **Polices** : fichiers de fonts

Le fichier `main.css` est la **base stylistique** du Starter Kit, intégrant Tailwind, le mode sombre et une palette complète de couleurs avec des classes utilitaires globales.

---

## Classes globales

`main.css` définit des **classes utilitaires** pour tous les composants, structurées en 4 catégories principales :

1. **Texte (`text-*`)**
2. **Background (`bg-*`)**
3. **Bordures (`border-*`)**
4. **Focus / ring (`focus-*`, `ring-*`)**

Ces classes utilisent les **variables CSS du thème** et sont compatibles avec le **mode sombre**.

---

### 1. Texte

| Classe           | Description                      |
| ---------------- | -------------------------------- |
| `text-default`   | Texte principal                  |
| `text-muted`     | Texte secondaire / moins visible |
| `text-primary`   | Couleur primaire du thème        |
| `text-secondary` | Couleur secondaire du thème      |
| `text-tertiary`  | Couleur tertiaire du thème       |
| `text-success`   | Texte succès / validation        |
| `text-error`     | Texte erreur / danger            |
| `text-warning`   | Texte warning / attention        |
| `text-info`      | Texte info / notification        |

**Exemple :**

```vue
<p class="text-primary">Texte principal</p>
<p class="text-error">Erreur</p>
```

---

### 2. Background

| Classe         | Description             |
| -------------- | ----------------------- |
| `bg-default`   | Fond principal          |
| `bg-muted`     | Fond secondaire / clair |
| `bg-strong`    | Fond accentué           |
| `bg-primary`   | Fond couleur primaire   |
| `bg-secondary` | Fond couleur secondaire |
| `bg-tertiary`  | Fond couleur tertiaire  |
| `bg-success`   | Fond vert / succès      |
| `bg-error`     | Fond rouge / erreur     |
| `bg-warning`   | Fond jaune / warning    |
| `bg-info`      | Fond bleu / info        |

**Exemple :**

```vue
<div class="bg-primary p-4 rounded">Background primaire</div>
<div class="bg-error p-4 rounded">Background erreur</div>
```

---

### 3. Bordures

| Classe             | Description                |
| ------------------ | -------------------------- |
| `border-default`   | Bordure neutre             |
| `border-muted`     | Bordure secondaire         |
| `border-strong`    | Bordure accentuée          |
| `border-primary`   | Bordure couleur primaire   |
| `border-secondary` | Bordure couleur secondaire |
| `border-tertiary`  | Bordure couleur tertiaire  |
| `border-success`   | Bordure succès             |
| `border-error`     | Bordure erreur             |
| `border-warning`   | Bordure warning            |
| `border-info`      | Bordure info               |

**Exemple :**

```vue
<div class="border border-primary p-2">Bordure primaire</div>
```

---

### 4. Focus / Ring

| Classe            | Description              |
| ----------------- | ------------------------ |
| `focus-default`   | Focus neutre             |
| `focus-primary`   | Focus couleur primaire   |
| `focus-secondary` | Focus couleur secondaire |
| `focus-tertiary`  | Focus couleur tertiaire  |
| `focus-success`   | Focus succès             |
| `focus-error`     | Focus erreur             |
| `focus-warning`   | Focus warning            |
| `focus-info`      | Focus info               |

`ring-*` suit la même logique, utile pour les composants avec outline ou shadow ring.

**Exemple :**

```vue
<input class="focus-primary border p-2" placeholder="Focus primaire" />
```

---

## Bonnes pratiques

* Toujours utiliser les **classes globales** pour garantir la cohérence visuelle.
* Coupler avec les **variants Tailwind** (`hover:`, `focus:`, `active:`) pour gérer les interactions.
* Ajouter de nouvelles classes dans `@layer utilities` si besoin pour étendre le thème.
* Ne jamais mettre de couleurs inline : utiliser les variables et classes existantes.
