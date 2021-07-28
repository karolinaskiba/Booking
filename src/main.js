import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseCard from './components/ui/BaseCard.vue'
import TheHeader from './components/layout/TheHeader.vue'

createApp(App)
.use(store)
.use(router)
.component('base-card', BaseCard)
.component('the-header', TheHeader)
.mount("#app");
