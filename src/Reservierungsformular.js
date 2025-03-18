import React, { useState } from "react";
import { RadioGroup, RadioOption } from "./RadioGroup"; 

export default function Reservierungsformular() {
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    datum: "",
    empfehlung: "",
  });

  const [errors, setErrors] = useState({
    email: false,
  });

  const isFormValid = () => {
    return (
      reservation.name.trim() !== "" &&
      reservation.email.includes("@") && // Email muss gültig sein
      reservation.datum !== "" &&
      reservation.empfehlung !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prüfen, ob die E-Mail gültig ist
    if (!reservation.email.includes("@")) {
      setErrors((prev) => ({ ...prev, email: true }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }

    if (isFormValid()) {
      alert(
        `Reservierung für ${reservation.name} am ${reservation.datum} erfolgreich!\nEmpfehlung: ${reservation.empfehlung}`
      );
      setReservation({ name: "", email: "", datum: "", empfehlung: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));

    // Fehler zurücksetzen, wenn der User das Feld ändert
    if (name === "email" && value.includes("@")) {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={reservation.name}
        onChange={handleChange}
        placeholder="Dein Name"
        required
      />

      <label htmlFor="email">E-Mail:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={reservation.email}
        onChange={handleChange}
        placeholder="Deine E-Mail"
        required
      />
      {/* Fehlermeldung anzeigen, wenn die E-Mail ungültig ist */}
      {errors.email && <p role="alert" className="error">Bitte eine gültige E-Mail-Adresse eingeben</p>}

      <label htmlFor="datum">Datum:</label>
      <input
        id="datum"
        type="date"
        name="datum"
        value={reservation.datum}
        onChange={handleChange}
        required
      />

      <label>Wie hast du von uns erfahren?</label>
      <RadioGroup
        name="empfehlung"
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
