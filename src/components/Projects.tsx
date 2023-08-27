import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import { AiFillGithub } from "react-icons/ai";

import reactComponent from "../assets/img/react-component.jpg";
import tipCalculator from "../assets/img/tipcalculator.jpg";
import pokedex from "../assets/img/pokedex.jpg";
import restCountries from "../assets/img/rest-countries.jpg";
import ageCalculator from "../assets/img/ageCalculator.jpg";


export default function Projects() {
  const projects = [
    {
      title: "Results summary component",
      description: "Frontend Mentor Challenge.",
      image:
      reactComponent,
      link: "",
      repo: "https://github.com/VandersonTavares/results-summary-component",
      colSpan: "col-span-1",
    },
    {
      title: "Rest Countries API (90%...)",
      description: "Frontend Mentor Challenge.",
      image: restCountries,
      repo: "https://github.com/VandersonTavares/rest-countries-api",
      link: "https://eloquent-lolly-c70694.netlify.app",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Age Calculator",
      description: "Age calculator app.",
      image:
      ageCalculator,
      link: "https://exquisite-cactus-43d0a6.netlify.app",
      repo: "https://github.com/VandersonTavares/age-calculator",
      colSpan: "col-span-1",
    },
    {
      title: "Tip Calculator App",
      description: "Calculadora de Gorjetas.",
      image:
      tipCalculator,
      link: "https://benevolent-druid-ddd94e.netlify.app",
      repo: "https://github.com/VandersonTavares/tip-calculator-app",
      colSpan: "col-span-1",
    },
    {
      title: "Pokedéx",
      description: "Pokedéx consumindo 2 API's.",
      image:
        pokedex,
      link: "#",
      repo: "https://github.com/VandersonTavares/pokedex",
      colSpan: "col-span-1",
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-r from-black to-indigo-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos meus projetos pessoais, sempre estou atualizando e adicionando projetos mais modernos.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" title="Demo">
                      <HiArrowTopRightOnSquare className="h-6 w-6" />
                    </a>
                    <a href={project.repo} target="_blank" title="Ir para o código">
                      <AiFillGithub className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}