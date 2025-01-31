import RestaurantMenuComponent from '../Components/ReastaurantMenuPage';
import HeaderComponent from "../Components/HeaderComponent";
import CartComponent from "../Components/CartComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../utils/MockData/restaurantMenuData.json";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const { act } = require("react");
import appStore from '../utils/redux/appStore';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

test("Should load Restaurant Menu component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenuComponent />
                </Provider>
            </BrowserRouter>
        )
    });

    const accordionHeader = screen.getByText("Veg Biriyani (6)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(6);
});

test("Find add button in Restaurant Menu component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <HeaderComponent />
                    <RestaurantMenuComponent />
                    <CartComponent />
                </Provider>
            </BrowserRouter>
        )
    });

    const accordionHeader = screen.getByText("Veg Biriyani (6)");
    // check accordion clickable or not
    fireEvent.click(accordionHeader);
    // check the add button present or not
    const addBtn = screen.getAllByRole("button", { name: "Add +" });
    expect(addBtn[0]).toBeInTheDocument();

    // click on Add button
    fireEvent.click((addBtn[0]));
    // check the cart items
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument;

    // click on another Add button
    fireEvent.click((addBtn[1]));
    // check the cart items
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument;

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    expect(
        screen.getByText("Your Cart is empty. Please Add items to the Cart!")
    ).toBeInTheDocument();
});

