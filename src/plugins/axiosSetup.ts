import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { container } from '~/core/Container';
import { SYMBOLS } from '~/core/SYMBOLS';
import ApiError from '~/exceptions/ApiError';

export default function ({ $axios }: Context) {
    $axios.onError(error => {
        if (error.response) {
            throw new ApiError(error.response!.status, error.response!.data.message);
        } else {
            throw new Error(error.message);
        }
    })
    container
        .bind<NuxtAxiosInstance>(SYMBOLS.NuxtAxiosInstance)
        .toConstantValue($axios);
}