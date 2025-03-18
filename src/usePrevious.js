import React, { useState } from "react";
import usePrevious from "./usePrevious"; // <-- anpassen, Pfad zu deiner Datei

export default function Reservierungsformular() {
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    datum: ""
  });

  // Vorheriger State speichern. Du kannst z.B. den ganzen "reservation" tracken
  // oder nur ein Feld, wie z.B. "reservation.name"
  const prevReservation = usePrevious(reservation);

  const isFormValid = () => {
    return (
      reservation.name.trim() !== "" &&
      reservation.email.includes("@") &&
      reservation.datum !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert(
        `Neu: ${reservation.name} am ${reservation.datum}\nVorher: ${
          prevReservation ? prevReservation.name : "(keine vorherige Eingabe)"
        }`
      );
      // Reset
      setReservation({ name: "", email: "", datum: "" });
    }
  };

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
        required
      />

      <label>E-Mail:</label>
      <input
        type="email"
        name="email"
        value={reservation.email}
        onChange={handleChange}
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

      <button type="submit">Jetzt reservieren</button>

      {/* Debug: zeig den vorherigen State an, falls vorhanden */}
      {prevReservation && (
        <p style={{ marginTop: "1rem" }}>
          <strong>Vorheriger Name:</strong> {prevReservation.name} <br />
          <strong>Vorherige E-Mail:</strong> {prevReservation.email} <br />
          <strong>Vorheriges Datum:</strong> {prevReservation.datum}
        </p>
      )}
    </form>
  );
}
