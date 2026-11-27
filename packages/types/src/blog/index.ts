/**
 * Describes a `json` record of a blog post or an entry in a series
 *
 * @interface BlogPostJson
 * @typedef {BlogEntryJson}
 */
export interface BlogEntryJson {
  id: string;
  title: string;
  series?: BlogSeriesEntry;
  summary: string;
  mediumUrl?: string;
  blogDotDevUrl?: string;
  tags?: string[];
}

/**
 * Captures the position within a blog series that a given
 *   entry represents
 */
export interface BlogSeriesEntry {
  title: string;
  entry: number;
}

/**
 * Represents a Blog Series containing metadata and ordered posts/entries
 */
export interface BlogSeriesData {
  id: string;
  title: string;
  description?: string;
  entries: BlogEntryJson[];
}

/**
 * Represents a publication item: either a BlogSeriesData or an individual standalone BlogEntryJson
 */
export type PublicationItem =
  | { type: "series"; series: BlogSeriesData }
  | { type: "post"; post: BlogEntryJson };

/**
 * Alternative of {@link BlogEntryJson}
 *
 * @typedef {BlogsJson}
 */
export type BlogsJson = {
  id: string;
  title: string;
} & (
  | {
      type: "SERIES";
      entries: BlogsJsonEntry[];
    }
  | {
      type: "SINGLE";
      mediumUrl: string;
      tags: string[];
    }
);

/**
 * Alternative of {@link BlogEntryJson}
 *
 * @interface BlogsJsonEntry
 * @typedef {BlogsJsonEntry}
 */
export interface BlogsJsonEntry {
  id: string;
  title: string;
  mediumUrl: string;
  tags: string[];
}
