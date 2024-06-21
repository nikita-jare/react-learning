import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/RestaurantMenuMocks.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

it("Should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText(/Coolers/i);
  expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  const itemCards = await screen.findAllByTestId("item-card");
  console.log(itemCards);
  expect(itemCards).toHaveLength(8);

  const addToCartBtns = screen.getAllByRole("button", { name: /Add/i });
  fireEvent.click(addToCartBtns[0]);

  //now header should be updated with cart count
  expect(screen.getByRole("cart", { value: "1" })).toBeInTheDocument();

  const itemCardsNow = await screen.findAllByTestId("item-card");
  expect(itemCardsNow).toHaveLength(9);

  fireEvent.click(addToCartBtns[1]);
  expect(screen.getByRole("cart", { value: "2" })).toBeInTheDocument();

  const itemCardsNow1 = await screen.findAllByTestId("item-card");
  expect(itemCardsNow1).toHaveLength(10);

  fireEvent.click(addToCartBtns[2]);
  expect(screen.getByRole("cart", { value: "3" })).toBeInTheDocument();

  fireEvent.click(addToCartBtns[2]);
  expect(screen.getByRole("cart", { value: "4" })).toBeInTheDocument();

  const cartItems = await screen.findAllByTestId("item-card");
  expect(cartItems).toHaveLength(11); //8 + 3

  const emptyCartBtn = screen.getByRole("button", { name: /Clear Cart/i });
  fireEvent.click(emptyCartBtn);
  expect(screen.getByRole("cart", { value: "0" })).toBeInTheDocument();

  const cartItemsAfter = await screen.findAllByTestId("item-card");
  expect(cartItemsAfter).toHaveLength(8); //15 + 3
});
