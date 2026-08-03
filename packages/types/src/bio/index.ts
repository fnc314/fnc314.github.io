export interface BioExtended {
  opener: string;
  sections: BioExtendedSection[];
}

export interface BioExtendedSection {
  title: string;
  content: BioExtendedSectionContent;
}

export type BioExtendedSectionContent = ListWithLeadingParagraph | SingleContent | ListContent;

export interface ListWithLeadingParagraph {
  listLeadingParagraph: string;
  list: string[];
}

export interface SingleContent {
  content: string;
}

export interface ListContent {
  list: string[];
}
