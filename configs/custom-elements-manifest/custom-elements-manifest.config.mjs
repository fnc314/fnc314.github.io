import { cemInheritancePlugin } from "@wc-toolkit/cem-inheritance";
import { cemSorterPlugin } from "@wc-toolkit/cem-sorter";
import { cemValidatorPlugin } from "@wc-toolkit/cem-validator";
import { jsDocTagsPlugin } from "@wc-toolkit/jsdoc-tags";
import { typeParserPlugin } from "@wc-toolkit/type-parser";
import { jsdocExamplePlugin } from "cem-plugin-jsdoc-example";
import { readmePlugin } from "cem-plugin-readme";
import path from "node:path";

/**
 * Generates a localized Custom Elements Manifest configuration.
 * @param {Object} options
 * @param {string} options.packageRoot - Absolute path to the consumer package root (usually process.cwd())
 * @param {string} options.docsDir - Relative or absolute path where documentation assets are emitted
 * @param {string} options.manifestFileName - Name of the output manifest file
 * @param {boolean} [options.isDev=false] - Development flag for verbose plugin debugging
 */
export function createCemConfig({ packageRoot, docsDir, manifestFileName, isDev = false }) {
  const resolveLocal = (...segments) => path.resolve(packageRoot, ...segments);
  const manifestJSONPath = path.join(docsDir, manifestFileName);

  return {
    globs: ["src/**/*.ts"],
    exclude: ["src/**/*.test.ts"],
    fast: false,
    outdir: docsDir,
    dev: false,
    dependencies: true,
    packagejson: false,
    litelement: true,
    plugins: [
      cemValidatorPlugin({
        packageJsonPath: resolveLocal("package.json"),
        cemFileName: manifestJSONPath,
        logErrors: true,
        rules: { manifest: { schemaVersion: "warning" } },
      }),
      jsdocExamplePlugin(),
      cemSorterPlugin({ fileName: manifestJSONPath, outdir: docsDir, deprecatedLast: true }),
      cemInheritancePlugin({ fileName: manifestJSONPath, outdir: docsDir }),
      jsDocTagsPlugin({ debug: isDev }),
      typeParserPlugin({
        debug: isDev,
        parseObjectTypes: "partial",
        parseParameters: true,
        propertyName: "parsedType",
      }),
      readmePlugin({ from: packageRoot, to: path.join(docsDir, "README.md"), headingOffset: 0 }),
    ].filter(Boolean),
  };
}
