export interface WorkDate {
  stamp: string;
  text: string;
}

export interface WorkLocation {
  city: string;
  state: string;
  country: string;
}

export interface Job {
  role: string;
  client: string;
  location?: WorkLocation;
  dates: {
    start: WorkDate;
    end: WorkDate;
  };
  summary?: string;
  summaries: { item: string }[];
}

export interface Experience {
  employer: string;
  role: string;
  location?: WorkLocation;
  summary: string;
  dates: {
    start: WorkDate;
    end: WorkDate;
  };
  jobs: Job[];
  summaries?: { item: string }[];
}

export interface WorkData {
  experiences: Experience[];
}
