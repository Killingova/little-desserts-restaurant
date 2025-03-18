import React, { useState } from "react";

const DessertsList = ({ data }) => {
  const [chakraFilter, setChakraFilter] = useState("Alle");
  const [saisonFilter, setSaisonFilter] = useState("Alle");
  const [sortOption, setSortOption] = useState("kalorien-aufsteigend");

  // 1) Die üblichen Filter und Sortierungen
  const gefilterteDesserts = data
    .filter((dessert) => (chakraFilter === "Alle" ? true : dessert.chakra === chakraFilter))
    .filter((dessert) => (saisonFilter === "Alle" ? true : dessert.saison === saisonFilter))
    .sort((a, b) => {
      if (sortOption === "kalorien-aufsteigend") return a.kalorien - b.kalorien;
      if (sortOption === "kalorien-absteigend") return b.kalorien - a.kalorien;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // 2) Neue Logik: Top 3 Desserts (z. B. nach höchster Kalorienzahl)
  const topDreiDesserts = [...data]
    .sort((a, b) => b.kalorien - a.kalorien) // absteigend sortiert
    .slice(0, 3); // nur die ersten 3

  return (
    <section className="dessert-section">
      <h2>Unsere besten Desserts</h2>
      <p>Wähle aus unseren besten Desserts – sortiere & filtere nach deinem Geschmack!</p>

            {/* Neue Sektion: Top 3 Desserts */}
            <h3>Unsere Top 3 Desserts (Kalorienstark!)</h3>
      <div className="dessert-carousel">
        {topDreiDesserts.map((dessert, idx) => (
          <div key={idx} className="dessert-card">
            <h3>{dessert.name}</h3>
            <p>
              <strong>Kalorien:</strong> {dessert.kalorien} kcal
            </p>
            <p>
              <strong>Für:</strong> {dessert.chakra}
            </p>
            <p>
              <strong>Im:</strong> {dessert.saison}
            </p>
          </div>
        ))}
      </div>

      {/* Filter & Sortierung */}
      <div className="filter-container">
        <select value={chakraFilter} onChange={(e) => setChakraFilter(e.target.value)}>
          <option value="Alle">🔮 Für (Alle)</option>
          <option value="Wurzel">❤️ Wurzelchakra</option>
          <option value="Sakral">🧡 Sakralchakra</option>
          <option value="Solarplexus">💛 Solarplexus</option>
          <option value="Herz">💚 Herzchakra</option>
          <option value="Hals">💙 Halschakra</option>
          <option value="Drittes Auge">💜 Drittes Auge</option>
          <option value="Krone">🤍 Kronenchakra</option>
        </select>

        <select value={saisonFilter} onChange={(e) => setSaisonFilter(e.target.value)}>
          <option value="Alle">🌍 Im (Alle)</option>
          <option value="Frühling">🌸 Frühling</option>
          <option value="Sommer">☀️ Sommer</option>
          <option value="Herbst">🍂 Herbst</option>
          <option value="Winter">❄️ Winter</option>
        </select>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="kalorien-aufsteigend">📉 Kalorien (Niedrig → Hoch)</option>
          <option value="kalorien-absteigend">📈 Kalorien (Hoch → Niedrig)</option>
          <option value="name">🔠 Name (A → Z)</option>
        </select>
      </div>

      {/* Bestehendes Dessert-Karussell mit Filtern */}
      <h3>Übrige Desserts nach Filter</h3>
      <div className="dessert-carousel">
        {gefilterteDesserts.length > 0 ? (
          gefilterteDesserts.map((dessert, index) => (
            <div key={index} className="dessert-card">
              <h3>{dessert.name}</h3>
              <p><strong>Kalorien:</strong> {dessert.kalorien} kcal</p>
              <p><strong>Für:</strong> {dessert.chakra}</p>
              <p><strong>Im:</strong> {dessert.saison}</p>
            </div>
          ))
        ) : (
          <p className="keine-treffer">Keine passenden Desserts gefunden.</p>
        )}
      </div>
    </section>
  );
};

export default DessertsList;
