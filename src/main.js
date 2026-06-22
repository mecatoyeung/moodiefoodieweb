import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { FontAwesomeIcon } from "./fontAwesome";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const app = createApp(App);
const head = createHead();
app.use(head);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
