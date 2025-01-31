import BodyComponent from "../Components/BodyComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../utils/MockData/SwiggyData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

describe("Search functionality test cases", () => {

    test("Should render the body component with Search", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <BodyComponent />
                </BrowserRouter>
            )
        );

        // initial loading of cards
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(7);

        // check the search button present or not
        const searchButton = screen.getByRole("button", { name: "Search" });
        expect(searchButton).toBeInTheDocument();

        // check the search input box presnt or not
        const searchInput = screen.getByTestId("searchInput");
        expect(searchInput).toBeInTheDocument();

        // performing search operation
        fireEvent.change(searchInput, { target : { value: "hitex"}});
        fireEvent.click(searchButton);

        // screen should load restaurant cards
        const cards = screen.getAllByTestId("resCard");

        // check the cards after search
        expect(cards.length).toBe(1);
        expect(cards.length).not.toBe(2);

    });

    test("Should render the body component with Top rated restaurant button", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <BodyComponent />
                </BrowserRouter>
            )
        );

        // initial loading of cards
        const cardsBeforeFilter = screen.getAllByTestId("resCard");
        expect(cardsBeforeFilter.length).toBe(7);

        // check the top rated button present or not
        const topRatedButton = screen.getByRole("button", { 
            name: "Top Rated Restaurants"
         });
        expect(topRatedButton).toBeInTheDocument();

        // clicking top rated button
        fireEvent.click(topRatedButton);

        // screen should load restaurant cards
        const cards = screen.getAllByTestId("resCard");

        // check the cards after top rated button
        expect(cards.length).toBe(2);
        expect(cards.length).not.toBe(5);

    });

});
