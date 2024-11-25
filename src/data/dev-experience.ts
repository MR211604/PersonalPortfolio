
interface Experience {
  date: string;
  title: string;
  description: string;
  company: string;
  link: string;
}


export const experience: { [key: string]: Experience[] } = {
  'es': [
    {
      date: "Noviembre 2023 - Mayo 2024",
      title: "Desarrollador analista",
      company: "UControl Sotware",
      description: "Encargado de desarrollar y mantener un ERP empresarial haciendo uso del stack MERN (MongoDB, ExpressJS, React y NodeJS), crear procesos automáticos usando Amazon AWS y realizar procesos de refactorización y optimización a código legacy.",
      link: ""
    }
  ],
  'en': [
    {
      date: "November 2023 - May 2024",
      title: "Developer analyst",
      company: "UControl Sotware",
      description: "Responsible for developing and maintaining an enterprise ERP using the MERN stack (MongoDB, ExpressJS, React and NodeJS), creating automatic processes using Amazon AWS and performing refactoring and optimization processes to legacy code.",
      link: ""
    }
  ]
}