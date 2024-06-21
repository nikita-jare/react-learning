import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact component test cases", () => {
  // beforeAll(() => {
  //   console.log("Before all tests");
  // });

  // beforeEach(() => {
  //   console.log("Before each test");
  // });

  // afterAll(() => {
  //   console.log("After all tests");
  // });

  // afterEach(() => {
  //   console.log("After each test");
  // });

  test("Should render Contact component", () => {
    render(<Contact />);

    //check whether the header is loaded
    //screen.getByRole has different types of roles defined in jest
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should render Submit button", () => {
    render(<Contact />);

    //check if button is on screen
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    //we can also use getByText instead of getByRole
    const buttonText = screen.getByText("Submit");
    expect(buttonText).toBeInTheDocument();
  });

  //we can also write test alias it
  it("Should load input name", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("Name");

    expect(nameInput).toBeInTheDocument();
  });

  it("Should load three input fields", () => {
    render(<Contact />);

    //input role does not exist, its textbox
    //if there are multiple items with the same role, we can use getAllByRole
    const inputFields = screen.getAllByRole("textbox");
    //console.log(inputFields);
    expect(inputFields).toHaveLength(3);
    expect(inputFields.length).toBe(3);
  });
});
