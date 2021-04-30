import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import Constants from '~/src/core/Constants';
import { container } from '~/src/core/Container';
import { SYMBOLS } from '~/src/core/SYMBOLS';
import ApiError from '~/src/exceptions/ApiError';

export default function ({ $axios }: Context) {
    $axios.onError(error => {
        if (error.response) {
            throw new ApiError(error.response!.status, error.response!.data.message);
        } else {
            throw new Error(error.message);
        }
    })
    if (process.client) {
        $axios.setToken(localStorage.getItem(Constants.storage.TOKEN_KEY) || '', 'Bearer')
    }
    $axios.setBaseURL(Constants.BASE_URL);
    container
        .bind<NuxtAxiosInstance>(SYMBOLS.NuxtAxiosInstance)
        .toConstantValue($axios);
}