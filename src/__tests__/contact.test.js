import { render, screen } from "@testing-library/react";
import ContactComponent from "../Components/ContactComponent";
import "@testing-library/jest-dom";

describe(" Contact Us Page test cases", () => {

    test("Should load Contact Us Component", () => {
        render(<ContactComponent />);
    
        const heading = screen.getByRole("heading");
    
        // assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load Button inside contact Component", () => {
        render(<ContactComponent />);
    
        const button = screen.getByRole("button");
        const buttonText = screen.getByText("Submit");
    
        // assertion
        expect(button).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
    });
    
    test("Should load input elements in contact Component", () => {
        render(<ContactComponent />);
    
        const nameText = screen.getByPlaceholderText("name");
        const messageText = screen.getByPlaceholderText("message");
        const inputBoxs = screen.getAllByRole("textbox");
    
        // assertions
        expect(nameText).toBeInTheDocument();
        expect(messageText).toBeInTheDocument();
    
        expect(inputBoxs[0]).toBeInTheDocument();
    
        expect(inputBoxs.length).toBe(2);
        expect(inputBoxs.length).not.toBe(4);
    });
    
} );

