import { createApp } from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./store";
import BaseCard from './components/ui/BaseCard.vue'
import TheHeader from './components/layout/TheHeader.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'

createApp(App)
.use(store)
.use(router)
.use(vuetify)
.component('base-card', BaseCard)
.component('the-header', TheHeader)
.component('base-spinner', BaseSpinner)
.mount("#app");
