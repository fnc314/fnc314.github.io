import { Icons } from "@fnc314/packages.design-tokens";
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
      designToken: Icons.Material.Call,
    },
    email: {
      label: "Email",
      href: "mailto:fnc314@gmail.com",
      text: "fnc314@gmail.com",
      mdIcon: "mail",
      title: "Send me an email",
      designToken: Icons.Material.Email,
    },
  },
  social: {
    linkedIn: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fnc314",
      designToken: Icons.Logos.Organization.Linkedin,
      title: "Review professional profile on LinkedIn",
    },
    github: {
      label: "GitHub",
      href: "https://www.github.com/fnc314",
      designToken: Icons.Logos.Organization.Github,
      title: "See open source code on GitHub",
    },
    medium: {
      label: "Medium",
      href: "https://fnc314.medium.com",
      designToken: Icons.Logos.Organization.Medium,
      title: "Read publications on Medium",
    },
  },
  resume: {
    googleDoc: {
      label: "Google Docs",
      href: "https://docs.google.com/document/d/e/2PACX-1vS5hE6a7a8zK9mHt7cR-nf2hQXXV6bx8uPPpDBjsKKp7UlFLBbLFPK8ib2f-QVVpG1AEEc-_OinCI0g/pub",
      designToken: Icons.Logos.Tech.Google.Docs,
      title: "View resume on Google Docs",
      mdIcon: "docs",
    },
    pdf: {
      label: "View PDF Resume",
      href: "https://fnc314.com/files/pdfs/FrancoNColaizzi_Resume.pdf",
      designToken: Icons.Material.PictureAsPdf,
      title: "Download resume in PDF format",
      mdIcon: "picture_as_pdf",
    },
  },
};
