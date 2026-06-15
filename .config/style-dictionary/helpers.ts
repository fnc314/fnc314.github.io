import StyleDictionary from "style-dictionary";

export const materialParser = StyleDictionary.registerParser({
  name: "material-theme-builder-parser",
  pattern: /\.mtb\.json$/,
  parser: ({ contents }) => {
    const raw = JSON.parse(contents);
    const tokens = {
      schemes: {}
    };

    if (raw.schemes) {
      for (const schemeName in raw.schemes) {
        if (Object.prototype.hasOwnProperty.call(raw.schemes, schemeName)) {
          tokens.schemes[schemeName] = {};
          for (const colorRole in raw.schemes[schemeName]) {
            if (Object.prototype.hasOwnProperty.call(raw.schemes[schemeName], colorRole)) {
              tokens.schemes[schemeName][colorRole] = { value: raw.schemes[schemeName][colorRole] };
            }
          }
        }
      }
    }
    return tokens;
  }
});