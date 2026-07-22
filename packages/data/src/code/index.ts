import { type CodeRepoData } from "@fnc314/packages.types";

export const Projects: CodeRepoData[] = [
  {
    name: "project-collections-gradle-settings-plugin",
    tech: [
      {
        name: "Gradle",
        url: "https://docs.gradle.org/",
        designToken: {
          dark: "--icons-logos-tech-gradle-dark-icon-svg",
          light: "--icons-logos-tech-gradle-light-icon-svg",
        },
        popoverContent: "JVM Build Tool for Java, Kotlin, Android, and more"
      },
      {
        name: "Kotlin",
        url: "https://kotlinlang.org/",
        designToken: {
          dark: "--icons-logos-tech-kotlin-dark-icon-svg",
          light: "--icons-logos-tech-kotlin-light-icon-svg",
        },
        popoverContent: "JetBrains' modern JVM languange"
      },
    ],
    url: "https://github.com/fnc314/project-collections-gradle-settings-plugin",
    repo: "fnc314/project-collections-gradle-settings-plugin",
    description:
      "A custom Gradle Settings plugin written in Kotlin that aggressively reduces boilerplate configuration by automating <pre>Settings.include</pre> invocations for deeply nested, multi-module project architectures.",
  },
  {
    name: "mac-os-env-scripts",
    tech: [
      {
        name: "Bash",
        url: "https://www.gnu.org/software/bash/",
        designToken: {
          dark: "--icons-logos-tech-bash-dark-icon-svg",
          light: "--icons-logos-tech-bash-light-icon-svg",
        },
        popoverContent: "Shell scripting"
      },
      {
        name: "Oh-My-Zsh",
        url: "https://ohmyz.sh/",
        designToken: {
          dark: "--icons-logos-tech-zsh-dark-icon-svg",
          light: "--icons-logos-tech-zsh-light-icon-svg",
        },
        popoverContent: "Shell scripting"
      },
    ],
    url: "https://github.com/fnc314/mac-os-env-scripts",
    repo: "fnc314/mac-os-env-scripts",
    description:
      "A suite of interactive <pre>Bash/Zsh</pre> scripts engineered to standardize developer environments, automate repetitive CLI workflows, and instantly restore broken local states.",
  },
  {
    name: "fnc314-kmp",
    tech: [
      {
        name: "Android",
        url: "https://developer.android.com/",
        designToken: {
          dark: "--icons-logos-tech-android-dark-icon-svg",
          light: "--icons-logos-tech-android-light-icon-svg",
        },
        popoverContent: "World's most used, open-source operating system",
      },
      {
        name: "Gradle",
        url: "https://docs.gradle.org/",
        designToken: {
          dark: "--icons-logos-tech-gradle-dark-icon-svg",
          light: "--icons-logos-tech-gradle-light-icon-svg",
        },
        popoverContent: "JVM Build Tool for Java, Kotlin, Android, and more",
      },
      {
        name: "Kotlin",
        url: "https://kotlinlang.org/",
        designToken: {
          dark: "--icons-logos-tech-kotlin-dark-icon-svg",
          light: "--icons-logos-tech-kotlin-light-icon-svg",
        },
        popoverContent: "JetBrains' modern JVM languange",
      },
    ],
    url: "https://github.com/fnc314/fnc314-kmp",
    repo: "fnc314/fnc314-kmp",
    description:
      'An exploratory <abbr title="Kotlin Multiplatform">KMP</abbr> architecture demonstrating shared business logic, state management, and build infrastructure across native client targets.',
  },
  {
    name: "fnc314.github.io",
    tech: [
      {
        name: "Mise",
        url: "https://mise.jdx.dev/",
        designToken: {
          dark: "--icons-logos-tech-mise-dark-icon-svg",
          light: "--icons-logos-tech-mise-light-icon-svg",
        },
        popoverContent: "Development Environment Tool Manager",
      },
      {
        name: "PNPM",
        url: "https://pnpm.io/",
        designToken: {
          dark: "--icons-logos-tech-pnpm-dark-icon-svg",
          light: "--icons-logos-tech-pnpm-light-icon-svg",
        },
        popoverContent: "Alternative `Node` package manager",
      },
      {
        name: "Vite",
        url: "https://vite.dev/",
        designToken: {
          dark: "--icons-logos-tech-vite-dark-icon-svg",
          light: "--icons-logos-tech-vite-light-icon-svg",
        },
        popoverContent: "Modern JavaScript toolchain based on Rust",
      },
      {
        name: "Lit",
        url: "https://lit.dev/",
        designToken: {
          dark: "--icons-logos-tech-lit-dark-icon-svg",
          light: "--icons-logos-tech-lit-light-icon-svg",
        },
        popoverContent: "JavaScript library for building Web Components",
      },
      {
        name: "TypeScript",
        url: "https://typescriptlang.org/",
        designToken: {
          dark: "--icons-logos-tech-typescript-dark-icon-svg",
          light: "--icons-logos-tech-typescript-light-icon-svg",
        },
        popoverContent: "Microsoft's modern JavaScript superset language",
      },
      {
        name: "Style Dictionary",
        url: "https://styledictionary.com/",
        designToken: {
          dark: "--icons-logos-tech-style-dictionary-dark-icon-svg",
          light: "--icons-logos-tech-style-dictionary-light-icon-svg",
        },
        popoverContent: "NPM Package for generating design tokens from `json` files",
      },
      {
        name: "Material Components",
        url: "https://github.com/material-components/material-web",
        // repo: "material-components/material-web",
        designToken: {
          dark: "--icons-logos-tech-material-design-dark-icon-svg",
          light: "--icons-logos-tech-material-design-light-icon-svg",
        },
        popoverContent: "Web Components library adhering to Material Design principles",
      },
      {
        name: "Node",
        url: "https://nodejs.org/",
        designToken: {
          dark: "--icons-logos-tech-node-dark-icon-svg",
          light: "--icons-logos-tech-node-light-icon-svg",
        },
        popoverContent: "JavaScript Runtime"
      },
      {
        name: "Material Theme Builder",
        url: "https://material-foundation.github.io/material-theme-builder/",
        designToken: {
          dark: "--icons-logos-tech-material-design-dark-icon-svg",
          light: "--icons-logos-tech-material-design-light-icon-svg",
        },
        popoverContent: "Online tool to generate Material Theme colors from provided images",
      },
      {
        name: "HTML/CSS/JS",
        url: "https://developer.mozilla.org/",
        designToken: {
          dark: "--icons-logos-tech-web-html-dark-icon-svg",
          light: "--icons-logos-tech-web-html-light-icon-svg",
        },
        popoverContent: [
          "HTML5",
          "CSS",
          "JavaScript",
        ]
      },
      {
        name: "Prettier",
        url: "https://prettier.io/",
        designToken: {
          dark: "--icons-logos-tech-prettier-dark-icon-svg",
          light: "--icons-logos-tech-prettier-light-icon-svg",
        },
        popoverContent: "Formatting library for Node",
      },
      {
        name: "ESLint",
        url: "https://eslint.org/",
        designToken: {
          dark: "--icons-logos-tech-eslint-dark-icon-svg",
          light: "--icons-logos-tech-eslint-light-icon-svg",
        },
        popoverContent: "Linting library for Node",
      },
      {
        name: "Typescript-ESLint",
        url: "https://typescript-eslint.io/",
        designToken: {
          dark: "--icons-logos-tech-typescript-eslint-dark-icon-svg",
          light: "--icons-logos-tech-typescript-eslint-light-icon-svg",
        },
        popoverContent: "TypeScript Linting library for Node",
      },
      {
        name: "StyleLint",
        url: "https://stylelint.io/",
        designToken: {
          dark: "--icons-logos-tech-stylelint-dark-icon-svg",
          light: "--icons-logos-tech-stylelint-light-icon-svg",
        },
        popoverContent: "Formatting library for Node",
      },
      {
        name: "PostCSS",
        url: "https://postcss.org/",
        designToken: {
          dark: "--icons-logos-tech-postcss-dark-icon-svg",
          light: "--icons-logos-tech-postcss-light-icon-svg",
        },
        popoverContent: "CSS processing library for Node",
      },
    ],
    url: "https://github.com/fnc314/fnc314.github.io",
    repo: "fnc314/fnc314.github.io",
    description: 'Portfolio page found at <a href="https://fnc314.com/" target="_blank">fnc314.com</a> (this site)',
  },
  {
    name: "material-theme-viewer",
    tech: [
      {
        name: "HTML/CSS/JS",
        url: "https://developer.mozilla.org/",
        designToken: {
          dark: "--icons-logos-tech-web-html-dark-icon-svg",
          light: "--icons-logos-tech-web-html-light-icon-svg",
        },
        popoverContent: [
          "HTML5",
          "CSS",
          "JavaScript",
        ]
      },
      {
        name: "Material Theme Builder",
        url: "https://material-foundation.github.io/material-theme-builder/",
        designToken: {
          dark: "--icons-logos-tech-material-design-dark-icon-svg",
          light: "--icons-logos-tech-material-design-light-icon-svg",
        },
        popoverContent: "Online tool to generate Material Theme colors from provided images",
      },
    ],
    url: "https://github.com/fnc314/material-theme-viewer",
    repo: "fnc314/material-theme-viewer",
    description:
      'Displays the output of <a href="https://material-foundation.github.io/material-theme-builder/" target="_blank">Material Theme Builder</a> in a simple tabbed interface',
  },
  {
    name: "project_euler",
    tech: [
      {
        name: "Python",
        url: "https://python.org/",
        designToken: {
          dark: "--icons-logos-tech-python-dark-icon-svg",
          light: "--icons-logos-tech-python-light-icon-svg",
        },
        popoverContent: "Popular scripting language",
      },
      {
        name: "Ruby",
        url: "https://www.ruby-lang.org/en/",
        designToken: {
          dark: "--icons-logos-tech-ruby-dark-icon-svg",
          light: "--icons-logos-tech-ruby-light-icon-svg",
        },
        popoverContent: "Formerly popular scripting language",
      },
    ],
    url: "https://github.com/fnc314/project_euler",
    repo: "fnc314/project_euler",
    description: 'Solutions to various <a href="https://projecteuler.net/" target="_blank">Project Euler</a> problems',
  },
];
