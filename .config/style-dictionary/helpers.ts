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


/**
 * Safely encodes raw SVG content for CSS utf8 Data URIs
 *
 * @param {string} svg
 * @returns {*}
 */
export const encodeSvgToUtf8 = (svg: string) =>
  svg.replace(/"/g, "'").replace(/%/g, '%25').replace(/#/g, '%23').replace(/{/g, '%7B').replace(/}/g, '%7D').replace(/</g, '%3C').replace(/>/g, '%3E').replace(/\s+/g, ' ').trim();
