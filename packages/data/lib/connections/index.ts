import { type ArtifactConnectionData, type ConnectionInstance, type ProfessionalConnectionJsonData } from "@fnc314/packages.types";

export const Connections: {
  direct: {
    phone: ConnectionInstance,
    email: ConnectionInstance
  },
  social: {
    linkedIn: ProfessionalConnectionJsonData,
    github: ProfessionalConnectionJsonData,
    medium: ProfessionalConnectionJsonData,
  },
  resume: {
    googleDoc: ArtifactConnectionData,
    pdf: ArtifactConnectionData,
  }
} = {
  direct: {
    phone: {
      href: "tel:+14127219550",
      text: "412-721-9550",
      mdIcon: "call",
      title: "Call or text me directly",
      designToken: {
        dark: "--md-icons-call-dark-data-image-svg",
        default: "--md-icons-call-default-data-image-svg",
        light: "--md-icons-call-light-data-image-svg"
      }
    },
    email: {
      href: "mailto:fnc314@gmail.com",
      text: "fnc314@gmail.com",
      mdIcon: "mail",
      title: "Send me an email",
      designToken: {
        dark: "--md-icons-mail-dark-data-image-svg",
        default: "--md-icons-mail-default-data-image-svg",
        light: "--md-icons-mail-light-data-image-svg"
      }
    },
  },
  social: {
    linkedIn: {
      href: "https://www.linkedin.com/in/fnc314",
      designToken: {
        dark: "--icons-logos-organization-linkedin-dark-css-url-svg",
        default: "--icons-logos-organization-linkedin-default-css-url-svg",
        light: "--icons-logos-organization-linkedin-light-css-url-svg",
        mask: "--icons-logos-organization-linkedin-mask-css-url-svg"
      },
      title: "Review professional profile on LinkedIn"
    },
    github: {
      href: "https://www.github.com/fnc314",
      designToken: {
        dark: "--icons-logos-organization-github-dark-css-url-svg",
        default: "--icons-logos-organization-github-default-css-url-svg",
        light: "--icons-logos-organization-github-light-css-url-svg",
        mask: "--icons-logos-organization-github-mask-css-url-svg"
      },
      title: "See open source code on GitHub"
    },
    medium: {
      href: "https://fnc314.medium.com",
      designToken: {
        dark: "--icons-logos-organization-medium-dark-css-url-svg",
        default: "--icons-logos-organization-medium-default-css-url-svg",
        light: "--icons-logos-organization-medium-light-css-url-svg",
        mask: "--icons-logos-organization-medium-mask-css-url-svg"
      },
      title: "Read publications on Medium"
    },
  },
  resume: {
    googleDoc: {
      href: "https://docs.google.com/document/d/e/2PACX-1vS5hE6a7a8zK9mHt7cR-nf2hQXXV6bx8uPPpDBjsKKp7UlFLBbLFPK8ib2f-QVVpG1AEEc-_OinCI0g/pub",
      designToken: {
        dark: "--icons-logos-tech-google-docs-dark-data-image-svg",
        default: "--icons-logos-tech-google-docs-default-data-image-svg",
        light: "--icons-logos-tech-google-docs-light-data-image-svg"
      },
      title: "View resume on Google Docs",
      mdIcon: "docs"
    },
    pdf: {
      href: "https://fnc314.com/files/pdfs/FrancoNColaizzi_Resume.pdf",
      designToken: {
        dark: "--icons-logos-tech-pdf-dark-data-image-svg",
        default: "--icons-logos-tech-pdf-default-data-image-svg",
        light: "--icons-logos-tech-pdf-light-data-image-svg"
      },
      title: "Download resume in PDF format",
      mdIcon: "picture_as_pdf"
    }
  }
}