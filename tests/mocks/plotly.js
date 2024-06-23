import { vi } from 'vitest'
export default {
  Plots: {
    resize: vi.fn()
  },
  plot: vi.fn(),
  newPlot: vi.fn(element => {
    element.on = vi.fn();
    element.removeAllListeners = vi.fn();
  }),
  react: vi.fn(),
  relayout: vi.fn(),
  restyle: vi.fn(),
  update: vi.fn(),
  purge: vi.fn(),
  addTraces: vi.fn(),
  deleteTraces: vi.fn(),
  moveTraces: vi.fn(),
  extendTraces: vi.fn(),
  prependTraces: vi.fn(),
  toImage: vi.fn(),
  downloadImage: vi.fn()
};
