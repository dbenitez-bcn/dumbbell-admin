import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { container } from '~/src/core/Container';
import { SYMBOLS } from '~/src/core/SYMBOLS';

export default ({ $axios }: Context) => {
  container
    .bind<NuxtAxiosInstance>(SYMBOLS.NuxtAxiosInstance)
    .toConstantValue($axios);
};