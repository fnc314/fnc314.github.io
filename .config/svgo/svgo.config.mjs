/** @type {import("svgo").Config} */
export default {
  multipass: true,
  // datauri: "base64",
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // CRITICAL: Prevent SVGO from deleting the viewBox.
          // Without it, your CSS variables won't scale fluidly!
          removeViewBox: false,
          cleanupNumericValues: { floatPrecision: 2 },
          convertPathData: { floatPrecision: 2 },
        },
      },
    },
    // Recommended for CSS variables: cuts down string lengths by removing xmlns attributes
    // "removeXMLNS"
  ]
};