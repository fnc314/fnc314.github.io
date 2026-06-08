export interface codeprojectdata {
  description: string;
  name: string;
  tech: codeprojecttech[];
  url: string;
}

export interface codeprojecttech {
  name: string;
  url: string;
}