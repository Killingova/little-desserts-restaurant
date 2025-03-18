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
  // ✅ Alle Felder in EINEM Objekt
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    passwort: { value: "", isTouched: false },
    rolle: "role"
  });

  // ✅ Validierung des gesamten Formulars
  const getIsFormValid = () => {
    return (
      formData.vorname.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.passwort.value.length >= 8 &&
      formData.rolle !== "role"
    );
  };

  // ✅ Formular zurücksetzen
  const clearForm = () => {
    setFormData({
      vorname: "",
      nachname: "",
      email: "",
      passwort: { value: "", isTouched: false },
      rolle: "role"
    });
  };

  // ✅ Formular absenden
  const handleSubmit = (event) => {
    event.preventDefault();
    if (getIsFormValid()) {
      alert("Konto erfolgreich erstellt!");
      clearForm();
    }
  };

  // ✅ Generische onChange für Textfelder (vorname, nachname, email etc.)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,        // Nur das entsprechende Feld überschreiben
    }));
  };

  // Spezielles Handling für Passwort, weil wir dort (value, isTouched) haben
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      passwort: {
        ...prev.passwort,
        value: value,
      },
    }));
  };

  const handlePasswordBlur = () => {
    setFormData((prev) => ({
      ...prev,
      passwort: {
        ...prev.passwort,
        isTouched: true,
      },
    }));
  };

  // Spezielles Handling für Rolle (Select-Box)
  const handleRolleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      rolle: e.target.value,
    }));
  };

  return (
    <section className="registrierungs-formular">
      <h2>Registrieren bei Little Desserts</h2>
      <form onSubmit={handleSubmit}>

        {/* Vorname */}
        <div className="field">
          <label>Vorname <sup>*</sup></label>
          <input
            type="text"
            name="vorname"
            value={formData.vorname}
            onChange={handleInputChange}
            placeholder="Max"
            required
          />
        </div>

        {/* Nachname */}
        <div className="field">
          <label>Nachname</label>
          <input
            type="text"
            name="nachname"
            value={formData.nachname}
            onChange={handleInputChange}
            placeholder="Mustermann"
          />
        </div>

        {/* E-Mail */}
        <div className="field">
          <label>E-Mail <sup>*</sup></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="beispiel@email.com"
            required
          />
        </div>

        {/* Passwort */}
        <div className="field">
          <label>Passwort <sup>*</sup></label>
          <input
            type="password"
            name="passwort" // (optional; wir lesen aber OnChange separat)
            value={formData.passwort.value}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            placeholder="Mindestens 8 Zeichen"
            required
          />
          <PasswordErrorMessage
            isVisible={formData.passwort.isTouched && formData.passwort.value.length < 8}
          />
        </div>

        {/* Rolle auswählen */}
        <div className="field">
          <label>Rolle <sup>*</sup></label>
          <select
            name="rolle"
            value={formData.rolle}
            onChange={handleRolleChange}
            required
          >
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
