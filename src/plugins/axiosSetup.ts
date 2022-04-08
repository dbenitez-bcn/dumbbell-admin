import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { container } from '~/core/Container';
import { SYMBOLS } from '~/core/SYMBOLS';
import axiosOnError from '~/exceptions/axiosOnErrorHandler';

export default function ({ $axios }: Context) {
    $axios.onError(axiosOnError);
    container
        .bind<NuxtAxiosInstance>(SYMBOLS.NuxtAxiosInstance)
        .toConstantValue($axios);
}