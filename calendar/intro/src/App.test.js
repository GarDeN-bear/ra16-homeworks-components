import { render, screen } from "@testing-library/react";

import App from "./App";

test("App test", () => {
  render(<App />);
  expect(screen.getByText(/Пн/)).toBeInTheDocument();
});
