export interface BlogPostJson {
  id: string;
  title: string;
  series: string;
  summary: string;
  mediumUrl: string;
  tags: string[];
}

export type BlogsJson = {
  id: string;
  title: string;
} & (
  {
    type: "SERIES";
    entries: BlogsJsonEntry[];
  } | {
    type: "SINGLE";
    mediumUrl: string;
    tags: string[];
  }
);

export interface BlogsJsonEntry {
  id: string;
  title: string;
  mediumUrl: string;
  tags: string[];
}
