import postcssLit from "postcss-lit";

/** @type {import('postcss-load-config').ConfigFn} */
export default (ctx) => ({
  syntax: ctx.file?.match(/\.[jt]s$/) ? postcssLit : undefined,
  plugins: {},
});
