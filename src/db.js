const cards = [
  {
    id: "0",
    header: "Spring boot",
    description:
      "Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
    src: require("./assets/spring-boot.png"),
  },
  {
    id: "1",
    header: "Spring framework",
    description:
      "Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
    src: require("./assets/spring-framework.png"),
  },
  {
    id: "2",
    header: "Spring cloud",
    description:
      "Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
    src: require("./assets/spring-data.png"),
  },
  {
    id: "3",
    header: "Spring cloud data flow",
    description:
      "Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
    src: require("./assets/spring-cloud.png"),
  },
  {
    id: "4",
    header: "Spring data",
    description:
      "Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
    src: require("./assets/spring-data-flow.png"),
  },
  {
    id: "5",
    header: "Spring security",
    description:
      "Many desktop publishing packages and web page editors now useLorem Ipsum as their default model text, and a search for 'lorem ipsum'.",
    src: require("./assets/spring-security.png"),
  },
];

const navbarItems = [
  {
    id: "1",
    header: "Why Spring",
    dropdownItems: [
      {
        id: "2",
        header: "Microservices",
        href: "",
      },
      {
        id: "3",
        header: "Reactive",
        href: "",
      },
      {
        id: "4",
        header: "Event Driven",
        href: "",
      },

      {
        id: "5",
        header: "Cloud",
        href: "",
      },
      {
        id: "6",
        header: "Web Applications",
        href: "",
      },
      {
        id: "7",
        header: "Serverless",
        href: "",
      },
      {
        id: "8",
        header: "Batch",
        href: "",
      },
    ],
  },

  {
    id: "2",
    header: "Learn",
    dropdownItems: [
      {
        id: "1",
        header: "Overview",
        href: "",
      },
      {
        id: "2",
        header: "Quickstart",
        href: "",
      },
      {
        id: "3",
        header: "Guides",
        href: "",
      },

      {
        id: "4",
        header: "Blog",
        href: "",
      },
    ],
  },

  {
    id: "3",
    header: "Projects",
    dropdownItems: [
      {
        id: "1",
        header: "Overview",
        href: "",
      },
      {
        id: "2",
        header: "Spring boot",
        href: "",
      },
      {
        id: "3",
        header: "Spring framework",
        href: "",
      },

      {
        id: "4",
        header: "Spring cloud data flow",
        href: "",
      },
      {
        id: "5",
        header: "Spring data",
        href: "",
      },
      {
        id: "6",
        header: "Spring security",
        href: "",
      },
    ],
  },

  {
    id: "4",
    header: "Academy",
    dropdownItems: [
      {
        id: "1",
        header: "Courses",
        href: "",
      },
      {
        id: "2",
        header: "Get Certified",
        href: "",
      },
    ],
  },

  {
    id: "5",
    header: "Solutions",
    dropdownItems: [
      {
        id: "1",
        header: "Overview",
        href: "",
      },
      {
        id: "2",
        header: "Tanzu Spring",
        href: "",
      },
      {
        id: "3",
        header: "Spring Consulting",
        href: "",
      },

      {
        id: "4",
        header: "Spring Academy For Teams",
        href: "",
      },
      {
        id: "5",
        header: "Security Advisories",
        href: "",
      },
    ],
  },

  {
    id: "6",
    header: "Community",
    dropdownItems: [
      {
        id: "1",
        header: "Overview",
        href: "",
      },
      {
        id: "2",
        header: "Events",
        href: "",
      },
      {
        id: "3",
        header: "Authors",
        href: "",
      },
    ],
  },
];

const users = [
  {
    id: 1,
    username: "admin",
    password: "1234"
  }
]

export { navbarItems, cards, users };
