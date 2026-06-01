import { type Job, type WorkDate } from "@/types/components/work-experience/work-experience";
import { LitElement } from "lit";
export declare class WorkExperience extends LitElement {
    static styles: import("lit").CSSResult[];
    isNested: boolean;
    experienceRole: string;
    experienceOrg: string;
    experienceSummary: string;
    dateStart: WorkDate;
    dateEnd: WorkDate;
    summaries: {
        item: string;
    }[];
    jobs: Job[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "work-experience": WorkExperience;
    }
}
//# sourceMappingURL=work-experience.d.ts.map