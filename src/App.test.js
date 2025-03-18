import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Korrekte Import-Variante für neuere Versionen

import App from "./App"; // App erst nach dem Mock importieren

// Mock `useTheme` VOR dem Import von `App`
jest.mock("./ThemeContext", () => ({
  useTheme: () => ({ theme: "light" }) // Mock für ThemeContext
}));

test("rendert die App mit dem Titel 'Little Desserts Restaurant'", () => {
  render(<App />);
  const titleElement = screen.getByText(/Little Desserts Restaurant/i);
  expect(titleElement).toBeInTheDocument();
});
