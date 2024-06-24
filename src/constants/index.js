import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  figma,
  stickerMaker,
  TaskManager,
  touristAgency,
  threejs,
  frontEnd,
  laravelIcon,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "proj",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "git",
    title: "Github",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front End Developer",
    icon: frontEnd,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "LaravelICon",
    icon: laravelIcon,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Task Manager",
    description:
      "task management platform boosts productivity and collaboration with automated notifications, personalized dashboards, and a dynamic scoring system, making task assignment and tracking seamless for admins and motivating for employees.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: TaskManager,
    source_code_link: "https://github.com/GrirZouhair/TaskManager",
  },
  {
    name: "Sticker Maker",
    description:
      "The application allows you to chose the paper size and the images you want to make as a stickers collection then it converts them to vector graphics for better printing result and then you can download it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
    ],
    image: stickerMaker,
    source_code_link: "https://github.com/Code-With-Amine/sticker-maker",
  },
  {
    name: "Toutist agency Web Application",
    description:
      "The website enables users to register and customize their travel preferences. The website features an  admin section , which allows for easy content modification and management.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "jQuery",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "red-text-gradient",
      },
    ],
    image: touristAgency,
    source_code_link: "https://github.com/Code-With-Amine/tourist-agency",
  },
];

export { services, technologies, testimonials, projects };
