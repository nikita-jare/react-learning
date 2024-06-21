import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  RestaurantCardWithPromotedLabel,
} from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/RestaurantCardMocks.json";
import "@testing-library/jest-dom";

const MockRestaurantCardWithPromotedLabel =
  RestaurantCardWithPromotedLabel(RestaurantCard);

describe("RestaurantCard component test cases", () => {
  it("Should render RestaurantCard component with data from props", () => {
    //create mock data
    render(<RestaurantCard resData={MOCK_DATA} />);

    const restaurantName = screen.getByText(MOCK_DATA.info.name);
    expect(restaurantName).toBeInTheDocument();
  });

  it("should render the promoted label and the restaurant card", () => {
    //create mock data
    render(<MockRestaurantCardWithPromotedLabel resData={MOCK_DATA} />);

    // Check for Promoted label
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();

    // Check for Restaurant name
    const restaurantName = screen.getByText(MOCK_DATA.info.name);
    expect(restaurantName).toBeInTheDocument();

    // Check for Restaurant cuisines
    const restaurantCuisines = screen.getByText(
      MOCK_DATA.info.cuisines.join(", ")
    );
    expect(restaurantCuisines).toBeInTheDocument();

    // Check for Restaurant rating
    const restaurantRating = screen.getByText(MOCK_DATA.info.avgRating);
    expect(restaurantRating).toBeInTheDocument();

    // Check for Delivery time
    const deliveryTime = screen.getByText(
      MOCK_DATA.info.sla.deliveryTime + " mins"
    );
    expect(deliveryTime).toBeInTheDocument();
  });
});
