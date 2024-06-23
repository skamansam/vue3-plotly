/**
 * @jest-environment node
 */

import { createRenderer } from "@vue/server-renderer";
import Vue from "vue";
import Plotly from "@/components/Plotly.vue";

Vue.component("Plotly", Plotly);

const renderer = createRenderer();

const app = new Vue({
  name: "TestApp",
  template: `<plotly></plotly>`
});
let html;

describe("Plotly.vue in a ssr context", () => {
  beforeEach(async () => {
    html = await renderer.renderToString(app);
  });

  it("can be rendered", () => {
    const expected = '<div data-server-rendered="true"></div>';
    expect(html).toEqual(expected);
  });
});
