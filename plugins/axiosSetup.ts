import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import Constants from '~/src/core/Constants';
import { container } from '~/src/core/Container';
import { SYMBOLS } from '~/src/core/SYMBOLS';

export default function ({ $axios }: Context) {
    $axios.onError(error => {
        //console.log(JSON.stringify(error));
        if (error.response) {
            alert(`${error.response?.status} - ${error.response?.data.message}`);

        } else {
            alert(`${error.message}`);
        }
        return Promise.resolve(false);
    })
    if (process.client) {
        $axios.setToken(localStorage.getItem(Constants.storage.TOKEN_KEY) || '', 'Bearer')
    }
    container
        .bind<NuxtAxiosInstance>(SYMBOLS.NuxtAxiosInstance)
        .toConstantValue($axios);
}