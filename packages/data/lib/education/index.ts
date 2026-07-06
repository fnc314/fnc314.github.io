import { type EducationInstitutionRecord } from "@fnc314/packages.types";

export const EducationJsonData: EducationInstitutionRecord[] = [
  {
    institute: "General Assembly",
    degree: "Web Development Immersive",
    location: {
      city: "San Francisco",
      state: "California",
      country: "United States"
    },
    graduationDate: {
      text: {
        month: "April",
        year: "2014"
      },
      date: {
        month: "04",
        year: "2014"
      }
    },
    designToken: {
      dark: "--icons-logos-education-general-assembly-dark-icon-svg",
      light: "--icons-logos-education-general-assembly-light-icon-svg"
    }
  },
  {
    institute: "University of Pittsburgh",
    degree: "Bachelor of Science, Mathematics",
    location: {
      city: "Pittsburgh",
      state: "Pennsylvania",
      country: "United States"
    },
    graduationDate: {
      text: {
        month: "April",
        year: "2011"
      },
      date: {
        month: "04",
        year: "2011"
      }
    },
    designToken: {
      dark: "--icons-logos-education-university-of-pittsburgh-dark-icon-svg",
      light: "--icons-logos-education-university-of-pittsburgh-light-icon-svg"
    }
  }
];