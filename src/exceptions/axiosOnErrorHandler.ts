import { AxiosError } from 'axios'
import ApiError from "./ApiError";

const onError = (error: AxiosError<any>) => {
    if (error.response) {
        throw new ApiError(error.response!.status, error.response!.data.message);
    } else {
        throw new Error(error.message);
    }
}

export default onError;