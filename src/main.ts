import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import i18n from "./i18n/index";
import "aploe";
import "aploe/styles/index.scss";
import "./assets/scss/main.scss";
import "./assets/scss/color.scss";

createApp(App).use(i18n).use(router).mount("#app");
