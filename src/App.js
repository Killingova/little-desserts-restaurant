// App.js
import React from "react";
import { useTheme } from "./ThemeContext";  // <-- neu
import ThemeSwitch from "./Switch"; // oder genauer Pfad, falls anders benannt
import DessertsList from "./DessertsList";
import dessertsData from "./dessertsData";
import Reservierungsformular from "./Reservierungsformular.js";
import Registrierungsformular from "./Registrierungsformular.js";
import MagicMouseTrail from "./MagicMouseTrail";

import "./App.css";


function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <MagicMouseTrail />
      {/* Header & Navigation */}
      <header className="header">
        <h1>Little Desserts Restaurant</h1>
        {/* Hier der Schalter */}
        <ThemeSwitch />
        <nav className="nav">
          <ul>
            <li><a href="#menu">Menü</a></li>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#reservieren">Reservieren</a></li>
            <li><a href="#desserts">Desserts</a></li>
            <li><a href="#gallery">Galerie</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        {/* Hero-Bereich */}
        <section className="hero">
          <h2>Magie trifft auf Süßspeisen</h2>
          <p>Handgemachte Desserts mit Liebe zubereitet – eine Geschmacksexplosion für deine Sinne.</p>
          <a href="#desserts" className="cta-button">Jetzt entdecken</a>
        </section>

        {/* Über Uns */}
        <section id="about" className="section">
          <h2>Über uns</h2>
          <p>Willkommen im <strong>Little Desserts Restaurant</strong>, wo Magie auf Süßspeisen trifft!</p>
        </section>

        {/* Spezialitäten */}
        <section id="menu" className="section">
          <h2>Unsere Spezialitäten</h2>
          <p>Eine einzigartige Auswahl an köstlichen Desserts, die deinen Gaumen verzaubern.</p>
        </section>

        {/* Dessert-Karussell */}
        <section id="desserts" className="section">
          <DessertsList data={dessertsData} />
        </section>

        {/* Reservierung (jetzt via eigener Komponente) */}
        <section id="reservieren" className="section">
          <h2>Reservierung</h2>
          <Reservierungsformular />
        </section>

        {/* Registrierung */}
        <section className="section">
        <h2>Registrierung</h2>
          <Registrierungsformular />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>📍 Little Desserts Restaurant, Hamburg</p>
        <p>🍽️ Reservierungen: (040) 1234567</p>
        <p>📧 kontakt@little-desserts-restaurant.de</p>
      </footer>
    </div>
  );
}

export default App;
