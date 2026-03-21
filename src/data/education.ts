export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  /** Research highlights, thesis topic, extracurriculars, etc. */
  description?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "Aug 2015 - Dec 2019",
    institution: "Clarkson University",
    degree: "B.S. in Computer Engineering, minor in Mathematics.",
    description:
      "Conducted undergraduate research with Dr. Luke Rumbaugh, gaining hands-on experience across multiple 3D vision systems, including stereoscopic, time of flight, laser line scanner, structured light, and structure from motion.",
  },
];
