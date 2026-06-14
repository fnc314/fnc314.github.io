/** @type {import('postcss-load-config').ConfigFn} */
export default (ctx) => ({
  syntax: ctx.file?.match(/\.[jt]s$/) ? "postcss-lit" : undefined,
  plugins: {
    "@tailwindcss/postcss": {},
  },
});
