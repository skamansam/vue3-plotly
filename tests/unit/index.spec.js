import { Plotly } from "@/index.js";
import PlotlyDirect from "@/components/Plotly.vue";
import { describe, expect, it } from "vitest";

describe("index.js", () => {
  it("expose Plotly as a property", () => {
    expect(Plotly).toBe(PlotlyDirect);
  });
});
