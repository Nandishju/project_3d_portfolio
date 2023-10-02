import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  game2048,
  youtube,
  tictoctoe,
  amazonClone,
  blockchain,
  vueweather,
  phoneStore,
  recepie,
  medium,
  threejs,
  trezi,
  digicollect,
  capgemini,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "VueJS Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Lead",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, TypeScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Writing unit testcases using Playwright for all the React Components.",
    ],
  },
  {
    title: "Senior Software Development Engineer",
    company_name: "SmartVizX",
    icon: trezi,
    iconBg: "#E6DEDD",
    date: "July 2020 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js, TypeScript, Redux-Saga and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Engineer/Lead",
    company_name: "DigiCollect",
    icon: digicollect,
    iconBg: "#383E56",
    date: "Jan 2017 - June 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "He is perfect example towards work, punctual for personal and professional, In terms of technology sounds knowledge in part of react js and agile methodologies.",
    name: "Dooj",
    designation: "Senior Consultant",
    company: "Capgemini",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He has good coding skills, is a hardworking and dedicated person and he is a professional, helpful and positive person.",
    name: "Vinay",
    designation: "Senior Software Engineer",
    company: "Capgemini",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nandish is one of the best front-end developers that I have had the pleasure of working with. He can consistently come up with solutions for difficult and obscure front end issues.",
    name: "Bharat",
    designation: "Senior Backend Developer",
    company: "DigiCollect",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He's ability to juggle multiple projects was unlike any I’ve seen before, very hardworking and extremely talented individual,",
    name: "Sharath",
    designation: "Lead Engineer - Mobile Platforms",
    company: "DigiCollect",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "2048 Game",
    description:
      "Web-based platform that allows the objective of the game is to combine numbered tiles on a 4x4 grid to reach the elusive tile with the number 2048.The game's simplicity and addictive nature have made it a popular choice for casual gamers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: game2048,
    source_code_link: "https://github.com/Nandishju/2048-game",
  },
  {
    name: "YouTube Clone",
    description:
      "Web application that enables users to search for free video sharing website that makes it easy to watch online videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "videoStreming",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Nandishju/youtube-clone",
  },
  {
    name: "Blockchain-Project",
    description:
      "Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network. A blockchain database stores data in blocks that are linked together in a chain",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "smartcontracts",
        color: "green-text-gradient",
      },
      {
        name: "MetMask",
        color: "green-text-gradient",
      },
      {
        name: "crypto",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: blockchain,
    source_code_link: "https://github.com/Nandishju/blockchain_web",
  },
  {
    name: "Tic-Toc-Toe Guide",
    description:
      "Tic-tac-toe is a two-player strategy board game in which players take turns placing their marks (X or O) in the squares of a 3×3 grid. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game. If all nine squares are filled and neither player has three in a row, the game is a draw.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tictoctoe,
    source_code_link: "https://github.com/Nandishju/Tic-tok-toe-nandish",
  },
  {
    name: "Amazon Clone",
    description:
      "An Amazon clone is a web application or mobile app that replicates the core functionalities of Amazon.com, such as product browsing, searching, adding to cart, and checkout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "token-authentication",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: amazonClone,
    source_code_link: "https://github.com/Nandishju/amazon_clone_react",
  },

  {
    name: "Ecommerce",
    description:
      "A React phone store typically refers to a retail establishment or an online platform that specializes in selling mobile phones and related accessories. It is a place where customers can browse and purchase a wide range of smartphones from various brands and models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: phoneStore,
    source_code_link: "https://github.com/Nandishju/react-phone-store",
  },
  {
    name: "Vue-weather",
    description:
      "Vue Weather App allows users to search for weather information in specific locations. They can either manually enter the name of a city or use the app's geolocation feature to fetch weather data based on their current location.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "openweatherAPI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: vueweather,
    source_code_link: "https://github.com/Nandishju/vue-weather-app",
  },

  {
    name: "React-recipe",
    description:
      "A React phone store typically refers to a retail establishment or an online platform that specializes in selling mobile phones and related accessories. It is a place where customers can browse and purchase a wide range of smartphones from various brands and models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: recepie,
    source_code_link: "https://github.com/Nandishju/receipe-react",
  },

  // {
  //   name: "React-phone-store",
  //   description:
  //     "A React phone store typically refers to a retail establishment or an online platform that specializes in selling mobile phones and related accessories. It is a place where customers can browse and purchase a wide range of smartphones from various brands and models.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "react-hooks",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: phoneStore,
  //   source_code_link: "https://github.com/Nandishju/react-phone-store",
  // },

  {
    name: "medium-highlighter-vuejs",
    description:
      "Vue Weather App allows users to search for weather information in specific locations. They can either manually enter the name of a city or use the app's geolocation feature to fetch weather data based on their current location.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "vuex",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: medium,
    source_code_link: "https://github.com/Nandishju/medium-highlighter-vuejs",
  },
];

export { services, technologies, experiences, testimonials, projects };
