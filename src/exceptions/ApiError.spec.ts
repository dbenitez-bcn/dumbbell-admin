import ApiError from "./ApiError";

describe('ApiError', () => {
    it("Should return the correct string when toString is called", ()=> {
        const actual = new ApiError(100, "Error message");
        const expected = "100 - Error message";
        expect(actual.toString()).toBe(expected)
    });
});