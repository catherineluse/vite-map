import { createApp } from "vue";
import App from "./App.vue";
import VueGoogleMaps from '@fawmi/vue-google-maps'
import config from '../config';

const app = createApp(App)
    .use(VueGoogleMaps, {
        load: {
            key: config.googleMapsApiKey
        }
    })
    .mount("#app");
