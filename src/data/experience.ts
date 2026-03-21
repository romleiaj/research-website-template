export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jan 2024 - Present",
    title: "Senior Research and Development Engineer",
    company: "Kitware, Inc. (Hybrid)",
    description: "Growing in my role at Kitware, I lead applied R&D efforts that bring computer vision models onto embedded platforms for dependable use in the field. I currently lead the KAMERA project, where the system supports real-time, deep-learning-based detection and geolocation of species like polar bears and seals from aerial platforms. My work also includes mentoring interns, collaborating across teams, and contributing to technical proposals and publications.",
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Mar 2020 - Dec 2023",
    title: "Research and Development Engineer",
    company: "Kitware, Inc. (Hybrid)",
    description: "I became the lead systems engineer on DARPA URSA, integrating deep learning algorithms onto Jetson Xavier platforms and managing a network of over 24 cameras across mobile and static setups. I also led integration for DARPA ANGLER, deploying image processing algorithms for a BlueROV2. This work spanned ROS/Python development, performance optimization, and iterative testing with over 20 weeks deployed in operational settings.",
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "May 2019 - Aug 2019",
    title: "Research and Development Intern",
    company: "Kitware, Inc. (Clifton Park, NY)",
    description: "I joined two foundational projects: NOAA KAMERA, a multi-camera, multi-modal aerial survey system using EO, IR, and UV imagery to detect and geolocate Arctic marine mammals, and DARPA URSA (Urban Reconnaissance through Supervised Autonomy), focused on real-time edge-based tracking and activity recognition. I supported system integration across both, contributing to sensing networks backed by Jetson Xaviers and field-ready software workflows.",
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Jan 2018 - Aug 2018",
    title: "Research and Development Intern",
    company: "Kitware, Inc. (Clifton Park, NY)",
    description: "I built ROS1 Python nodes for a mobile multi-camera tracking system (DARPA SQUAD-X) and gained hands-on experience with robotics software onboard a Clearpath Husky.",
    companyUrl: "https://www.kitware.com",
  },
];
