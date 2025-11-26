# Social Icons

Les composants **Social Icons** affichent des icônes cliquables vers des réseaux sociaux.
Chaque icône est un composant indépendant qui accepte une prop `to` pour définir l’URL cible. Les icônes utilisent des SVG inline et s’ouvrent dans un nouvel onglet (`target="_blank"`).

---

## Props communes

| Prop | Type   | Default                  | Description                                     |
| ---- | ------ | ------------------------ | ----------------------------------------------- |
| `to` | String | URL par défaut du réseau | Lien vers le profil ou la page du réseau social |

---

## Icônes disponibles

### Facebook

* URL par défaut : `https://facebook.com`
* SVG intégré représentant le logo Facebook

```vue
<Facebook to="https://facebook.com/monprofil" />
```

### Github

* URL par défaut : `https://github.com`
* SVG intégré représentant le logo Github

```vue
<Github to="https://github.com/monprofil" />
```

### Instagram

* URL par défaut : `https://instagram.com`
* SVG représentant le logo Instagram

```vue
<Instagram to="https://instagram.com/monprofil" />
```

### LinkedIn

* URL par défaut : `https://linkedin.com`
* SVG représentant le logo LinkedIn

```vue
<Linkedin to="https://linkedin.com/in/monprofil" />
```

### Threads

* URL par défaut : `https://threads.net`
* SVG représentant le logo Threads

```vue
<Threads to="https://threads.net/monprofil" />
```

### TikTok

* URL par défaut : `https://tiktok.com`
* SVG représentant le logo TikTok

```vue
<TikTok to="https://tiktok.com/@monprofil" />
```

### Whatsapp

* URL par défaut : `https://whatsapp.com/`
* SVG représentant le logo Whatsapp

```vue
<Whatsapp to="https://wa.me/1234567890" />
```

### X (anciennement Twitter)

* URL par défaut : `https://twitter.com`
* SVG représentant le logo X

```vue
<X to="https://twitter.com/monprofil" />
<Twitter to="https://twitter.com/monprofil" />
```

---

## Slots

Les composants **Social Icons** n’utilisent pas de slots, le SVG est directement intégré.

---

## Fonctionnement interne

* Chaque composant rend un `<a>` avec `target="_blank"`.
* La prop `to` permet de remplacer l’URL par défaut.

---

## Exemple d'utilisation

```vue
<div class="flex space-x-3">
  <Facebook />
  <Github to="https://github.com/monprofil" />
  <Instagram />
  <Linkedin />
  <Threads />
  <TikTok />
  <Whatsapp />
  <Twitter />
</div>
```