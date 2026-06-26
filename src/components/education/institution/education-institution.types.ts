import EducationJson from "@/data/education.json" with { type: "json" };
import { type DesignTokenIcon } from "@fnc314/packages.design-tokens/types/design-token-icon.js";

type SingleDigit =
  "0" |
  "1" |
  "2" |
  "3" |
  "4" |
  "5" |
  "6" |
  "7" |
  "8" |
  "9";

export type FourDigitYear = `${SingleDigit}${SingleDigit}${SingleDigit}${SingleDigit}`;

export interface EducationInstitutionRecord {
  institute: string;
  degree: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  graduationDate: {
    text: {
      month: string;
      year: FourDigitYear;
    },
    date: {
      month: `${SingleDigit}${SingleDigit}`;
      year: FourDigitYear;
    }
  },
  designToken: DesignTokenIcon;
}

export const EducationJsonData: EducationInstitutionRecord[] = EducationJson.institutions as EducationInstitutionRecord[];