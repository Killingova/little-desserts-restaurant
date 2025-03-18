import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservierungsformular from "../components/Reservierungsformular"; // Passe den Pfad an

describe("Reservierungsformular Tests", () => {
  test("1️⃣ Benutzer kann das Formular absenden, wenn eine Tischgröße gewählt wurde", () => {
    render(<Reservierungsformular />);
    
    // Fülle das Formular aus
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "Max Mustermann" } });
    fireEvent.change(screen.getByLabelText(/E-Mail:/i), { target: { value: "test@email.com" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-01" } });

    // Wähle eine Tischgröße
    fireEvent.change(screen.getByLabelText(/Tischgröße:/i), { target: { value: "4 Personen" } });

    // Absenden-Button sollte jetzt aktiv sein
    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    expect(submitButton).not.toBeDisabled();
    
    // Klicke auf den Button
    fireEvent.click(submitButton);
    expect(screen.getByText(/Reservierung erfolgreich/i)).toBeInTheDocument();
  });

  test("2️⃣ Benutzer kann das Formular nicht absenden, wenn keine Tischgröße gewählt wurde", () => {
    render(<Reservierungsformular />);
    
    // Fülle das Formular aus (aber ohne Tischgröße)
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "Lisa Müller" } });
    fireEvent.change(screen.getByLabelText(/E-Mail:/i), { target: { value: "lisa@email.com" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-02" } });

    // Absenden-Button sollte noch deaktiviert sein
    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    expect(submitButton).toBeDisabled();
  });

  test("3️⃣ Benutzer kann das Formular absenden, wenn eine große Tischgröße gewählt wurde, ohne Extra-Wünsche", () => {
    render(<Reservierungsformular />);
    
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "Klaus Schmidt" } });
    fireEvent.change(screen.getByLabelText(/E-Mail:/i), { target: { value: "klaus@email.com" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-03" } });

    // Wähle eine große Tischgröße (z.B. 8 Personen)
    fireEvent.change(screen.getByLabelText(/Tischgröße:/i), { target: { value: "8 Personen" } });

    // Button sollte aktiv sein
    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    expect(submitButton).not.toBeDisabled();
    
    fireEvent.click(submitButton);
    expect(screen.getByText(/Reservierung erfolgreich/i)).toBeInTheDocument();
  });

  test("4️⃣ Benutzer kann das Formular nicht absenden, wenn eine kleine Tischgröße gewählt wurde, aber keine Extra-Wünsche angegeben wurden", () => {
    render(<Reservierungsformular />);
    
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "Tom Berger" } });
    fireEvent.change(screen.getByLabelText(/E-Mail:/i), { target: { value: "tom@email.com" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-04" } });

    // Wähle eine kleine Tischgröße (z.B. 2 Personen)
    fireEvent.change(screen.getByLabelText(/Tischgröße:/i), { target: { value: "2 Personen" } });

    // Extra-Wünsche leer lassen

    // Button sollte deaktiviert sein
    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    expect(submitButton).toBeDisabled();
  });
});
