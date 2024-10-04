"use client";
import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard.js";
import { useCustomContext } from "../_context/utilsContext.js";

const WorkDesk = ({ workJson, type }) => {
  const { handleChangePointerColor } = useCustomContext();
  const [projectsOrder, setProjectsOrder] = useState("newest");

  const handleOrderChange = (state) => {
    setProjectsOrder(state);
  };

  const proyectosOrdenados = useMemo(() => {
    const sortedProjects = [...Object.values(workJson)].sort((a, b) => {
      const dateA = new Date(a.date_start.split("/").reverse().join("-"));
      const dateB = new Date(b.date_start.split("/").reverse().join("-"));
      return projectsOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    return sortedProjects;
  }, [Object.values(workJson), projectsOrder]);

  return (
    <section className="w-full lg:w-3/4 lg:px-12 z-10">
      <div className="w-full pb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl">{type==='experience'?'Trabajos':'Proyectos'}</h1>
        <p>
          Ordenar por:&nbsp;
          <span
            className={`${
              projectsOrder === "newest"
                ? "text-red-400"
                : "hover:text-gray-500"
            } transition-colors`}
            onClick={() => handleOrderChange("newest")}
            onPointerEnter={() => handleChangePointerColor(true)}
            onPointerLeave={() => handleChangePointerColor(false)}
          >
            Reciente primero
          </span>
          &nbsp;-&nbsp;
          <span
            className={`${
              projectsOrder === "oldest"
                ? "text-red-400"
                : "hover:text-gray-500"
            } transition-colors`}
            onClick={() => handleOrderChange("oldest")}
            onPointerEnter={() => handleChangePointerColor(true)}
            onPointerLeave={() => handleChangePointerColor(false)}
          >
            Antiguo primero
          </span>
        </p>
      </div>
      <section className="flex justify-between flex-wrap gap-y-6">
        {proyectosOrdenados.length > 0
          ? proyectosOrdenados.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                id={project.id}
                dateStart={project.date_start}
                dateEnd={project.date_end}
                description={project.description}
                icon={project.icon}
              />
            ))
          : "Cargando..."}
      </section>
    </section>
  );
};

export default WorkDesk;
