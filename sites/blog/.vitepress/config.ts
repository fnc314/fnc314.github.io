import { defineConfig } from 'vitepress';


// https://vitepress.dev/reference/site-config
export default async () => {

  const workingDir = process.cwd().endsWith("blog") ?
    "" : "sites/blog/";

  const iconsDir = workingDir === "" ?
    "../../packages/design-tokens/assets/icons/organization" :
    "packages/design-tokens/assets/icons/organization"

  console.log(
    JSON.stringify(
      {
        "process.cwd": process.cwd(),
        workingDir,
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
    // dir: "",
    // outDir: "dist/vitepress/blog",
    // srcDir: "",
    cleanUrls: true,
    vite: {
      base: "/",
      // root: "sites/blog",
      configFile: `${workingDir}.config/vite/vite.config.ts`,
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
    },
    themeConfig: {
      externalLinkIcon: true,
      lastUpdated: {
        formatOptions: {
          dateStyle: "full",
          timeStyle: "full",
          timeZoneName: "longOffset",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          dayPeriod: "long",
          era: "long",
          weekday: "long",
        },
      },
      logo: {
        src: "",
        dark: "",
        light: "",
        alt: "Blog Site Logo",
      },
      logoLink: {
        link: "https://www.fnc314.com/blog",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      notFound: {
        linkLabel: "Return to https://blog.fnc314.dev",
        linkText: "Get Outta Here",
        quote: "This is not the page you're looking for...",
        title: "Not Found",
        code: "404",
      },
      outline: "deep",
      socialLinks: [
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
