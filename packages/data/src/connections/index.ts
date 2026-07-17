import {
    type ArtifactConnectionData,
    type ConnectionInstance,
    type ProfessionalConnectionJsonData,
} from "@fnc314/packages.types";

export const Connections: {
  direct: {
    phone: ConnectionInstance;
    email: ConnectionInstance;
  };
  social: {
    linkedIn: ProfessionalConnectionJsonData;
    github: ProfessionalConnectionJsonData;
    medium: ProfessionalConnectionJsonData;
  };
  resume: {
    googleDoc: ArtifactConnectionData;
    pdf: ArtifactConnectionData;
  };
} = {
  direct: {
    phone: {
      label: "Call",
      href: "tel:+14127219550",
      text: "412-721-9550",
      mdIcon: "call",
      title: "Call or text me directly",
      designToken: {
        dark: "--md-icons-call-dark-icon-svg",
        light: "--md-icons-call-light-icon-svg",
      },
    },
    email: {
      label: "Email",
      href: "mailto:fnc314@gmail.com",
      text: "fnc314@gmail.com",
      mdIcon: "mail",
      title: "Send me an email",
      designToken: {
        dark: "--md-icons-mail-dark-icon-svg",
        light: "--md-icons-mail-light-icon-svg",
      },
    },
  },
  social: {
    linkedIn: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fnc314",
      designToken: {
        dark: "--icons-logos-organization-linkedin-dark-icon-svg",
        light: "--icons-logos-organization-linkedin-light-icon-svg",
        mask: "--icons-logos-organization-linkedin-mask-icon-svg",
      },
      title: "Review professional profile on LinkedIn",
    },
    github: {
      label: "GitHub",
      href: "https://www.github.com/fnc314",
      designToken: {
        dark: "--icons-logos-organization-github-dark-icon-svg",
        light: "--icons-logos-organization-github-light-icon-svg",
        mask: "--icons-logos-organization-github-mask-icon-svg",
      },
      title: "See open source code on GitHub",
    },
    medium: {
      label: "Medium",
      href: "https://fnc314.medium.com",
      designToken: {
        dark: "--icons-logos-organization-medium-dark-icon-svg",
        light: "--icons-logos-organization-medium-light-icon-svg",
        mask: "--icons-logos-organization-medium-mask-icon-svg",
      },
      title: "Read publications on Medium",
    },
  },
  resume: {
    googleDoc: {
      label: "Google Docs",
      href: "https://docs.google.com/document/d/e/2PACX-1vS5hE6a7a8zK9mHt7cR-nf2hQXXV6bx8uPPpDBjsKKp7UlFLBbLFPK8ib2f-QVVpG1AEEc-_OinCI0g/pub",
      designToken: {
        dark: "--icons-logos-tech-google-docs-dark-icon-svg",
        light: "--icons-logos-tech-google-docs-light-icon-svg",
      },
      title: "View resume on Google Docs",
      mdIcon: "docs",
    },
    pdf: {
      label: "View PDF Resume",
      href: "https://fnc314.com/files/pdfs/FrancoNColaizzi_Resume.pdf",
      designToken: {
        dark: "--icons-logos-tech-pdf-dark-icon-svg",
        light: "--icons-logos-tech-pdf-light-icon-svg",
      },
      title: "Download resume in PDF format",
      mdIcon: "picture_as_pdf",
    },
  },
};
