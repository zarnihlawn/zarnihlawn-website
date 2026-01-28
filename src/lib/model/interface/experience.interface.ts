
export interface ExperienceInterface {
    name: string;
    description: string;
    position: string;
    link: string;
    detailLink: string;
    type: 'job' | 'hobby' | 'school';
    joinedAt: Date;
    latestAt: Date;
}

export interface ExperienceDetailInteface extends ExperienceInterface {
    projectName: string;
    projectAbout: string;
    projectDescription?: Record<string, string>[];
    projectImageUrl?: Record<string, string>[];
    isProvidingMaintenance: Boolean;
    projectTimeStart: Date;
    projectTimeEnd: Date;
}