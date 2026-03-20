# 📄 **README – Verwendung des Webpack-Template-Projekts**

Dies ist ein **Webpack-Template-Projekt**, das als Grundlage für neue Frontend-Projekte dient.
Es enthält ein vollständiges, modernes Setup mit:

* getrennten Webpack-Konfigurationen (`common`, `dev`, `prod`)
* modularer `src`-Struktur
* HTML-Template
* Dev-Server
* Build-System
* `.gitignore`
* Standard-Skripten (`start`, `build`)

Dieses Repository ist **nicht als fertiges Projekt gedacht**, sondern als **Vorlage**, aus der neue Projekte erstellt werden.

---

# 🚀 **Wie nutze ich dieses Template für ein neues Projekt?**

Es gibt **zwei einfache Wege**, ein neues Projekt aus diesem Template zu erstellen:

---

## ✅ **1. Methode: GitLab → „Import project“ (Repository by URL)**

*(Empfohlen – funktioniert direkt über die GitLab-Weboberfläche)*

1. In GitLab auf **„New project“** klicken
2. Oben den Tab **„Import project“** auswählen
3. Option **„Repository by URL“** wählen
4. In das Feld die URL dieses Template-Repositories einfügen

   * **HTTPS oder SSH**, z. B.:

     ```
     git@gitlab.deinunternehmen.de:gruppe/webpack-template.git
     ```
5. Einen **neuen Projektnamen** vergeben, z. B.

   ```
   my-new-frontend
   ```
6. Auf **„Create project“** klicken
7. GitLab erzeugt eine **vollständige Kopie dieses Templates**
8. Fertig – du kannst direkt losentwickeln

---

## ✅ **2. Methode: Lokal klonen → Remote auf neues Projekt setzen**

Falls du lieber lokal arbeitest oder das Repo modifizieren willst:

### 1️⃣ Template lokal klonen

```bash
git clone git@gitlab.deinunternehmen.de:gruppe/webpack-template.git my-new-project
cd my-new-project
```

### 2️⃣ Neues, leeres GitLab-Projekt anlegen

(z. B. `my-new-project`)

### 3️⃣ Remote von Template-Repo auf neues Projekt umbiegen

```bash
git remote remove origin
git remote add origin <SSH-ODER-HTTPS-URL-DEINES-NEUEN-PROJEKTS>
```

### 4️⃣ Projekt hochladen

```bash
git push -u origin main
```

Jetzt ist dein neues Projekt vollständig eingerichtet und unabhängig vom Template.

---

# 🔧 **Nächste Schritte nach Projekterstellung**

1. `npm install` in deinem neuen Projekt ausführen
2. Projekt starten:

```bash
npm run start
```

3. Production-Build erstellen:

```bash
npm run build
```

4. Für Deployment geeignete Struktur verwenden (z. B. GitHub Pages, GitLab Pages oder eigenes Hosting)

---

# 📦 **Was dieses Template enthält**

* `webpack.common.js` → Grundkonfiguration
* `webpack.dev.js` → Development-Modus (Dev-Server, eval-source-map)
* `webpack.prod.js` → Production-Modus (source-map, optimiertes Bundle)
* `src/index.js` → Einstiegspunkt
* `src/template.html` → HTML-Template
* modulare `/src`-Ordnerstruktur
* `.gitignore`
* `package.json` inkl. Scripts:

  ```json
  {
    "start": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  }
  ```

Damit kannst du **sofort starten**, ohne erneut ein Webpack-Projekt manuell einrichten zu müssen.

---

# 🧠 **Warum dieses Template existiert**

Die Einrichtung eines Webpack-Projekts ist immer wieder gleich:

* Loader registrieren
* Dev-Server konfigurieren
* HTML-Template einrichten
* Output-Ordner konfigurieren
* Common/Dev/Prod aufteilen
* Scripts setzen

Dieses Template spart dir:

* Zeit
* Fehler
* unnötige Copy-Paste-Arbeit
* Chaos in neuen Projekten

und sorgt dafür, dass **alle Projekte die gleiche professionelle Basis haben**.