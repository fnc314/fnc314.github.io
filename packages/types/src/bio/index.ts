export interface Bio {
  short: string;
  long: string;
  extended: BioExtended;
};

export interface BioExtended {
  opener: string;
  sections: { title: string, content: string }[];
}
