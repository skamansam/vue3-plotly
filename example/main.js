import { createApp } from "vue";
import App from "./App.vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";

import javascript from "highlight.js/lib/languages/javascript";
// import vue from "vue-highlight.js/lib/languages/vue";
import css from "highlight.js/lib/languages/css";

import VueDraggableResizable from "vue-draggable-resizable";
import { Plotly } from "@/index.js";

import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "highlight.js/styles/default.css";
import "highlight.js/styles/mono-blue.css";

const app = createApp(App);

app.component("vue-draggable-resizable", VueDraggableResizable);
app.component("plotly", Plotly);

app.use(hljsVuePlugin, {
  languages: {
    css,
    javascript,
    // vue
  }
});

app.mount('#app')

