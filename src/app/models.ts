export interface ICurriculumVitae {
    name: string;
    currentPosition: string;
    contact: IContactData;
    jobs: IJob[];
    bio: IBio;
    languages: string[];
    skills: ISkill[];
    education: IEducationStep[];
}

export interface IContactData {
    street: string;
    houseNumber: string;
    zip: string;
    city: string;
    country: string;
    email: string;
    phone: string;
    xingUrl: string;
    linkedinUrl: string;
}

export interface IJob {
    title: string;
    company: string;
    start: string;
    end: string;
    projects: IProject[];
}

export interface IProject {
    name: string;
    description: string;
}

export interface IBio {
    paragraphs: string[];
}

export interface ISkill {
    name: string;
    expertise: number; // 1-10
}

export interface IEducationStep {
    faculty: string;
    description: string;
}
