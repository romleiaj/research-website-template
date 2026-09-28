export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "NOAA KAMERA",
    description:
      "A multi-camera EO/IR/UV aerial imaging system with real-time onboard detection, flown on NOAA marine mammal surveys in Alaska and the Gulf of Mexico and now running on two aircraft.",
    technologies: ["Python", "ROS", "Docker", "VIAME"],
    codeUrl: "https://github.com/kitware/kamera",
    imageUrl: "/images/beluga_whales.jpg",
  },
];
