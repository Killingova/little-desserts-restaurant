import React from "react";
import DessertsList from "./DessertsList";
import dessertsData from "./dessertsData"; // Import der Dessert-Daten
import Registrierungsformular from "./Registrierungsformular";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Little Desserts Restaurant</h1>
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

      <section id="about" className="section">
        <h2>Über uns</h2>
        <p>Willkommen im <strong>Little Desserts Restaurant</strong>, wo Magie auf Süßspeisen trifft! Unsere handgemachten Desserts sind mit Liebe und Leidenschaft zubereitet.</p>
      </section>

      <section id="menu" className="section">
        <h2>Unsere Spezialitäten</h2>
        <p>Wir bieten eine einzigartige Auswahl an köstlichen Desserts, die deinen Gaumen verzaubern.</p>
      </section>

      <section id="desserts" className="section">
        <h2>Unsere Dessert-Kreationen</h2>
        <DessertsList data={dessertsData} />
      </section>

      <section id="reservieren" className="section">
        <h2>Reservierung</h2>
        <form className="form">
          <label>Name:</label>
          <input type="text" placeholder="Dein Name" required />

          <label>E-Mail:</label>
          <input type="email" placeholder="Deine E-Mail" required />

          <label>Datum:</label>
          <input type="date" required />

          <button type="submit">Jetzt reservieren</button>
        </form>
      </section>

      <div className="app">
      <Registrierungsformular />
    </div>

      <footer className="footer">
        <p>📍 Little Desserts Restaurant, Hamburg</p>
        <p>🍽️ Reservierungen: (040) 1234567</p>
        <p>📧 kontakt@little-desserts-restaurant.de</p>
      </footer>
    </div>
  );
}

export default App;