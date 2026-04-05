export interface CodeProjectData {
  name: string;
  url: string;
  description: string;
  tech: CodeProjectTech[];
}

export interface CodeProjectTech {
  name: string;
  url: string;
}