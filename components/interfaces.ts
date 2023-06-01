export interface IUser {
  name: string;
  role: string;
  location: string;
  introduction: string;
  skills: {
    skill: string;
    source: string;
  }[];
  educations: {
    standard: string;
    year: string;
    marks: string;
  }[];
  experiences: {
    role: string;
    companyName: string;
    timePeriod: string;
  }[];
  achievements: {
    title: string;
    year: string;
  }[];
}
