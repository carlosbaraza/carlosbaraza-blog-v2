import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "inpractise.com",
    description:
      "Built with NextJS, TypeScript, PostgresSQL, GraphQL. I am the CTO and lead developer for this company.",
    href: "https://inpractise.com",
    imgSrc: "/content/images/inpractise-screenshot-2026.png",
    featured: true,
    translations: {
      es: {
        description:
          "Construido con NextJS, TypeScript, PostgresSQL, GraphQL. Soy el CTO y desarrollador principal de esta empresa.",
      },
    },
  },
  {
    title: "dashvar",
    description:
      "CSS Variables Library. Strong defaults for good looking designs. Inspired by Tailwind CSS.",
    href: "https://github.com/dashvars/dashvar",
    imgSrc: "/content/images/dashvar-screenshot.png",
    featured: true,
    translations: {
      es: {
        description:
          "Librer\u00eda de Variables CSS. Valores por defecto s\u00f3lidos para dise\u00f1os atractivos. Inspirado en Tailwind CSS.",
      },
    },
  },
  {
    title: "Wisertag",
    description:
      "Startup failure. QR and NFC tags with customizable landing page. Initially used to tag plants with details on how to grow them. Pre-COVID, when people didn't know how to use QR codes.",
    href: "/blog/wisertag",
    imgSrc: "/content/images/2020/07/wisertag-logo.png",
    translations: {
      es: {
        description:
          "Startup fallida. Etiquetas QR y NFC con p\u00e1gina de destino personalizable. Inicialmente usada para etiquetar plantas con detalles sobre c\u00f3mo cultivarlas. Pre-COVID, cuando la gente no sab\u00eda usar c\u00f3digos QR.",
      },
    },
  },
  {
    title: "Stoic Journal",
    description:
      "Build and publish React Native app in one week for iOS and Android. Journaling app with to practice Stoicism and develop the stoic cardinal moral virtues.",
    imgSrc: "/content/images/2020/07/stoic-journal-banner.png",
    href: "/blog/stoic-journal",
    featured: true,
    translations: {
      es: {
        title: "Diario Estoico",
        description:
          "Construir y publicar una app React Native en una semana para iOS y Android. App de diario para practicar el Estoicismo y desarrollar las virtudes cardinales estoicas.",
      },
    },
  },
  {
    title: "WebAssembly London Meetup",
    description: "Founded Meetup with 200+ members in London",
    href: "/blog/webassembly-london-meetup",
    imgSrc: "/content/images/2020/07/web-assembly-london.jpg",
    translations: {
      es: {
        description: "Fund\u00e9 un Meetup con m\u00e1s de 200 miembros en Londres",
      },
    },
  },
  {
    title: "Designed the official logo for WebAssembly",
    description: "I won the official logo contest for WebAssembly.",
    href: "/blog/designed-the-official-logo-for-webassembly",
    imgSrc: "/content/images/2020/07/web-assembly-logo-presentation.png",
    featured: true,
    translations: {
      es: {
        title: "Dise\u00f1\u00e9 el logo oficial de WebAssembly",
        description: "Gan\u00e9 el concurso del logo oficial de WebAssembly.",
      },
    },
  },
  {
    title: "AirFishBowl (Video)",
    description: "Web driven flying robot. uControllers, Python, JavaScript.",
    href: "/blog/airfishbowl",
    imgSrc: "/content/images/2020/07/air-fish-bowl-preview.png",
    translations: {
      es: {
        description:
          "Robot volador controlado por web. Microcontroladores, Python, JavaScript.",
      },
    },
  },
  {
    title: "Quadruino - Keep flying forward (Video)",
    description:
      "Quadruino is an open source drone dreamed by some friends living together during our university years. It served as an experimentation ground for multiple control theory/automation/electronic tests.",
    href: "/blog/quadruino-video",
    imgSrc: "/content/images/2020/07/quadruino-video-preview.jpg",
    translations: {
      es: {
        title: "Quadruino - Sigue volando (Video)",
        description:
          "Quadruino es un dron de c\u00f3digo abierto so\u00f1ado por amigos que viv\u00edan juntos durante nuestros a\u00f1os universitarios. Sirvi\u00f3 como campo de experimentaci\u00f3n para m\u00faltiples pruebas de teor\u00eda de control/automatizaci\u00f3n/electr\u00f3nica.",
      },
    },
  },
  {
    title: "Industrial Robot Arm Simulator (Video)",
    description:
      "Matlab, Control theory, Robotics, Linear Algebra, UI, Industrial Robotics.",
    href: "/blog/industrial-robot-arm-simulator-video",
    imgSrc: "/content/images/2020/07/industrial-robot-arm-simulator-preview.jpg",
    translations: {
      es: {
        title: "Simulador de Brazo Rob\u00f3tico Industrial (Video)",
        description:
          "Matlab, Teor\u00eda de control, Rob\u00f3tica, \u00c1lgebra Lineal, UI, Rob\u00f3tica Industrial.",
      },
    },
  },
  {
    title: "unicorn-contributor",
    description:
      "Do you feel pressed to complete your GitHub profile green bar? Complete the GitHub contribution graph in few seconds!",
    href: "https://github.com/carlosbaraza/unicorn-contributor",
    imgSrc: "/content/images/2020/07/unicorn-contributor.png",
    translations: {
      es: {
        description:
          "\u00bfTe sientes presionado por completar la barra verde de tu perfil de GitHub? \u00a1Completa el gr\u00e1fico de contribuciones de GitHub en segundos!",
      },
    },
  },
  {
    title: "aws4curl",
    description: "curl, but with AWS Signature Version 4",
    href: "/blog/aws4curl",
    translations: {
      es: {
        description: "curl, pero con AWS Signature Version 4",
      },
    },
  },
  {
    title: "Many more projects on GitHub",
    description: "I publish a lot of projects on my GitHub profile.",
    href: "https://github.com/carlosbaraza",
    translations: {
      es: {
        title: "Muchos m\u00e1s proyectos en GitHub",
        description: "Publico muchos proyectos en mi perfil de GitHub.",
      },
    },
  },
];
