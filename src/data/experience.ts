export interface Program {
  name: string;
  description: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  /** One paragraph per program, each led by the program name in bold. */
  programs?: Program[];
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jan 2024 - Present",
    title: "Senior Research and Development Engineer",
    company: "Kitware, Inc. (Remote)",
    programs: [
      {
        name: "NOAA KAMERA",
        description: "I lead KAMERA, the multi-camera EO/IR/UV aerial survey system that AFSC's Marine Mammal Laboratory uses to survey seals and whales. I upgraded the system to Phase One cameras for more pixels on target during species classification, then built and validated a complete second imaging system so two aircraft can survey at the same time, and extended DIVE/VIAME with KAMERA-specific features. The work keeps me close to the field: three weeks of ice seal surveys out of Nome, Alaska, two weeks of Rice's whale surveys in Florida and Texas, and another four weeks on-site with MML staff in Lakeland and Seattle developing and duplicating the system.",
      },
      {
        name: "U.S. Army C5ISR Countermine",
        description: "I lead relocalization and mapping on a Phase II SBIR for UAS-based landmine detection, where I built a pipeline that matches live imagery to prebuilt SfM and orthoimagery maps using SIFT/FAISS tile indexing, coarse homography, and RoMaV2 dense refinement, benchmarked on Jetson Orin. I was also technical lead on a separate Phase II effort for long-term tracking and re-identification in UAS video.",
      },
      {
        name: "AFRL TAKML",
        description: "I connected our edge-deployed URSA tracker to the ARCTAK ATAK plugin, publishing person tracks, re-ID matches, and live alerts through TAK Server.",
      },
    ],
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Mar 2020 - Dec 2023",
    title: "Research and Development Engineer",
    company: "Kitware, Inc. (Hybrid, Clifton Park, NY)",
    programs: [
      {
        name: "DARPA URSA",
        description: "As lead systems engineer, I deployed TensorRT-optimized detection, tracking, and activity-recognition models onto Jetson Xavier platforms via ROS/Python and orchestrated a network of over 24 mobile (UGV, UAV) and fixed PTZ cameras. I owned more than a dozen Git repositories and their Docker containerization, supervised three OSTP interns building a tracking UI, and helped carry the system to TRL 6 over 20+ weeks of field testing.",
      },
      {
        name: "NOAA KAMERA",
        description: "As a core developer, I worked directly with NOAA scientists to mature the system from research code into a stable, modular stack, and adapted it for NASA's SIERRA-B large UAS.",
      },
      {
        name: "NOAA ADAPT",
        description: "That same stack became the basis for ADAPT, a modular sUAS payload for ice-floe mapping built with the University of Alaska Fairbanks.",
      },
      {
        name: "DARPA ANGLER",
        description: "I led integration, assembling and operating a BlueROV2 with a tethered Jetson Xavier for underwater data collection and in-water model testing.",
      },
    ],
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "May 2019 - Aug 2019",
    title: "Research and Development Intern",
    company: "Kitware, Inc. (Clifton Park, NY)",
    description: "I supported system integration on NOAA KAMERA and DARPA URSA, working on Jetson Xavier-based sensing networks.",
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Jan 2018 - Aug 2018",
    title: "Research and Development Intern",
    company: "Kitware, Inc. (Clifton Park, NY)",
    description: "For DARPA Squad-X, I developed an R-CNN-based person detector using EO/IR fusion for a Clearpath Husky UGV, and built a ROS/Python architecture to replay 9 camera streams synchronously across 3 hardware nodes. I also supported data collection for DARPA DIVA, gathering multi-modal camera streams for activity recognition.",
    companyUrl: "https://www.kitware.com",
  },
  {
    date: "Summer 2017",
    title: "Technical Intern",
    company: "Knolls Atomic Power Laboratory (Niskayuna, NY)",
    description: "I was design lead on equipment for examining spent nuclear fuel components, owning the mechanical design and its integration with existing systems under a Naval Reactors safety culture.",
  },
];
