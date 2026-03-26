import WorkJson from "@/data/work.json" with { type: "json" };
export interface WorkDate {
  stamp: string;
  text: string;
}

export interface Job {
  role: string;
  client: string;
  dates: {
    start: WorkDate;
    end: WorkDate;
  };
  summary: { item: string }[];
}

export interface Experience {
  employer: string;
  role: string;
  summary: string;
  dates: {
    start: WorkDate;
    end: WorkDate;
  };
  jobs: Job[];
}

export interface WorkData {
  experiences: Experience[];
}

export const data = WorkJson as WorkData;
