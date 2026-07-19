export interface Bio {
  bio: {
    short: string;
    long: string;
    extended: BioExtended;
  };
};

export interface BioExtended {
  opener: string;
  summary: string[];
  sections: { title: string, content: string[] }[];
  closer: string;
}
