import { defineConfig } from 'vitepress';


// https://vitepress.dev/reference/site-config
export default async () => {

  // Determine if VitePress is running from monorepo root or nested app root
  const isNestedRun = process.cwd().endsWith("blog");

  // Fix: If running "vitepress build sites/blog", process.cwd() is the root,
  // but VitePress shifts its internal execution root to "sites/blog".
  // Therefore, srcDir should just be "." because VitePress is already inside "sites/blog".
  const srcDir = ".";

  // Keep your monorepo-root relative asset paths intact
  const iconsDir = isNestedRun ?
    "../../packages/design-tokens/assets/icons/logos/organization" :
    "packages/design-tokens/assets/icons/logos/organization";

  console.log(
    JSON.stringify(
      {
        "process.cwd": process.cwd(),
        isNestedRun,
        iconsDir,
      },
      null,
      2
    )
  );

  return defineConfig({
    title: "Franco's Blog",
    description: "Blog Site",
    lang: "en-US",
    lastUpdated: true,
    base: "/",
    dir: srcDir,
    srcDir: srcDir,
    cleanUrls: true,
    assetsDir: "static",
    metaChunk: true,
    vite: {
      base: "/",
      // Ensure Vite resolves correctly relative to your command execution
      root: isNestedRun ? process.cwd() : `${process.cwd()}/sites/blog`,
      configFile: isNestedRun ? ".config/vite/vite.config.ts" : "sites/blog/.config/vite/vite.config.ts",
    },
    vue: {
      features: {
        customElement: false,
        prodHydrationMismatchDetails: true,
        propsDestructure: true,
      }
    },
    markdown: {
      breaks: true,
      lineNumbers: true,
      typographer: true,
      image: {
        lazyLoading: true,
      },
      theme: {
        light: "one-light",
        dark: "material-theme-ocean",
        semanticHighlighting: true,
        settings: [
          {
            name: "typography",
            scope: "",
            settings: {
              fontStyle: "monospace",
              background: "white",
              foreground: "black",
            }
          }
        ]
      },
    },
    sitemap: {
      hostname: "https://blog.fnc314.dev",
      lastmodDateOnly: true,
    },
    themeConfig: {
      footer: {
        copyright: `Franco N. Colaizzi - &copy; ${new Date().getUTCFullYear()}`,
        message: `All Rights Reserved - <a href="/">Home</a>`,
      },
      nav: [],
      siteTitle: false,
      externalLinkIcon: true,
      lastUpdated: {
        text: "Updated on",
        formatOptions: {
          dateStyle: "full",
          timeStyle: "full",
          // timeZoneName: "longOffset",
          // day: "2-digit",
          // month: "2-digit",
          // year: "numeric",
          // hour: "2-digit",
          // minute: "2-digit",
          // second: "2-digit",
          // hour12: false,
          // dayPeriod: "long",
          // era: "long",
          // weekday: "long",
        },
      },
      darkModeSwitchLabel: "Dark Mode",
      darkModeSwitchTitle: "Switch to Dark Mode",
      returnToTopLabel: "",
      logo: {
        src: `./static/icon.svg`,
        dark: `./static/icon.svg`,
        light: `./static/icon.svg`,
        alt: "Blog Site Logo",
      },
      logoLink: {
        link: "/",
        rel: "noopener noreferrer",
        // target: "_blank",
      },
      notFound: {
        linkLabel: "Return to https://blog.fnc314.dev",
        linkText: "Get Outta Here",
        quote: "This is not the page you're looking for...",
        title: "Not Found",
        code: "404",
      },
      outline: {
        level: "deep",
        label: "Outline"
      },
      search: {
        provider: "local",
        options: {
          disableQueryPersistence: true,
          miniSearch: {
            searchOptions: {
              weights: {
                fuzzy: 0.5,
                prefix: 0.5,
              },
            },
          }
        }
      },
      socialLinks: [
        {
          icon: "sites/blog/static/icon.svg",
          link: "/",
          ariaLabel: "Link to Portfolio Site"
        },
        {
          icon: `${iconsDir}/github/github-mask.svg`,
          link: "https://www.github.com/fnc314",
          ariaLabel: "Link to GitHub"
        },
        {
          icon: `${iconsDir}/linkedin/linkedin-mask.svg`,
          link: "https://www.linkedin.com/in/fnc314",
          ariaLabel: "Link to LinkedIn"
        },
        {
          icon: `${iconsDir}/medium/medium-mask.svg`,
          link: "https://fnc314.medium.com",
          ariaLabel: "Link to Medium"
        },
      ],
    }
  });
};
