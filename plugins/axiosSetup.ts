import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import Constants from '~/src/core/Constants';
import { container } from '~/src/core/Container';
import { SYMBOLS } from '~/src/core/SYMBOLS';

export default function ({ $axios }: Context) {
    $axios.onError(error => {
        if (error.response!.status === 500) {
            alert(`${error.response?.status} - ${error.message}`);
        } else {
            alert(`${error.response?.status} - ${error.response?.data}`);
        }
    })
    if (process.client) {
        $axios.setToken(localStorage.getItem(Constants.storage.TOKEN_KEY) || '', 'Bearer')
    }
    container
        .bind<NuxtAxiosInstance>(SYMBOLS.NuxtAxiosInstance)
        .toConstantValue($axios);
}