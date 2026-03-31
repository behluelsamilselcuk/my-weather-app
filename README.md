# **Wetter-App**

Dies wird eine Wetter-Frontend-Web-Anwendung.
Als Bundler wird webpack genutzt und um das Projekt zu strukturieren, wird mein persönliches Template genutzt:
https://github.com/behluelsamilselcuk/frontend-webpack-starter-main

Es wird ein Suchfeld geben, wo man nach der Stadt, von dem man die Wetterdaten erfahren will, suchen und auswählen kann.
Dementsprechend werden die Daten zurückgegeben, welche im ersten Schritt in der Konsole geloggt werden.

Das Entwurfsmuster ist nach MVC ausgerichtet, die die Anwendung in drei Komponenten und somit in unterschiedliche Verantwortlichkeiten teilt:

| Komponente | Verantwortlichkeit |
| -------- | -------- |
| Model  | Daten / Logik   |
| View  | Benutzeroberfläche   |
| Controller  | Steuerung   |

---

## **Projektstruktur**

```
- 📁 dist/
- 📁 node_modules/
- 📁 src/
  - 📁 css/
  - 📁 model/
    - 📄 weatherInformation.js
  - 📁 utils/
    - 📄 convert-unit.js
  - 📁 view/
    - 📁 content/
    - 📁 searchBar/
  - 📄 index.js
  - 📄 template.html
- 📄 .gitignore
- 📄 package-lock.json
- 📄 package.json
- 📄 README.md
- 📄 webpack.common.js
- 📄 webpack.dev.js
- 📄 webpack.prod.js
```

---

## **Module**

| Modul | MVC-Teil | Aufgabe des Moduls |
| -------- | -------- | -------- |
| "weatherInformation.js"  | MODEL   | Abrufen & Verwalten der Wetterdaten vom Attribut "place"     |
| "content/"  | VIEW   | Darstellen & Anzeigen der abgerufenen Wetterdaten     |
| "searchBar"  | VIEW   | Darstellen & Anzeigen der Suchleiste     |
| "index.js  | Controller  | Fungiert als Vermittler. Er verarbeitet Benutzeraktionen, aktualisiert das Modell und wählt eine View zur Anzeige aus     |