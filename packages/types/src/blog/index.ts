/**
 * Describes a `json` record of a blog post
 *
 * @interface BlogPostJson
 * @typedef {BlogEntryJson}
 */
export interface BlogEntryJson {
  id: string;
  title: string;
  series: BlogSeriesEntry;
  summary: string;
  mediumUrl: string;
  tags: string[];
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
