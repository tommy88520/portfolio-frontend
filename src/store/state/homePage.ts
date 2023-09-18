export interface iSkillsPage {
  skillsState: { skill: ''; image: '' }[];
  getSkills: () => void;
}

export interface iWorks {
  worksContent: {
    title: string;
    content: string;
    tags: string[];
    lang: string;
    orderNumber: number;
    workImage: string;
  }[];

  getWorks: (e) => void;
}
