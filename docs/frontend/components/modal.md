# Modal

Le composant **Modal** affiche une boîte modale centrée ou positionnée sur l’écran.
Il supporte différentes **tailles**, **placements**, et peut être **ouvert ou fermé programmatiquement** via les méthodes exposées (`show()` et `hide()`).

---

## Props

| Prop        | Type   | Default    | Description                                                                                 |
| ----------- | ------ | ---------- | ------------------------------------------------------------------------------------------- |
| `placement` | String | `'center'` | Définit l’alignement de la modale sur l’écran (`center`, `top-left`, `bottom-right`, etc.). |
| `size`      | String | `'md'`     | Définit la largeur maximale de la modale selon les clés définies dans `sizes`.              |

---

## Tailles disponibles

Les tailles correspondent aux clés définies dans `sizes` (`xs`, `sm`, `md`, `lg`, `xl`).
Elles influencent la **largeur maximale** de la modale.

---

## Placements disponibles

| Placement       | Description                                          |
| --------------- | ---------------------------------------------------- |
| `center`        | Centré verticalement et horizontalement (par défaut) |
| `middle-left`   | Centré verticalement, aligné à gauche                |
| `middle-right`  | Centré verticalement, aligné à droite                |
| `top-center`    | En haut, centré horizontalement                      |
| `bottom-center` | En bas, centré horizontalement                       |
| `top-left`      | En haut à gauche                                     |
| `top-right`     | En haut à droite                                     |
| `bottom-left`   | En bas à gauche                                      |
| `bottom-right`  | En bas à droite                                      |


---

## Slots

- **Header** : `<slot name="header" />` pour le titre ou éléments en haut de la modale.
- **Default** : `<slot />` pour le contenu principal de la modale.
- **Footer** : `<slot name="footer" />` pour boutons ou actions en bas de la modale.

---

## Utilisation

### Modal simple

```vue
<script setup>
import { ref } from 'vue'

const modal = ref(null)
const open = () => modal.value.show()
</script>

<Modal ref="modal">
  <p>Contenu de la modale</p>
</Modal>

<Button @click="open">Ouvrir</Button>
```

### Modal avec header et footer

```vue
<Modal ref="modal">
  <template #header>
    Titre de la modale
  </template>

  <p>Contenu principal de la modale</p>

  <template #footer>
    <Button @click="modal.value.hide()">Fermer</Button>
    <Button variant="primary">Confirmer</Button>
  </template>
</Modal>
```

### Modal avec placement personnalisé

```vue
<Modal ref="modal" placement="top-right">
  <p>Contenu en haut à droite</p>
</Modal>
```

---

## Méthodes exposées

| Méthode  | Description      |
| -------- | ---------------- |
| `show()` | Ouvre la modale. |
| `hide()` | Ferme la modale. |

Ces méthodes sont accessibles via `ref` grâce à :

```vue
defineExpose({ show, hide })
```

---

## Fonctionnement interne

- `isOpen` est un `ref` interne qui contrôle l’affichage de la modale et du backdrop.
- `show()` et `hide()` modifient `isOpen`.