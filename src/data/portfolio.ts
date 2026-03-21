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
      "A multi-camera, multi-modal (EO/IR/UV) aerial imaging system for enhancing wildlife survey effectiveness, with real-time onboard perception.",
    technologies: ["Python", "ROS", "Docker", "VIAME"],
    codeUrl: "https://github.com/kitware/kamera",
    imageUrl: "/images/beluga_whales.jpg",
  },
];
