import { render, screen } from "@testing-library/react";
import App from "./App";

describe("main screen contents", () => {
  test("displays page title", () => {
    render(<App />);
    const titleText = screen.getByText("The Shop Admin");
    expect(titleText).toBeInTheDocument();
  });

  test("renders greeting", () => {
    render(<App />);
    const greetText = screen.getByText("Hello Shopa");
    expect(greetText).toBeInTheDocument();
  });
});
