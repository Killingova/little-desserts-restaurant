# Little Desserts Restaurant

Dies ist ein kleines Demoprojekt, das mit [Create React App](https://github.com/facebook/create-react-app) erstellt wurde.  
Ziel der Anwendung ist es, eine fiktive Dessert-Restaurant-Website zu präsentieren und dabei folgende Features zu demonstrieren:

- **Hell-/Dunkelmodus** via React Context  
- **Dessertliste** mit Filter- und Sortierfunktionen  
- **Reservierungsformular**  
- **Registrierungsformular** mit Validierung  
- **Reaktive UI** mittels React-Komponenten

## Verzeichnisstruktur

Ein Auszug der wichtigsten Dateien und Ordner:

```bash
.
├── public/                  # Public-Assets (z.B. index.html)
├── src/
│   ├── App.js               # Hauptkomponente der App
│   ├── App.css              # Zentrales CSS
│   ├── ThemeContext.js      # Kontext für Hell-/Dunkelmodus
│   ├── Switch.js            # Umschalt-Button/Schalter für das Theme
│   ├── DessertsList.js      # Liste und Filter für Desserts
│   ├── dessertsData.js      # Musterhafte Datensammlung zu Desserts
│   ├── Registrierungsformular.js   # Registrierungsformular mit Validierung
│   └── index.js             # Einstiegspunkt, rendert die App
├── package.json
└── README.md
```

## Features im Detail

### 1. **Hell-/Dunkelmodus**  
Über `ThemeContext.js` wird ein globaler Zustand verwaltet, der entweder `"light"` oder `"dark"` sein kann.  
- `ThemeProvider` umschließt in `index.js` die gesamte App.  
- Mit `useTheme()` greifen Komponenten auf das aktuelle Thema und die Funktion `toggleTheme` zu.  
- In `Switch.js` (oder in einem Button in `App.js`) kann man den Modus umschalten.  
- Das Styling reagiert in `App.css` auf `.app.light` bzw. `.app.dark`.  

### 2. **Dessertliste**  
Die Komponente `DessertsList.js` bekommt die Daten aus `dessertsData.js` übergeben und zeigt eine scrollbare Dessert-Liste (Karussell) an.  
- Die Liste erlaubt Filter nach Chakra, Saison und Sortierung nach Kalorien oder Namen.  
- Die Daten sind in `dessertsData.js` hinterlegt (Beispieleinträge wie „Tiramisu“, „Brownies“ etc.).  

### 3. **Reservierungsformular**  
In `App.js` findet sich eine einfache Formularsektion, in der Nutzer ihren Namen, ihre E-Mail-Adresse und ein Wunschdatum angeben können.  
- Ein Klick auf den Button schickt die Daten hypothetisch ab.  
- Dieses Beispiel dient vor allem der Demonstration eines Formulars in React.  

### 4. **Registrierungsformular** (`Registrierungsformular.js`)  
- Hier wird eine kleine Validierung demonstriert (z. B. E-Mail-Format, Passwortlänge).  
- Man kann Vor- und Nachname, E-Mail, Passwort und Rolle eingeben.  
- Ein Klick auf „Registrieren“ zeigt an, ob die Eingaben valide sind.  

## Installation und Start

1. **Projekt herunterladen** oder klonen.  
2. **Abhängigkeiten installieren**:  
   ```bash
   npm install
   ```
3. **Entwicklungsserver starten**:  
   ```bash
   npm start
   ```
   Anschließend ist die App über [http://localhost:3000](http://localhost:3000) erreichbar.

### Weitere Scripts

- **`npm test`**  
  Startet den Test Runner im Watch Mode.
- **`npm run build`**  
  Erstellt ein für die Produktion optimiertes Build im Ordner `build`.  
- **`npm run eject`**  
  Löst die Abhängigkeit von Create React App auf und gibt alle Konfigurationsdateien frei. (Achtung: Vorgang kann nicht rückgängig gemacht werden.)

## Technologie-Stack

- [React](https://reactjs.org/) (Create React App)  
- Einfaches HTML/CSS  
- JavaScript ES6+

## Nützliche Links

- [Create React App – Dokumentation](https://create-react-app.dev/docs/getting-started/)  
- [React – Offizielle Dokumentation](https://react.dev/)  

---

Viel Spaß beim Erkunden des **Little Desserts Restaurant**-Projekts!