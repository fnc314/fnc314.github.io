import process from "node:process";
import { LogLevel } from "typedoc";

/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
export default {
  // $schema: "https://typedoc.org/schema.json",
  // help: true,
  // showConfig: true,
  // version: true,
  cacheBust: true,
  cleanOutputDir: true,
  cname: "www.fnc314.com",
  commentStyle: "all",
  darkHighlightTheme: "material-theme-darker",
  disableSources: false,
  displayBasePath: "",
  emit: "both",
  entryPoints: [
    `${process.cwd()}/src/*`,
  ],
  entryPointStrategy: "expand",
  exclude: [
    "**/node_modules/**",
  ],
  excludeExternals: true,
  excludeNotDocumented: true,
  excludePrivate: false,
  excludePrivateClassFields: false,
  excludeProtected: false,
  externalSymbolLinkMappings: {
    "@material/web": {
      "MdDialog": "https://github.com/material-components/material-web/tree/main/docs/components/dialog.md",
      "MdFab": "https://github.com/material-components/material-web/tree/main/docs/components/fab.md",
      "MdTabs": "https://github.com/material-components/material-web/blob/main/docs/components/tabs.md",
      "MdPrimaryTabs": "https://github.com/material-components/material-web/blob/main/docs/components/tabs.md",
    },
    "material-symbols": {
      "MaterialSymbol": "https://github.com/marella/material-symbols/tree/main/material-symbols",
    }
  },
  favicon: `${process.cwd()}/assets/icons/icon.svg`,
  formatWithPrettier: true,
  githubPages: true,
  gitRevision: "{branch}",
  headings: {
    document: true,
    readme: true,
  },
  highlightLanguages: [
    "css",
    "html",
    "javascript",
    "json",
    "lit",
    "typescript",
  ],
  includeHierarchySummary: true,
  includeVersion: true,
  jsDocCompatibility: true,
  lang: "en",
  lightHighlightTheme: "material-theme-lighter",
  logLevel: LogLevel.Verbose,
  markdownLinkExternal: true,
  mergeReadme: true,
  name: "@fnc314/com.fnc314.website",
  navigation: {
    compactFolders: false,
    includeCategories: true,
    includeFolders: true,
    includeGroups: true,
  },
  outputs: [
    {
      name: "html",
      path: `${process.cwd()}/docs/typedoc/html`,
    },
    {
      name: "json",
      path: `${process.cwd()}/docs/typedoc/json`,
    },
    {
      name: "markdown",
      path: `${process.cwd()}/docs/typedoc/markdown`,
    }
  ],
  // packageOptions: {
  //   includeVersion: true,
  //   disableSources: false,
  // },
  plugin: [
    "typedoc-color-chip",
    "typedoc-github-wiki-theme",
    // "typedoc-material-theme",
    "typedoc-plugin-coverage",
    "typedoc-plugin-extras",
    "typedoc-plugin-frontmatter",
    "typedoc-plugin-markdown",
    "typedoc-plugin-mdn-links",
    "typedoc-plugin-version-header",
  ],
  pretty: true,
  projectDocuments: [
    `${process.cwd()}/docs/wca/markdown/*.md`,
  ],
  readme: `${process.cwd()}/docs/wca/markdown/README.md`,
  searchInComments: true,
  searchInDocuments: true,
  skipErrorChecking: true,
  sort: [
    "visibility",
    "source-order",
    "alphabetical",
  ],
  sortEntryPoints: true,
  sourceLinkExternal: true,
  tsconfig: `${process.cwd()}/tsconfig.json`,
  typePrintWidth: 2,
  useFirstParagraphOfCommentAsSummary: true,
  useTsLinkResolution: true,
  validation: {
    invalidLink: true,
    invalidPath: true,
    notDocumented: true,
    notExported: true,
    rewrittenLink: true,
    unusedMergeModuleWith: true,
  },
};
