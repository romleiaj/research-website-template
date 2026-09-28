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
    "I build real-time computer vision systems that have to work outside the lab: on survey aircraft, drones, ground robots, and underwater vehicles. Since 2024 I've led KAMERA, NOAA's multi-camera aerial survey system for ice seals and whales, and I've spent more than 25 weeks in the field running live operations, including survey flights out of Nome, Alaska. I'm an FAA Part 107 remote pilot and have completed aviation survival and egress training (ASET2).",
  email: "adam.romlein@gmail.com",
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
