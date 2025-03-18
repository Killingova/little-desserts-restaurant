import React, { useState } from "react";
import { RadioGroup, RadioOption } from "./RadioGroup"; // Import der neuen Komponente

export default function Reservierungsformular() {
  // State für Reservierung inklusive Empfehlungsquelle
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    datum: "",
    empfehlung: "social_media", // Standardwert
  });

  // Formular-Validierung
  const isFormValid = () => {
    return (
      reservation.name.trim() !== "" &&
      reservation.email.includes("@") &&
      reservation.datum !== "" &&
      reservation.empfehlung !== ""
    );
  };

  // Formular absenden
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert(
        `Reservierung für ${reservation.name} am ${reservation.datum} erfolgreich!\nEmpfehlung: ${reservation.empfehlung}`
      );
      setReservation({ name: "", email: "", datum: "", empfehlung: "social_media" });
    }
  };

  // Generischer Input-Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={reservation.name}
        onChange={handleChange}
        placeholder="Dein Name"
        required
      />

      <label>E-Mail:</label>
      <input
        type="email"
        name="email"
        value={reservation.email}
        onChange={handleChange}
        placeholder="Deine E-Mail"
        required
      />

      <label>Datum:</label>
      <input
        type="date"
        name="datum"
        value={reservation.datum}
        onChange={handleChange}
        required
      />

      {/* Neue Empfehlungs-Auswahl */}
      <label>Wie hast du von uns erfahren?</label>
      <RadioGroup
        selected={reservation.empfehlung}
        onChange={(value) => setReservation((prev) => ({ ...prev, empfehlung: value }))}
      >
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Freunde</RadioOption>
        <RadioOption value="advertising">Werbung</RadioOption>
        <RadioOption value="other">Andere Quelle</RadioOption>
      </RadioGroup>

      <button type="submit" disabled={!isFormValid()}>
        Jetzt reservieren
      </button>
    </form>
  );
}
