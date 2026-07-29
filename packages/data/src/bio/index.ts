import { type Bio } from "@fnc314/packages.types";

export const Biographies: Bio = {
  short:
    `<p>Senior Staff Android Architect with 11+ years of experience building mission-critical mobile systems. Expert in Kotlin, Gradle internals, and modular architecture, with a proven track record of scaling Android applications to 3.5M+ active users. Specialized in bridging the gap between complex system design and executive-level strategy to deliver resilient, "day-zero" technical foundations.</p>`,
  long: `<p class="accented md-typescale-body-large">Software Architect with over 11 years of experience specializing in software architecture, software solution architecture, and Android development. Currently focused on creating robust, scalable mobile systems that align with organizational goals.<br/><br/>With a proven ability to design resilient, modular technical foundations and lead cross-platform collaboration, supports teams in delivering high-quality applications. Dedicated to harmonizing development workflows and elevating technical standards through governance and mentorship.</p>`,
  extended: {
    opener: `
      I am a Principal Software Engineer and Mobile Architect with 10+ years of experience turning complex product ambitions into resilient, scalable systems. My specialties include enterprise Android, modular platforms, developer experience, and the standards that let teams move quickly without sacrificing quality or security.
    `,
    sections: [
      {
        title: "ARCHITECTURE THAT SCALES",
        content: {
          listLeadingParagraph: `
            During my tenure at PNC, I was the technical lead for their flagship Android application with 3.5 million monthly users.  My time in this role includes:
          `,
          list: [
            `Building the in-app payment platform Mobile Accept`,
            `Modernizing and modularizing the project repository cutting build times by 70%`,
            `Pioneering the adoption of design tokens and cross team governance for Android, Design, and iOS`,
            `Championing best practices helping a product redesign to launch with responsive layouts, dark mode support, and branded themes`,
            `Reducing onboarding time by 80% with carefully orchestrated, partially automated protocols`,
            `Stabilizing developer environments and CI/CD pipelines with multi-purpose Bash scripts`,
            `Simplifying dependency management thereby reducing auditing time up to 90%`,
          ]
        }
      },
      {
        title: "MULTIPLYING ENGINEERING EFFECTIVENESS",
        content: {
          content: `
            All of my success stories share core techniques: patterns designed to be comprehensible, repeatable, and maintainable. Enforcing conventions, introducing automations, and establishing quality standards are some of my primary means to accomplishing objectives.  This approach is documented from the perspective of modularization, build infrastructure, and developer-experience improvements within an inherited codebase in my seven-part <a href="https://fnc314.medium.com" target="_blank">Medium</a> series <b>Taming the Elephant Heard</b>.
          `,
        }
      },
      {
        title: "LEADERSHIP BEYOND THE CODEBASE",
        content: {
          content: `
            In addition to my technical capacities, I am deeply committed to widening access to technology opportunities for the next generation. I was a primary driver in launching CGI's I.T. Girl Challenge (now <a href="https://www.pghtech.org/Innovate_IT" target="_blank">CGI Innovate I.T. Challenge</a>), a scholarship program awarding a $20,000 prize to students, <a href="https://www.cgi.com/sites/default/files/2021-01/2021-cgi-it-girl-challenge-participant-guide_1.pdf" target="_blank">drafting key documentation</a> and onboarding Pittsburgh Public Schools and The Academy Charter School.
          `,
        }
      },
      {
        title: "LET'S BUILD WHAT'S NEXT",
        content: {
          content: `
            I am seeking an organization where I can translate technical strategy into lasting product and business value. I am open to Software Engineer/Architect roles at the Staff/Principal level and technical-leadership opportunities where mobile platforms, engineering excellence, and organizational scale matter. If you are seeking a leader who can establish a modern technical foundation while helping teams do their best work, I would welcome a conversation. Please connect with me here or through my website. Together, we can deliver exceptional software experiences that delight users and drive measurable growth. I bring passion, precision, and proven execution to every challenge.
          `,
        }
      }
    ],
  },
};
