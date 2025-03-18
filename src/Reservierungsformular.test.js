import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reservierungsformular from "./Reservierungsformular";

describe("Reservierungsformular Tests", () => {
  // Mock für window.alert (falls in der Komponente verwendet)
  beforeAll(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("✅ Benutzer kann das Formular absenden, wenn eine Empfehlung gewählt wurde", async () => {
    render(<Reservierungsformular />);

    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "Max Mustermann" } });
    fireEvent.change(screen.getByLabelText(/E-Mail:/i), { target: { value: "test@email.com" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-01" } });

    fireEvent.click(screen.getByLabelText(/Freunde/i));

    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Reservierung erfolgreich/i)).toBeInTheDocument();
    });
  });

  test("❌ Benutzer kann das Formular nicht absenden, wenn keine Empfehlung gewählt wurde", () => {
    render(<Reservierungsformular />);

    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "Lisa Müller" } });
    fireEvent.change(screen.getByLabelText(/E-Mail:/i), { target: { value: "lisa@email.com" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-02" } });

    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    expect(submitButton).toBeDisabled();
  });

  test("⚠ Benutzer sieht eine Fehlermeldung, wenn das E-Mail-Feld leer bleibt", async () => {
    render(<Reservierungsformular />);

    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "Klaus Schmidt" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-03" } });

    fireEvent.click(screen.getByLabelText(/Social Media/i));

    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Bitte eine gültige E-Mail-Adresse eingeben/i)).toBeInTheDocument();
    });
  });

  test("⚠ Benutzer sieht eine Fehlermeldung, wenn das Namensfeld leer bleibt", async () => {
    render(<Reservierungsformular />);

    fireEvent.change(screen.getByLabelText(/E-Mail:/i), { target: { value: "test@email.com" } });
    fireEvent.change(screen.getByLabelText(/Datum:/i), { target: { value: "2025-04-04" } });

    fireEvent.click(screen.getByLabelText(/Werbung/i));

    const submitButton = screen.getByRole("button", { name: /Jetzt reservieren/i });
    fireEvent.click(submitButton);

    // **Hier wurde `getByRole("alert")` durch `getByText()` ersetzt**
    await waitFor(() => {
      expect(screen.getByText(/Bitte einen Namen eingeben/i)).toBeInTheDocument();
    });
  });
});
