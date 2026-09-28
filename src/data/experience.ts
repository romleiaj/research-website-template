export interface ExperienceHighlight {
  project: string;
  text: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  /** Per-project bullets, rendered as "Project: text" below the description. */
  highlights?: ExperienceHighlight[];
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jan 2024 - Present",
    title: "Senior Research and Development Engineer",
    company: "Kitware, Inc. (Remote)",
    highlights: [
      {
        project: "NOAA KAMERA",
        text: "Project lead of the multi-camera EO/IR/UV aerial survey system used by AFSC/MML for marine mammal surveys. Upgraded the system to Phase One cameras, increasing pixels-on-target for species classification, and built and validated a second complete imaging system so two aircraft can survey concurrently. Extended DIVE/VIAME with KAMERA-specific features. Field operations include 3 weeks of ice seal surveys out of Nome, AK and 2 weeks of Rice's whale surveys in FL/TX, plus an additional 4 weeks on-site with MML staff in Lakeland, FL and Seattle, WA for system development and duplication.",
      },
      {
        project: "U.S. Army C5ISR Countermine",
        text: "Lead engineer for relocalization and mapping on a UAS-based landmine and small explosive hazard detection effort under a Phase II SBIR. Built the image-to-map relocalization pipeline: SfM and orthoimagery map construction, offline SIFT/FAISS tile indexing, coarse homography, and RoMaV2 dense refinement on keyframes with pose propagation, benchmarked on Jetson Orin. Technical lead on a separate Phase II effort for long-term tracking and re-identification for threat quantification in UAS video.",
      },
      {
        project: "AFRL TAKML",
        text: "Built the tracking-to-TAK integration for the ARCTAK ATAK plugin: an edge-deployed URSA tracker and a Cursor-on-Target message layer publishing person tracks, re-ID matches, and live alerts through TAK Server.",
      },
    ],
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Mar 2020 - Dec 2023",
    title: "Research and Development Engineer",
    company: "Kitware, Inc. (Hybrid)",
    highlights: [
      {
        project: "DARPA URSA",
        text: "Lead systems engineer. Deployed TensorRT-optimized detection, tracking, and activity-recognition models on Jetson Xavier via ROS/Python. Orchestrated a network of 24+ mobile (UGV, UAV) and fixed PTZ cameras, and owned 12+ Git repositories and their Docker containerization. Supervised 3 OSTP interns building a tracking UI. The system reached TRL 6 through 20+ weeks of field testing.",
      },
      {
        project: "NOAA KAMERA",
        text: "Core developer on the multi-camera, multi-modal (EO/IR/UV) system for real-time deep-learning detection and geolocation of ice seals during aerial surveys. Worked directly with NOAA scientists to mature the stack from research code into a stable, modular system. Adapted KAMERA for a large-UAS platform (NASA SIERRA-B).",
      },
      {
        project: "NOAA ADAPT",
        text: "Tailored the KAMERA stack into a modular sUAS payload running single-camera segmentation on a Jetson Xavier for ice-floe mapping, in collaboration with the University of Alaska Fairbanks.",
      },
      {
        project: "DARPA ANGLER",
        text: "Led integration: assembled and operated a BlueROV2 with a tethered Jetson Xavier for underwater data collection and in-water model deployment testing.",
      },
    ],
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "May 2019 - Aug 2019",
    title: "Research and Development Intern",
    company: "Kitware, Inc. (Clifton Park, NY)",
    description: "Joined two foundational projects: NOAA KAMERA, a multi-camera, multi-modal aerial survey system using EO, IR, and UV imagery to detect and geolocate Arctic marine mammals, and DARPA URSA (Urban Reconnaissance through Supervised Autonomy), focused on real-time edge-based tracking and activity recognition. Supported system integration across both, contributing to Jetson Xavier-based sensing networks and field-ready software workflows.",
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Jan 2018 - Aug 2018",
    title: "Research and Development Intern",
    company: "Kitware, Inc. (Clifton Park, NY)",
    description: "Built ROS1 Python nodes for a mobile multi-camera tracking system (DARPA Squad-X) and gained hands-on experience with robotics software onboard a Clearpath Husky.",
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Summer 2017",
    title: "Technical Intern",
    company: "Knolls Atomic Power Laboratory (Niskayuna, NY)",
  },
];
