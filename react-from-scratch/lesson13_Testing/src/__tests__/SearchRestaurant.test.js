import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/RestaurantDataMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//fetch fn returns us a promise and then we convert it to json which again returns a promise
globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Search Restaurant component test cases", () => {
  it("Should search restaurant list for Pizza text input", async () => {
    //it will fail as it didnt find fetch function as fetch is provided by browser
    // render(<Body />);

    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    expect(screen.getAllByTestId("restaurant-card").length).toBe(10);
    const serachBtn = screen.getByRole("button", { name: "Search" });
    expect(serachBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(serachBtn);
    const searchResult = screen.getAllByTestId("restaurant-card");

    expect(searchResult.length).toBe(2);
  });
});
