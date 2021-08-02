import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("testing Hola Mundo as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act ...nothing

    // Assert
    const holaMundo = screen.getByText("Hola Mundo", { exact: false });
    expect(holaMundo).toBeInTheDocument();
  });

  test("renders Good to see you", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("es bueno verte", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed!", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("cambio", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("doesn't render 'Es bueno verte' ", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("es bueno verte", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
