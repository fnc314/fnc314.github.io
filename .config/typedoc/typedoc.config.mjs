import process from "node:process";
import { LogLevel } from "typedoc";

/** @type {Partial<import("typedoc").TypeDocOptions>} */
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
    `${process.cwd()}/src/**/*.{js,ts}`,
  ],
  entryPointStrategy: "expand",
  excludeNotDocumented: true,
  excludePrivate: false,
  excludePrivateClassFields: false,
  excludeProtected: false,
  favicon: `${process.cwd()}/assets/icons/icon.svg`,
  githubPages: true,
  headings: {
    document: true,
    readme: true,
  },
  highlightLanguages: [
    "css",
    "html",
    "javascript",
    "typescript",
  ],
  includeVersion: true,
  jsDocCompatibility: true,
  json: `${process.cwd()}/docs/typedoc/typedoc.json`,
  lang: "en",
  lightHighlightTheme: "material-theme-lighter",
  logLevel: LogLevel.Verbose,
  markdownLinkExternal: true,
  name: "@fnc314/com.fnc314.website",
  navigation: {
    compactFolders: false,
    includeCategories: true,
    includeFolders: true,
    includeGroups: true,
  },
  out: `${process.cwd()}/docs/typedoc`,
  packageOptions: {
    includeVersion: true,
    disableSources: false,
  },
  plugin: [
    "typedoc-material-theme"
  ],
  pretty: true,
  projectDocuments: [
    `${process.cwd()}/docs/wca/markdown/*.md`
  ],
  readme: `${process.cwd()}/README.md`,
  searchInComments: true,
  searchInDocuments: true,
  sidebarLinks: {},
  sortEntryPoints: true,
  sourceLinkExternal: true,
  theme: "material-theme",
  tsconfig: `${process.cwd()}/tsconfig.json`,
  typePrintWidth: 2,
  useFirstParagraphOfCommentAsSummary: true,
  useTsLinkResolution: true,
  validation: true,
};
