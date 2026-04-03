export interface CodeProjectData {
  name: string;
  url: string;
  description: string;
  technologies: string[];
  tech: CodeProjectTech[];
}

export interface CodeProjectTech {
  name: string;
  url: string;
}