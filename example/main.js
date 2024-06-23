import { createApp } from "vue";
import App from "./App.vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";

import VueDraggableResizable from "vue-draggable-resizable";
import { Plotly } from "@/index.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

const app = createApp(App);

app.component("VueDraggableResizable", VueDraggableResizable);
app.component("Plotly", Plotly);

app.use(hljsVuePlugin);

app.mount('#app')

