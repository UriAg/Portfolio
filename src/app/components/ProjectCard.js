"use client";
import Link from "next/link";
import { useCustomContext } from "../context/utilsContext";
import Logo from "./Logo.js";

const ProjectCard = ({ title, id, dateStart, dateEnd, description, icon }) => {
  const { handleChangePointerColor } = useCustomContext();

  return (
    <div
      className="bg-gray-800/[.40] w-full sm:!w-[48%] border-2 border-slate-700 transition-transform rounded-md p-4"
    >
      <div className="w-full mb-2">
        <Link
          href={`/projects/information?id=${id}`}
          className="text-md cursor-none text-blue-500 hover:underline"
          onPointerEnter={() => handleChangePointerColor(true)}
          onPointerLeave={() => handleChangePointerColor(false)}
        >
          {title}
        </Link>
        <p className="text-xs text-gray-400">
          {dateStart} - {dateEnd}
        </p>
      </div>
      <p className="mb-2 text-sm max-h-16 line-clamp-2" dangerouslySetInnerHTML={{__html:description}}/>
      <div className="flex gap-x-3">
        {icon.length > 0
          ? Object.values(icon).map((el, index) => (
              <Logo
                key={index}
                size="small"
                tooltip={false}
                transition={false}
                icon={el}
              />
            ))
          : "Cargando..."}
      </div>
    </div>
  );
};

export default ProjectCard;
