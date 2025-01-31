import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from '../Components/HeaderComponent';
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from '../utils/redux/appStore';
import { BrowserRouter } from "react-router-dom";

describe("Header Page test cases", () => {

    test("Should render Header Component with login button", () => {
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <HeaderComponent />
              </Provider>
            </BrowserRouter>
        );

        const loginbutton = screen.getByRole("button");

        // Assertions
        expect(loginbutton).toBeInTheDocument();
    });

    test("Should render Header Component with cart items 0", () => {
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <HeaderComponent />
              </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText("Cart (0 items)");

        // Assertions
        expect(cartItems).toBeInTheDocument();
    });

    test("Should render Header Component with a cart item", () => {
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <HeaderComponent />
              </Provider>
            </BrowserRouter>
        );

        const cartItem = screen.getByText(/Cart/);

        // Assertions
        expect(cartItem).toBeInTheDocument();
    });

    test("Should change Login button to Logout on click", () => {
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <HeaderComponent />
              </Provider>
            </BrowserRouter>
        );

        const loginbutton = screen.getByRole("button", {name: "Login"});
        
        fireEvent.click(loginbutton);

        const logoutbutton = screen.getByRole("button", {name: "Logout"});

        // Assertions
        expect(logoutbutton).toBeInTheDocument();
    });

});