import RestaurantCardComponent, {withPromotedLabel} from "../Components/RestaurantCardComponent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockRestaurant = {
    card: {
      card: {
        info: {
          name: "Vasista's Srilakshmi",
          cloudinaryImageId: "some-image-id",
          cuisines: ["Indian", "Chinese"],
          avgRating: 4.5,
          costForTwo: "₹350 for two",
          sla: { deliveryTime: 26 },
        },
      },
    },
  };
  
const PromotedRestaurantComponent = withPromotedLabel(RestaurantCardComponent);

describe("RestaurantCard Component test cases", () => {

  test("Should render Restaurant card component with props data", () => {
    render(
        <RestaurantCardComponent resData={mockRestaurant} />
    );
    const name = screen.getByText(/Vasista's Srilakshmi/i);
    //Assertions
    expect(name).toBeInTheDocument();
  });

  test("Should render Restaurant card component with promoted label", () => {
    render(
        <PromotedRestaurantComponent resData={mockRestaurant} />
    );
    const promotedLabel = screen.getByText(/Promoted/i);
    //Assertions
    expect(promotedLabel).toBeInTheDocument();
  });

});
