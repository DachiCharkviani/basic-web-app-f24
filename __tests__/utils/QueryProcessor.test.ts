import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "dcharkvi"
          ));
    });

    test('should return my name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Davit"
          ));
    });

    test('should return highest', () => {
        const query = "which of the following numbers is the largest: 30, 20, 1?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "30"
          ));
    });

    test('should return the correct sum', () => {
        const query = "what is 90 plus 40?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "130"
        ));
    });
    
    test('should return the correct sum with different numbers', () => {
        const query = "what is 15 plus 25?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "40"
        ));
    });
    
    test('should handle multiple numbers', () => {
        const query = "what is 10 plus 20 plus 30?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "60"
        ));
    });

    test('should return the correct product', () => {
        const query = "What is 53 multiplied by 33?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "1749"
        ));
    });
    
    test('should return correct product with different numbers', () => {
        const query = "What is 10 multiplied by 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "50"
        ));
    });

    test('should return the correct difference', () => {
        const query = "What is 83 minus 74?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "9"
        ));
    });
    
    test('should return correct difference with different numbers', () => {
        const query = "What is 100 minus 50?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "50"
        ));
    });
    
    
});
