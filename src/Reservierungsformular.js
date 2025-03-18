// Reservierungsformular.js
import React, { useState } from "react";

export default function Reservierungsformular() {
  // State als Objekt, z.B. (name, email, datum)
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    datum: ""
  });

  // Funktion, um zu prüfen, ob alles ausgefüllt ist
  const isFormValid = () => {
    return (
      reservation.name.trim() !== "" &&
      reservation.email.includes("@") &&
      reservation.datum !== ""
    );
  };

  // Formular absenden
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert(`Reservierung für ${reservation.name} am ${reservation.datum} erfolgreich!`);
      // Form zurücksetzen
      setReservation({ name: "", email: "", datum: "" });
    }
  };

  // Generischer Input-Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value
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

      <button type="submit">
        Jetzt reservieren
      </button>
    </form>
  );
}
