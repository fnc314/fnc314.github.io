import { IdAttributePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

/** @param {import("@11ty/eleventy/UserConfig").default} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.setQuietMode(false);
  eleventyConfig.addPlugin(IdAttributePlugin, {
    checkDuplicates: "error",
  });
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
    errorOnInvalidLanguage: true,
    languages: ["ts"],
    preAttributes: {
      "data-language": ({ language }) => language,
    },
    codeAttributes: {},
  });
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: ["html", "md"],

    // output image formats
    formats: ["avif", "webp", "jpeg"],

    // output image widths
    widths: ["auto"],

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {},
    },
  });
}
