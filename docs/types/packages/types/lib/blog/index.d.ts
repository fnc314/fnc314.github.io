export interface BlogEntryJson {
    id: string;
    title: string;
    series: BlogSeriesEntry;
    summary: string;
    mediumUrl: string;
    tags: string[];
}
export interface BlogSeriesEntry {
    title: string;
    entry: number;
}
export type BlogsJson = {
    id: string;
    title: string;
} & ({
    type: "SERIES";
    entries: BlogsJsonEntry[];
} | {
    type: "SINGLE";
    mediumUrl: string;
    tags: string[];
});
export interface BlogsJsonEntry {
    id: string;
    title: string;
    mediumUrl: string;
    tags: string[];
}
