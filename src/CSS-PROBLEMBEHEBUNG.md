# 🎨 CSS-Problembehebung - Schritt für Schritt

## Problem: Website sieht unstyled aus (kein CSS wird geladen)

### ✅ Lösung 1: Komplette Neuinstallation

1. **Schließen Sie den Development Server** (falls er läuft)
   - Drücken Sie `Strg + C` im Terminal

2. **Löschen Sie folgende Ordner/Dateien:**
   ```
   node_modules/
   package-lock.json
   .vite/
   dist/
   ```

3. **NPM Cache leeren:**
   ```bash
   npm cache clean --force
   ```

4. **Neu installieren:**
   ```bash
   npm install
   ```

5. **Server starten:**
   ```bash
   npm run dev
   ```

6. **Im Browser öffnen und Hard Refresh:**
   - **Windows/Linux:** `Strg + Shift + R` oder `Strg + F5`
   - **Mac:** `Cmd + Shift + R`

---

## ✅ Lösung 2: Tailwind CSS manuell überprüfen

### Schritt 1: Überprüfen Sie `package.json`

Öffnen Sie `package.json` und stellen Sie sicher, dass diese Pakete in `devDependencies` sind:

```json
"devDependencies": {
  "@types/node": "^22.10.2",
  "tailwindcss": "^3.4.1",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.49"
}
```

### Schritt 2: Überprüfen Sie `tailwind.config.js`

Die Datei sollte so aussehen:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./main.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ... (rest bleibt gleich)
    },
  },
  plugins: [],
}
```

### Schritt 3: Überprüfen Sie `postcss.config.js`

Die Datei sollte so aussehen:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Schritt 4: Überprüfen Sie `styles/globals.css`

Die ersten 3 Zeilen MÜSSEN sein:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Schritt 5: Überprüfen Sie `main.tsx`

Der Import MUSS vorhanden sein:

```tsx
import './styles/globals.css';
```

---

## ✅ Lösung 3: Vite Dev Server neu starten

Manchmal hilft ein kompletter Neustart:

```bash
# Server stoppen (Strg+C)

# Temporäre Vite-Dateien löschen
rm -rf .vite

# Oder auf Windows:
# rmdir /s .vite

# Server neu starten
npm run dev
```

---

## ✅ Lösung 4: Browser-Cache leeren

1. Öffnen Sie die **Browser DevTools** (F12)
2. **Rechtsklick** auf den Reload-Button
3. Wählen Sie **"Leeren und harten Cache leeren"** / **"Empty Cache and Hard Reload"**

Oder:

- **Chrome/Edge:** `Strg + Shift + Delete` → Cache leeren
- **Firefox:** `Strg + Shift + Delete` → Cache leeren
- **Safari:** `Cmd + Alt + E`

---

## ✅ Lösung 5: Port wechseln

Manchmal hilft es, einen anderen Port zu verwenden:

```bash
npm run dev -- --port 3000
```

Dann öffnen Sie: `http://localhost:3000`

---

## 🔍 CSS im Browser überprüfen

1. Öffnen Sie die Seite im Browser
2. Drücken Sie **F12** (DevTools öffnen)
3. Gehen Sie zum **Network**-Tab
4. Laden Sie die Seite neu
5. Suchen Sie nach `globals.css` oder `style.css`

**Wird die CSS-Datei geladen?**
- ✅ JA → Überprüfen Sie, ob die Tailwind-Klassen darin sind
- ❌ NEIN → Das ist das Problem!

---

## 🛠️ CSS manuell anpassen

### Option 1: In `styles/globals.css`

Fügen Sie eigene CSS-Regeln NACH den Tailwind-Direktiven hinzu:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Ihre eigenen Styles hier */
body {
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  font-size: 2rem;
}
```

### Option 2: Inline-Styles in React

Wenn gar nichts funktioniert, können Sie temporär Inline-Styles verwenden:

```tsx
<div style={{ 
  backgroundColor: '#f5f5f5', 
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto'
}}>
  <h1 style={{ color: '#333', fontSize: '2rem' }}>Mein Name</h1>
</div>
```

### Option 3: Eigene CSS-Datei erstellen

1. Erstellen Sie `styles/custom.css`:

```css
body {
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
}

.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
```

2. Importieren Sie in `main.tsx`:

```tsx
import './styles/globals.css';
import './styles/custom.css';  // Ihre eigene CSS-Datei
```

---

## 📞 Wenn nichts funktioniert

Überprüfen Sie die **Terminal-Ausgabe** beim Start von `npm run dev`:

Sollte in etwa so aussehen:
```
  VITE v6.0.3  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

**Sehen Sie Fehlermeldungen?** → Kopieren Sie diese und suchen Sie danach.

**Node.js Version überprüfen:**
```bash
node --version
# Sollte v16 oder höher sein
```

**NPM Version überprüfen:**
```bash
npm --version
# Sollte v8 oder höher sein
```

---

## 💡 Schnellste Lösung für JETZT

Wenn Sie das Portfolio **sofort** stylen möchten, ohne Tailwind zum Laufen zu bringen:

1. Erstellen Sie `styles/emergency.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #667eea;
}

section {
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-container {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  margin-bottom: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #4a5568;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #5568d3;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}
