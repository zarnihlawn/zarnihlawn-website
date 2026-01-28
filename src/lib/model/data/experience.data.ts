import type { ExperienceInterface } from "../interface/experience.interface";

export const ExperienceData: ExperienceInterface[] = [
    {
        name: 'Pun Hlaing Hospitals',
        description: 'a hospital',
        position: 'junior data & software engineer',
        link: 'https://punhlainghospitals.com/',
        detailLink:
            'pun-hlaing-hospitals-junior-data-&-software-engineer',
        type: 'job',
        joinedAt: new Date('2025-7-1'),
        latestAt: new Date()
    },
    
    {
        name: 'Pun Hlaing Hospitals',
        description: 'a hospital',
        position: 'intern software developer',
        link: 'https://punhlainghospitals.com/',
        detailLink: 'pun-hlaing-hospitals-intern-software-developer',
        type: 'job',
        joinedAt: new Date('2024-10-01'),
        latestAt: new Date('2025-7-1')
    },

    // hobby
    {
        name: 'mari.software',
        description: 'indie software development (side project)',
        position: 'software engineer',
        link: 'https://github.com/mari-software',
        detailLink: 'mari-software-software-engineer',
        type: 'hobby',
        joinedAt: new Date('2025-12-23'),
        latestAt: new Date()
    },

    // School
    {
        name: 'University of Wolverhampton',
        description: 'student',
        position: 'MSc in Computer Science',
        link: 'https://www.wlv.ac.uk/',
        detailLink: 'university-of-wolverhampton-student',
        type: 'school',
        joinedAt: new Date('2025-10-01'),
        latestAt: new Date()
    },
    {
        name: 'University of Sunderland',
        description: 'student',
        position: 'BSc in Computer Science',
        link: 'https://www.sunderland.ac.uk/',
        detailLink: 'university-of-sunderland-bsc-in-computer-science',
        type: 'school',
        joinedAt: new Date('2024-08-01'),
        latestAt: new Date('2025-05-01')
    },
    {
        name: 'TMC Academy',
        description: 'student',
        position: 'Higher Diploma in Information Technology',
        link: 'https://www.tmc.edu.sg/',
        detailLink: 'tmc-academy-higher-diploma-in-information-technology',
        type: 'school',
        joinedAt: new Date('2023-08-01'),
        latestAt: new Date('2024-08-01')
    },
    {
        name: 'Pearson',
        description: 'student',
        position: 'BTEC International Level-3 Foundation Diploma in Information Technology',
        link: 'https://www.pearson.com/',
        detailLink:
            'pearson-btec-international-level-3-foundation-diploma-in-information-technology',
        type: 'school',
        joinedAt: new Date('2022-08-01'),
        latestAt: new Date('2023-08-01')
    }
]