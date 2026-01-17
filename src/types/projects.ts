

export type TProjects = {
    _id?:string;
    slug?: string;
    title: string;
    shortDescription: string;
    projectType: string;
    details: string;
    keyFeatures:string[]
    technologies: string[]
    liveLink: string;
    clientGithubLink: string;
    serverGithubLink?: string;
    imageUrls: string[];
    createdAt?:Date
  };
  