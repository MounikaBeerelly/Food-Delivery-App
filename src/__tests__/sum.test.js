import { sum } from "../Components/Sum";

test("Sum function should calculate the sum of two numbers", () => {
    
    const result = sum(3,4);

    // assertion
    expect(result).toBe(7); 
    expect(result).not.toBe(5); 

});