import pluginVue from 'eslint-plugin-vue';
export default [
  ...pluginVue.configs['flat/strongly-recommended'],
  {
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
  }
];
