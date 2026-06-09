# Sito LoreVortex (GitHub Pages)

Sito statico minimal: landing + download con link alle release GitHub.

## Struttura

```text
docs/
  index.html          ← landing (funzioni + anteprima)
  download.html       ← .exe Windows + .apk Android
  assets/css/site.css
  assets/js/releases.js   ← legge ultima release da GitHub API
  assets/img/logo.svg
  assets/img/screenshots/ ← opzionale: map.png, dice.png, streaming.png
```

## Anteprima (wireframe CSS)

La sezione preview usa diagrammi UI in HTML/CSS — non screenshot fotografici.

## Languages

- Default: **English**
- Switcher in header: all **10 app UI languages** (en, it, de, es, fr, pt, pl, ru, ja, zh)
- Preference saved in `localStorage`
- **EN + IT**: full marketing copy. Other locales: navigation, hero, languages section, download page; feature grid falls back to English until extended.

## Logo

Use `assets/img/logo.png` (official LoreVortex icon).

## Pubblicare su GitHub Pages

### Opzione A — Repo dedicato (consigliato)

1. Crea `ISizeITA/LoreVortex` (public) o `ISizeITA/lorevortex.github.io`
2. Copia il contenuto di `docs/` nella root del repo (o usa solo la cartella `docs/`)
3. **Settings → Pages → Source:** branch `main`, folder `/docs` oppure `/ (root)`
4. URL: `https://isizeita.github.io/LoreVortex/` o dominio custom

### Opzione B — Stesso repo delle release Windows

Puoi aggiungere `docs/` in `LoreVortex-releases` e abilitare Pages su `/docs`.
Pro: download e sito nello stesso posto. Contro: repo già pieno di asset pesanti.

### Dominio custom (opzionale)

Aggiungi `CNAME` in root con es. `lorevortex.it` e record DNS verso GitHub Pages.

## Anteprima locale

```powershell
cd docs
npx --yes serve .
# oppure: python -m http.server 8080
```

Apri `http://localhost:3000` (serve) o `:8080`.

## Note

- I link download usano l'API GitHub (`/releases/latest`); se rate-limited, c'è fallback v1.12.0.
- Discord: link da `tauri.conf.json` → `https://discord.gg/zVXSP4YbWC`
