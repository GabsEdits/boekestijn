import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "aploe";
import "aploe/base.scss";
import "./assets/scss/main.scss";
import "./assets/scss/color.scss";
import "./assets/scss/fonts.scss";

createApp(App).use(i18n).use(router).mount("#app");
