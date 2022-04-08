import { AxiosError, AxiosRequestConfig } from 'axios'
import ApiError from './ApiError';
import onError from "./axiosOnErrorHandler";

describe("On error", () => {
    it("When error has response should throw an ApiError", () => {
        const error: AxiosError = {
            response: {
                data: {
                    message: "Test message"
                },
                status: 123,
              },
        } as any as AxiosError;
        expect(() => onError(error)).toThrow(new ApiError(123, "Test message"));
    })

    it("When error has no response should throw an Error", () => {
        const error: AxiosError = {
            response: null,
            message: "Error message"
        } as any as AxiosError;
        
        expect(() => onError(error)).toThrow(new Error("Error message"));
    })
})