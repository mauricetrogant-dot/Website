# 🚀 Portfolio Website - Installationsanleitung

## Voraussetzungen

Stellen Sie sicher, dass **Node.js** (Version 16 oder höher) installiert ist:
```bash
node --version
```

Falls nicht, laden Sie Node.js hier herunter: https://nodejs.org/

---

## 📥 Installation

### 1. **Projekt herunterladen**
Laden Sie alle Dateien herunter und extrahieren Sie das ZIP-Archiv in einen Ordner.

### 2. **Terminal öffnen**
Öffnen Sie ein Terminal/Kommandozeile **im Projektordner** (dort wo die `package.json` Datei liegt).

**Windows:** Shift + Rechtsklick im Ordner → "PowerShell-Fenster hier öffnen"  
**Mac:** Terminal öffnen und mit `cd` in den Projektordner navigieren  
**Linux:** Terminal öffnen und mit `cd` in den Projektordner navigieren

### 3. **Dependencies installieren**

**WICHTIG:** Führen Sie diesen Befehl zuerst aus:

```bash
npm install
```

Warten Sie, bis alle Pakete heruntergeladen wurden. Das kann 1-3 Minuten dauern.

### 4. **Development Server starten**

```bash
npm run dev
```

### 5. **Website im Browser öffnen**

Der Terminal zeigt eine URL an, z.B.:
```
  VITE v6.0.3  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Öffnen Sie `http://localhost:5173/` in Ihrem Browser.

---

## 🔧 Troubleshooting

### Problem: "command not found: npm"
**Lösung:** Node.js ist nicht installiert. Laden Sie es von https://nodejs.org/ herunter.

### Problem: CSS wird nicht geladen (Seite sieht unstyled aus)
**Lösung:** 
1. Stoppen Sie den Server (Strg+C im Terminal)
2. Löschen Sie den `node_modules` Ordner
3. Führen Sie erneut `npm install` aus
4. Starten Sie den Server mit `npm run dev`

### Problem: Port 5173 ist bereits belegt
**Lösung:** Vite verwendet automatisch einen anderen Port (z.B. 5174). Schauen Sie im Terminal nach der korrekten URL.

---

## 📦 Production Build

Wenn Sie die Website deployen möchten:

```bash
npm run build
```

Die fertigen Dateien landen im `dist/` Ordner. Diese können Sie auf einem Webserver hosten.

**Build testen:**
```bash
npm run preview
```

---

## ✏️ Anpassungen

### Persönliche Daten ändern

- **Name & Profilbild:** `/components/Hero.tsx`
- **Über mich Text:** `/components/About.tsx`
- **Projekte:** `/components/Projects.tsx` und `/components/AllProjectsPage.tsx`
- **Kontaktdaten:** `/components/Contact.tsx`

### Design anpassen

- **Farben & Theme:** `/styles/globals.css` und `/tailwind.config.js`
- **Animationen:** In den jeweiligen Komponenten (motion-Animationen)

---

## 📁 Projektstruktur

```
portfolio-website/
├── components/          # React-Komponenten
│   ├── Hero.tsx         # Startseite mit Profilbild
│   ├── About.tsx        # Über mich Sektion
│   ├── Projects.tsx     # Projekt-Übersicht
│   ├── Contact.tsx      # Kontakt-Sektion
│   └── ui/              # UI-Komponenten (Shadcn)
├── styles/
│   └── globals.css      # Globale Styles & Tailwind
├── App.tsx              # Haupt-App-Komponente
├── main.tsx             # Einstiegspunkt
├── index.html           # HTML-Template
├── package.json         # Dependencies
├── vite.config.ts       # Vite-Konfiguration
└── tailwind.config.js   # Tailwind-Konfiguration
```

---

## 🎨 Verwendete Technologien

- **React 18** - UI-Framework
- **TypeScript** - Typsicherheit
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animationen
- **Vite** - Build-Tool
- **Shadcn/ui** - UI-Komponenten
- **Lucide React** - Icons

---

## 💡 Tipps

1. **Hot Reload:** Änderungen an Dateien werden automatisch im Browser aktualisiert
2. **Responsive Design:** Die Website funktioniert auf Desktop, Tablet und Mobile
3. **Bilder:** Ersetzen Sie die Unsplash-URLs mit Ihren eigenen Bildern
4. **Deployment:** Nutzen Sie Plattformen wie Vercel, Netlify oder GitHub Pages

---

Bei Fragen oder Problemen, schauen Sie in die [Vite-Dokumentation](https://vitejs.dev/) oder [React-Dokumentation](https://react.dev/).
