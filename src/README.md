# Portfolio Website

Eine moderne Portfolio-Website für Softwareentwickler mit einem eleganten grauen Design und stylischen Übergängen.

## 🚀 Features

- ✨ Modernes, minimalistisches Design
- 🎨 Elegantes graues Farbschema
- 🌊 Sanfte Motion-Animationen
- 📱 Vollständig responsive
- 🖼️ Zentrales Profilbild
- 📄 Bereiche: Über mich, Projekte, Kontakt
- 📋 Dedizierte "Alle Projekte"-Seite

## 🛠️ Installation

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn

### Schritte

1. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Die Website ist dann unter `http://localhost:5173` erreichbar.

3. **Für Produktion bauen:**
   ```bash
   npm run build
   ```

4. **Produktions-Build testen:**
   ```bash
   npm run preview
   ```

## 📝 Anpassungen

### Profilbild ändern

Ersetzen Sie die Unsplash-URL in `components/Hero.tsx` mit Ihrem eigenen Bild.

### Projekte bearbeiten

- **Hauptseite:** Bearbeiten Sie `/components/Projects.tsx` (Zeilen 13-29)
- **Alle Projekte:** Bearbeiten Sie `/components/AllProjectsPage.tsx` (Zeilen 14-75)

Jedes Projekt hat folgende Felder:
- `title`: Projekttitel
- `description`: Projektbeschreibung
- `image`: Projektbild-URL
- `tags`: Verwendete Technologien
- `githubUrl`: GitHub Repository-Link
- `demoUrl`: Live-Demo-Link

### Kontaktdaten ändern

Bearbeiten Sie `/components/Contact.tsx` mit Ihren eigenen Daten.

### Über mich anpassen

Bearbeiten Sie `/components/About.tsx` mit Ihrem Text und Skills.

## 🏗️ Technologie-Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS 4.0** - Styling
- **Motion (Framer Motion)** - Animationen
- **Lucide React** - Icons
- **Shadcn/UI** - UI Komponenten

## 📁 Projektstruktur

```
portfolio-website/
├── components/          # React Komponenten
│   ├── Hero.tsx        # Header mit Profilbild
│   ├── About.tsx       # Über mich Sektion
│   ├── Projects.tsx    # Projekt-Preview
│   ├── Contact.tsx     # Kontaktformular
│   ├── AllProjectsPage.tsx  # Vollständige Projektübersicht
│   └── ui/             # Shadcn UI Komponenten
├── styles/
│   └── globals.css     # Globale Styles & Tailwind
├── App.tsx             # Haupt-App-Komponente
├── main.tsx            # React Entry Point
└── index.html          # HTML Entry Point
```

## 🚢 Deployment

### Vercel (empfohlen)

1. Pushen Sie den Code zu GitHub
2. Importieren Sie das Projekt auf [vercel.com](https://vercel.com)
3. Fertig! Automatisches Deployment bei jedem Push

### Netlify

1. Pushen Sie den Code zu GitHub
2. Importieren Sie das Projekt auf [netlify.com](https://netlify.com)
3. Build Command: `npm run build`
4. Publish Directory: `dist`

## 📄 Lizenz

Dieses Projekt wurde mit Figma Make erstellt und steht zur freien Verfügung.

## 🙏 Credits

Bilder von [Unsplash](https://unsplash.com)
