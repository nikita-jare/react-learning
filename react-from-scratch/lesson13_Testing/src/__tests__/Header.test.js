import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
  it("Should render Header component with Login button", () => {
    render(
      //we need to provide redux store to render Header component
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" }); //this is a preferred way
    // const loginButton1 = screen.getByText("Login");
    // expect(loginButton1).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render Header component with Cart itmes 0", () => {
    render(
      //we need to provide redux store to render Header component
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartIcon = screen.getByRole("cart", { value: "0" });
    expect(cartIcon).toBeInTheDocument();
  });

  it("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });
});
