
export interface connection {
  connections: partial<record<"phone" | "email" | "linkedin" | "github" | "medium" | "googleDocs" | "pdf", connectioninstance>>;
  label: string;
}

export interface connectioninstance {
  href: string;
  overline: string;
  start: string;
  text: string;
}
