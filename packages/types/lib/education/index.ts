import { type DesignTokenIcon } from "@/lib/design-token-icon";

export type SingleDigit =
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