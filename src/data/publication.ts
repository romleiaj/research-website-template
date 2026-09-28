export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  arxivUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "International Conference on Computer Vision (ICCV) Marine Vision Workshop",
    title:
      "KAMERA: Enhancing Aerial Surveys of Ice-Associated Seals in Arctic Environments",
    authors:
      "A. Romlein, B. X. Hou, Y. Boss, C. L. Christman, S. Koslovsky, E. E. Moreland, J. Parham, and A. Hoogs",
    paperUrl: "https://doi.org/10.1109/ICCVW69036.2025.00228",
    arxivUrl: "https://arxiv.org/abs/2509.19129",
    codeUrl: "https://github.com/kitware/kamera",
    imageUrl: "/images/kamera.jpg",
  },
  {
    year: "2022",
    conference: "AAAI Workshop on Practical Deep Learning in the Wild",
    title:
      "ADAPT: An Open-Source sUAS Payload for Real-Time Disaster Prediction and Response with AI",
    authors: "D. Davila, J. VanPelt, A. Lynch, A. Romlein, P. Webley, and M. Brown",
    paperUrl: "https://arxiv.org/pdf/2201.10366",
    codeUrl: "https://gitlab.kitware.com/adapt/adapt",
    imageUrl: "/images/adapt.jpg",
  },
  {
    year: "2019",
    conference: "IEEE Winter Conference on Applications of Computer Vision (WACV)",
    title:
      "Multi-Modal Detection Fusion on a Mobile UGV for Wide-Area, Long-Range Surveillance",
    authors: "M. Brown, K. Fieldhouse, E. Swears, P. Tunison, A. Romlein, and A. Hoogs",
    paperUrl: "https://ieeexplore.ieee.org/document/8659121",
  },
];
