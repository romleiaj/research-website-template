export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "Oct 2025",
    title: "ICCV Marine Vision Workshop Paper",
    description:
      "First-author paper accepted and presented at the ICCV Marine Vision Workshop.",
    link: "https://doi.org/10.1109/ICCVW69036.2025.00228",
  },
  {
    date: "June 2024",
    title: "Flight Tests of KAMERA in Alaska",
    description: "First real flight tests of the system in Alaska after numerous software and hardware upgrades.",
    link: "https://www.kitware.com/project-spotlight-noaa-kamera/",
  },
];
