const navLinks = [
  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "Skills",
    link: "#skills"
  }
];

const words = ["Web Apps", "UIs", "Features"];

const SkillsLogos = [
  {
    name: "Next.js",
    modelPath: `${import.meta.env.BASE_URL}models/nextjs-logo.glb`,
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: "React",
    modelPath: `${import.meta.env.BASE_URL}models/react-logo.glb`,
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: "TypeScript",
    modelPath: `${import.meta.env.BASE_URL}models/typescript-logo.glb`,
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: "JavaScript",
    modelPath: `${import.meta.env.BASE_URL}models/javascript-logo.glb`,
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: "Tailwind CSS",
    modelPath: `${import.meta.env.BASE_URL}models/tailwind-logo.glb`,
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: "Blender",
    modelPath: `${import.meta.env.BASE_URL}models/blender-logo.glb`,
    scale: 1,
    rotation: [0, 0, 0]
  },
  {
    name: "Photoshop",
    modelPath: `${import.meta.env.BASE_URL}models/photoshop-logo.glb`,
    scale: 1,
    rotation: [0, 0, 0]
  }
];

const socials = [
  {
    name: "github",
    imgPath: `${import.meta.env.BASE_URL}images/github.svg`,
    url: "https://github.com/Dejvi-Blushi"
  },
  {
    name: "linkedin",
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.svg`,
    url: "https://www.linkedin.com/in/dejvi-blushi/"
  }
];

export {words, socials, SkillsLogos, navLinks};
