import { type BlogEntryJson, type BlogSeriesData, type PublicationItem } from "@fnc314/packages.types";

export const Blogs: BlogEntryJson[] = [
  {
    id: "019d2e6c-355b-5749-7296-9e4d23385fc6",
    series: {
      entry: 1,
      title: "Taming the Elephant Herd",
    },
    title: "From Mayhem to Micro-Managed",
    summary:
      "A deep dive into migrating scattered dependencies to a centralized Version Catalog (.toml) and taming fragile build infrastructure in large-scale multi-module applications.",
    mediumUrl: "https://medium.com/@fnc314/taming-the-elephant-herd-from-mayhem-to-micro-managed-be02d1f58aa8",
    tags: ["Gradle", "Android Developer", "Android Gradle Plugin", "Android"],
    blogDotDevUrl: "https://blog.fnc314.dev/posts/taming-the-elephant-herd/01-from-mayhem-to-micro-managed/index",
  },
  {
    id: "019d373f-6a75-c7b4-c630-a259f07cd762",
    series: {
      entry: 2,
      title: "Taming the Elephant Herd",
    },
    title: "Establishing Existing Order",
    summary:
      "Strategies for drawing hard architectural boundaries, uncoupling inherited black-box code, and establishing directory-level modularization to speed up parallel feature development.",
    mediumUrl: "https://medium.com/@fnc314/taming-the-elephant-herd-establishing-existing-order-6dc2aa452571",
    tags: ["Gradle", "Android Developer", "Android Gradle Plugin", "Android"],
    blogDotDevUrl: "https://blog.fnc314.dev/posts/taming-the-elephant-herd/02-establishing-existing-order/index",
  },
  {
    id: "019d373f-8a35-d7d6-72d0-dfdcdfbbcdc2",
    series: {
      entry: 3,
      title: "Taming the Elephant Herd",
    },
    title: "Plugins Over Copy-Paste",
    summary:
      "Eliminating <pre>build.gradle.kts</pre> boilerplate by abstracting configuration logic into custom Gradle plugins and extension functions for fine-grained sub-project control.",
    mediumUrl: "https://medium.com/@fnc314/taming-the-elephant-herd-plugins-over-copy-paste-6fcb83c596a7",
    tags: ["Gradle", "Android Developer", "Android Gradle Plugin", "Android"],
    blogDotDevUrl: "https://blog.fnc314.dev/posts/taming-the-elephant-herd/03-plugins-over-copy-paste/index",
  },
  {
    id: "019d3840-8c09-c722-36a8-2218697f8ef2",
    series: {
      entry: 4,
      title: "Taming the Elephant Herd",
    },
    title: "Into the Wider Infrastructure",
    summary:
      "Navigating resource limits and harmonizing the Android Gradle build with external CI/CD pipelines, platform-agnostic distribution tools, and automated signing processes.",
    mediumUrl: "https://medium.com/@fnc314/taming-the-elephant-herd-into-the-wider-infrastructure-4ffcd2865901",
    tags: ["Gradle", "Android Developer", "Android Gradle Plugin", "Android"],
    blogDotDevUrl: "https://blog.fnc314.dev/posts/taming-the-elephant-herd/04-into-the-wider-infrastructure/index",
  },
  {
    id: "019d3892-b181-07dc-2aeb-e3346efe7a1f",
    series: {
      entry: 5,
      title: "Taming the Elephant Herd",
    },
    title: "Right Tool for the Job",
    summary:
      "Leveraging Gradle Composite Builds and automated Dokka integrations to create a deterministic, highly-praised internal tooling ecosystem that eliminates deprecation warnings.",
    mediumUrl: "https://medium.com/@fnc314/taming-the-elephant-herd-right-tool-for-the-job-27f7f7ea3d57",
    tags: ["Gradle", "Android Developer", "Android Gradle Plugin", "Android"],
    blogDotDevUrl: "https://blog.fnc314.dev/posts/taming-the-elephant-herd/05-right-tool-for-the-job/index",
  },
  {
    id: "019d3892-b655-2753-4a5d-41cb13148ffd",
    series: {
      entry: 6,
      title: "Taming the Elephant Herd",
    },
    title: "Screaming and Scripted Architecture",
    summary:
      'Achieving a "DX-Complete" repository using interactive Bash scripting workflows to automate developer onboarding, standardize contribution patterns, and instantly nuke/restore local environments.',
    mediumUrl: "https://medium.com/@fnc314/taming-the-elephant-herd-screaming-and-scripted-architecture-49c449e84e20",
    tags: ["Gradle", "Android Developer", "Android Gradle Plugin", "Android"],
    blogDotDevUrl: "https://blog.fnc314.dev/posts/taming-the-elephant-herd/06-screaming-and-scripted-architecture/index",
  },
  {
    id: "019d3892-bfa7-8761-de82-94078b4007f4",
    series: {
      entry: 7,
      title: "Taming the Elephant Herd",
    },
    title: "To Future States and Beyond",
    summary:
      "From the pressure of ever-changing business requirements, we undertake the final phase of the elephant herd taming process.",
    mediumUrl: "https://fnc314.medium.com/07-taming-the-elephant-herd-to-future-states-and-beyond-2f9fb794d6ee",
    tags: ["Gradle", "Android Developer", "Android Gradle Plugin", "Android"],
    blogDotDevUrl: "https://blog.fnc314.dev/posts/taming-the-elephant-herd/07-to-future-states-and-beyond/index",
  },
];

export const BlogSeries: BlogSeriesData[] = [
  {
    id: "taming-the-elephant-herd",
    title: "Taming the Elephant Herd",
    description:
      "An in-depth 7-part engineering series recounting the real-world architectural transformation, modularization, build optimization, and developer experience overhaul of large enterprise Android Gradle codebases.",
    entries: Blogs.filter((b) => b.series?.title === "Taming the Elephant Herd").sort(
      (a, b) => (a.series?.entry ?? 0) - (b.series?.entry ?? 0)
    ),
  },
];

export const StandaloneBlogs: BlogEntryJson[] = Blogs.filter((b) => !b.series);

export const Publications: PublicationItem[] = [
  ...BlogSeries.map((series): PublicationItem => ({ type: "series", series })),
  ...StandaloneBlogs.map((post): PublicationItem => ({ type: "post", post })),
];
