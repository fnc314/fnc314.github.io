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
      title: "Call or text me directly",
      iconifyIcon: "material-symbols:call"
    },
    email: {
      label: "Email",
      href: "mailto:fnc314@gmail.com",
      text: "fnc314@gmail.com",
      title: "Send me an email",
      iconifyIcon: "material-symbols:mail",
    },
  },
  social: {
    linkedIn: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fnc314",
      title: "Review professional profile on LinkedIn",
      iconifyIcon: "simple-icons:linkedin",
    },
    github: {
      label: "GitHub",
      href: "https://www.github.com/fnc314",
      title: "See open source code on GitHub",
      iconifyIcon: "simple-icons:github",
    },
    medium: {
      label: "Medium",
      href: "https://fnc314.medium.com",
      title: "Read publications on Medium",
      iconifyIcon: "simple-icons:medium",
    },
  },
  resume: {
    googleDoc: {
      label: "Google Docs",
      href: "https://docs.google.com/document/d/e/2PACX-1vRScLyUSNJFYd3VoqStxDQpyQf4b9BpzE6YdjqSLWLDUA-2CsqAyWHIkkY3cpunEA/pub",
      title: "View resume on Google Docs",
      iconifyIcon: "material-symbols:docs",
    },
    pdf: {
      label: "View PDF Resume",
      href: `https://files.fnc314.com/pdfs/FrancoNColaizzi_Resume.pdf?timestamp=${Date.now()}`,
      title: "Download resume in PDF format",
      iconifyIcon: "material-symbols:picture-as-pdf",
    },
  },
};
