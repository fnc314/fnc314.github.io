import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type Job, type WorkDate } from "@fnc314/packages.types";
export declare class WorkExperience extends UIAwareElement {
    static styles: any[];
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
