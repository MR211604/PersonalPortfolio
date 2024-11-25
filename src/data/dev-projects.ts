import ExpressJSIcon from "../icons/ExpressJSIcon.astro";
import MySQLIcon from "../icons/MySQLIcon.astro";
import ReactIcon from "../icons/ReactIcon.astro";
import TailwindCSSIcon from "../icons/TailwindCSSIcon.astro";

const TAGS = {
  REACT: {
    name: "React",
    class: "bg-cyan-950/50 border border-cyan-950 text-white",
    icon: ReactIcon
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-cyan-950/30 border border-cyan-950 text-white",
    icon: MySQLIcon
  },
  EXPRESSJS: {
    name: "ExpressJS",
    class: "bg-neutral-800/30 border border-neutral-400/30 text-white",
    icon: ExpressJSIcon
  },
  TAILWINDCSS: {
    name: "TailwindCSS",
    class: "bg-cyan-950/50 border border-cyan-950 text-white",
    icon: TailwindCSSIcon
  }
}

type TagsType = typeof TAGS[keyof typeof TAGS];

// La interfaz `Project` ahora tiene el tipo `tags` como un arreglo de las claves de TAGS
interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  redirectName: string;
  tags: TagsType[]; 
}

export const projects: { [key: string]: Project[] } = {
  'es': [
    {
      title: 'Wonders from El Salvador ',
      description: 'Proyecto de desarrollo web que busca promover el turismo en El Salvador, mostrando los lugares más emblemáticos del país, contando con la posibilidad de filtrar, valorar y comentar cada lugar para que los usuarios puedan compartir sus experiencias.',
      link: '/', 
      redirectName: 'Link a la página',     
      github: 'https://github.com/MR211604/wonders-from-el-salvador',
      image: '/src/images/wonders-from-el-salvador.webp',
      tags: [TAGS.REACT, TAGS.MYSQL, TAGS.EXPRESSJS, TAGS.TAILWINDCSS],
    },
  ],
  'en': [
    {
      title: 'Wonders from El Salvador ',
      description: 'Web development project that seeks to promote tourism in El Salvador, showing the most emblematic places in the country, with the possibility of filtering, rating and commenting on each place so that users can share their experiences.',
      link: '/',
      redirectName: 'Link to the page',
      github: 'https://github.com/MR211604/wonders-from-el-salvador',
      image: '/src/images/wonders-from-el-salvador.webp',
      tags: [TAGS.REACT, TAGS.MYSQL, TAGS.EXPRESSJS, TAGS.TAILWINDCSS],
    }
  ]
}