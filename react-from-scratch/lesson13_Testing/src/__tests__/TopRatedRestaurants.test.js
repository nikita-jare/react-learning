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

describe("Top rated button test cases", () => {
  it("Should filter top rated restaurants with rating >= 4.4", async () => {
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

    const topRatedButton = screen.getByRole("button", {
      name: "Rating above 4.5",
    });
    fireEvent.click(topRatedButton);

    expect(screen.getAllByTestId("restaurant-card").length).toBe(1);
  });
});
