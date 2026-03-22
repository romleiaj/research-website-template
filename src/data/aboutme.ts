export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Adam Romlein",
  title: "Senior Research & Development Engineer",
  institution: "Kitware, Inc.",
  // Note that links work in the description
  description:
    "I am a senior research and development engineer at Kitware, Inc., building open-source computer vision systems for real-world deployment. I enjoy turning research prototypes into reliable software.",
  email: "adam.romlein@kitware.com",
  // blogUrl: "/blog",
  secretDescription: "If I'm not in front of a screen you'll find me in the mountains.",
  imageUrl:
    "/images/profile.jpg",
  // cvUrl: "/resume.pdf",
  githubUsername: "romleiaj",
  linkedinUsername: "adam-romlein",
  googleScholarUrl: "https://scholar.google.com/citations?user=gItUl7gAAAAJ&hl=en",
  institutionUrl: "https://www.kitware.com",
  // altName: "",
  // secretDescription: "I like dogs.",
};
