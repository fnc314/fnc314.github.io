/**
 * Describes a `json` record of a blog post
 *
 * @export
 * @interface BlogPostJson
 * @typedef {BlogPostJson}
 */
export interface BlogPostJson {
  id: string;
  title: string;
  series: string;
  summary: string;
  mediumUrl: string;
  tags: string[];
}

/**
 * Alternative of {@link BlogPostJson}
 *
 * @export
 * @typedef {BlogsJson}
 */
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

/**
 * Alternative of {@link BlogPostJson}
 *
 * @export
 * @interface BlogsJsonEntry
 * @typedef {BlogsJsonEntry}
 */
export interface BlogsJsonEntry {
  id: string;
  title: string;
  mediumUrl: string;
  tags: string[];
}
