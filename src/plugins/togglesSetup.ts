import { Plugin, Context } from '@nuxt/types';
import { TogglesService } from '~/services/TogglesService';

declare module 'vue/types/vue' {
    interface Vue {
        $toggles: TogglesService
    }
}
const toggles: Plugin = ({ $axios }: Context, inject) => {
    inject('toggles', new TogglesService($axios));
}

export default toggles;