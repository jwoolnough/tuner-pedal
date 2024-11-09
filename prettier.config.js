/** @type {import('prettier').Config & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^~/components/(.*)$", "^~/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
