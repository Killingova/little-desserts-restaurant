import React, { useState } from "react";

// ✅ E-Mail-Validierungshilfe
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// ✅ Passwort-Fehlermeldungskomponente
const PasswordErrorMessage = ({ isVisible }) => {
  return isVisible ? (
    <p className="error-message">Das Passwort muss mindestens 8 Zeichen lang sein.</p>
  ) : null;
};

const Registrierungsformular = () => {
  // ✅ Definierung des State für alle Eingaben
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [passwort, setPasswort] = useState({ value: "", isTouched: false });
  const [rolle, setRolle] = useState("role");

  // ✅ Validierung des gesamten Formulars
  const getIsFormValid = () => {
    return (
      vorname.trim() !== "" &&
      validateEmail(email) &&
      passwort.value.length >= 8 &&
      rolle !== "role"
    );
  };

  // ✅ Formular zurücksetzen
  const clearForm = () => {
    setVorname("");
    setNachname("");
    setEmail("");
    setPasswort({ value: "", isTouched: false });
    setRolle("role");
  };

  // ✅ Formular absenden
  const handleSubmit = (event) => {
    event.preventDefault();
    if (getIsFormValid()) {
      alert("Konto erfolgreich erstellt!");
      clearForm();
    }
  };

  return (
    <section className="registrierungs-formular">
      <h2>Registrieren bei Little Lemon 🍋</h2>
      <form onSubmit={handleSubmit}>
        {/* Vorname */}
        <div className="field">
          <label>Vorname <sup>*</sup></label>
          <input
            type="text"
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
            placeholder="Max"
            required
          />
        </div>

        {/* Nachname */}
        <div className="field">
          <label>Nachname</label>
          <input
            type="text"
            value={nachname}
            onChange={(e) => setNachname(e.target.value)}
            placeholder="Mustermann"
          />
        </div>

        {/* E-Mail */}
        <div className="field">
          <label>E-Mail <sup>*</sup></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="beispiel@email.com"
            required
          />
        </div>

        {/* Passwort */}
        <div className="field">
          <label>Passwort <sup>*</sup></label>
          <input
            type="password"
            value={passwort.value}
            onChange={(e) => setPasswort({ ...passwort, value: e.target.value })}
            onBlur={() => setPasswort({ ...passwort, isTouched: true })}
            placeholder="Mindestens 8 Zeichen"
            required
          />
          <PasswordErrorMessage isVisible={passwort.isTouched && passwort.value.length < 8} />
        </div>

        {/* Rolle auswählen */}
        <div className="field">
          <label>Rolle <sup>*</sup></label>
          <select value={rolle} onChange={(e) => setRolle(e.target.value)} required>
            <option value="role">Bitte wählen...</option>
            <option value="individual">Einzelperson</option>
            <option value="business">Geschäftskunde</option>
          </select>
        </div>

        {/* Absenden-Button */}
        <button type="submit" disabled={!getIsFormValid()}>
          Registrieren
        </button>
      </form>
    </section>
  );
};

export default Registrierungsformular;
