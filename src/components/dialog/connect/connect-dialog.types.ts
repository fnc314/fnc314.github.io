
export interface Connection {
  label: string;
  connections: Partial<Record<"phone" | "email" | "linkedin" | "github" | "medium" | "googleDocs" | "pdf", ConnectionInstance>>;
}
export interface ConnectionInstance {
  href: string;
  start: string;
  overline: string;
  text: string;
}
