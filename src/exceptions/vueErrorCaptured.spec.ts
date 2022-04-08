import sut from "./vueErrorCaptured";

describe("Error captured", () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const err = new Error("Test error");

    const got = sut(err);
    
    it("Should return false", () => {
        expect(got).toBe(false);
    })
    it("Should call alert ", () => {
        expect(window.alert).toHaveBeenCalledWith(err);
    })
})