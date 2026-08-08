import { type BioExtended } from "@fnc314/packages.types";

export const Biography: BioExtended = {
  opener: `
    I am a Principal Android Software Engineer with 10+ years of experience defining technical strategy and architecture for large-scale mobile platforms. Proven track record of leading cross-functional teams through major architectural transformations across Android and distributed backend systems. Trusted by leadership to foster engineering excellence, standardize best practices, reduce technical debt, and align technical initiatives with business value.
  `,
  sections: [
    {
      title: "Architecture That Drives Scale",
      content: {
        listLeadingParagraph: `
          During my tenure at PNC, I was the technical lead for their flagship Android application with 3.5 million monthly users. My time in this role includes:
        `,
        list: [
          `Building the in-app payment platform Mobile Accept`,
          `Modernizing and modularizing the repository, cutting build times by 70%`,
          `Pioneering cross-team design token governance for Android, iOS, and Design`,
          `Championing best practices, helping a product redesign launch with responsive layouts`,
          `Reducing onboarding time by 80% with carefully orchestrated protocols`,
          `Stabilizing developer environments and CI/CD pipelines with multi-purpose scripts`,
          `Simplifying dependency management, thereby reducing auditing time up to 90%`,
        ],
      },
    },
    {
      title: "Multiplying Engineering Effectiveness",
      content: {
        content: `
          All of my success stories share core techniques: patterns designed to be comprehensible, repeatable, and maintainable. Enforcing conventions, introducing automations, and establishing quality standards are some of my primary means to accomplishing objectives. This approach is documented in my seven-part <a href="https://fnc314.medium.com" target="_blank">Medium series <b>Taming the Elephant Heard</b></a>.
        `,
      },
    },
    {
      title: "Leadership Beyond The Codebase",
      content: {
        content: `
          In addition to my technical capacities, I am deeply committed to widening access to technology opportunities for the next generation. I was a primary driver in launching CGI’s I.T. Girl Challenge (now <a href="https://www.pghtech.org/Innovate_IT" target="_blank">CGI Innovate I.T. Challenge</a>), a scholarship program awarding a $20,000 prize to students, <a href="https://files.fnc314.com/pdfs/2021-cgi-it-girl-challenge-participant-guide_1.pdf" target="_blank">drafting key documentation</a> and onboarding Pittsburgh Public Schools and The Academy Charter School.
        `,
      },
    },
    {
      title: "Let's Build What's Next",
      content: {
        content: `
          I am seeking an organization where I can translate technical strategy into lasting product and business value. I am open to Software Engineer/Architect roles at the Staff/Principal level and technical-leadership opportunities where mobile platforms, engineering excellence, and organizational scale matter. If you are seeking a leader who can establish a modern technical foundation while helping teams do their best work, I would welcome a conversation. Please connect with me here or through my website. Together, we can deliver exceptional software experiences that delight users and drive measurable growth. I bring passion, precision, and proven execution to every challenge.
        `,
      },
    },
  ],
};
