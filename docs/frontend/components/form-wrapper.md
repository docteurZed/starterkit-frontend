# FormWrapper

Le composant **FormWrapper** fournit un conteneur de formulaire réactif avec gestion des erreurs, soumission asynchrone et affichage de notifications.
Il centralise la gestion des erreurs de champs via `provide` pour que les composants enfants puissent y accéder.

---

## Props

| Prop            | Type     | Default    | Description                                                      |
| --------------- | -------- | ---------- | ---------------------------------------------------------------- |
| `submitHandler` | Function | **requis** | Fonction asynchrone appelée lors de la soumission du formulaire. |

---

## États visuels

| État           | Description                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| **Normal**     | Formulaire prêt à la saisie et à la soumission.                                     |
| **Chargement** | Bouton de soumission désactivé et texte changé en `Chargement...`.                  |
| **Erreur**     | Les erreurs des champs sont injectées via `formErrors` pour les composants enfants. |

---

## Slots

| Slot      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| `default` | Contenu du formulaire (inputs, labels, composants enfants). |
| `actions` | Section pour remplacer le bouton de soumission par défaut.  |

---

## Utilisation

### Formulaire simple

```vue
<FormWrapper :submitHandler="handleSubmit">
  <TextInput v-model="email" label="Email" name="email" />
  <TextInput v-model="password" label="Mot de passe" name="password" />
</FormWrapper>
```

### Formulaire avec slot `actions`

```vue
<FormWrapper :submitHandler="handleSubmit">
  <TextInput v-model="username" label="Nom d'utilisateur" name="username" />

  <template #actions>
    <Button variant="secondary" type="submit">Enregistrer</Button>
  </template>
</FormWrapper>
```

---

## Fonctionnement interne

- **Réactivité** :
    - Le composant utilise `ref` pour gérer l’état `loading` et `fieldErrors`.
    - Les erreurs de champs sont exposées via `provide('formErrors', fieldErrors)` pour les composants enfants.

- **Soumission** :
    - La méthode `onSubmit` collecte les données via `FormData` et les transmet à `submitHandler`.
    - Gestion des erreurs avec `normalizeErrors` pour adapter le format API aux composants enfants.

- **Notifications** :
    - `addToast` affiche des messages de succès ou d’erreur selon le résultat de la soumission.

- **Slot `actions`** :
    - Permet de personnaliser le bouton de soumission ou d’ajouter d’autres actions.
    - Par défaut, un bouton `Button` est fourni avec état `loading`.
