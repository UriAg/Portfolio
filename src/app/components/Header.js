"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCustomContext } from "../context/utilsContext";

const Header = () => {
  const { handleChangePointerColor } = useCustomContext();
  const pathname = usePathname();

  return (
    <nav className="w-100 pt-4 pl-4 bg-slate-950 flex flex-col !z-50">
      <div className="w-full pb-4 flex items-center gap-x-4">
        <div className="flex items-center border border-solid border-white/25 rounded p-1 ">
          <span
            className="icon-[ic--baseline-menu] w-5 h-5 bg-white/50"
            role="img"
            aria-hidden="true"
          ></span>
        </div>
        <span
          className="icon-[logos--github-icon] w-8 h-8 invert"
          role="img"
          aria-hidden="true"
        ></span>
        <span className="select-none text-sm">UriAg</span>
      </div>
      <div className="">
        <ul className="flex gap-x-4 text-sm items-center">
          <li
            className={`${pathname === "/" && "border-b-2 border-red-400"}`}
            onPointerEnter={() => handleChangePointerColor(true)}
            onPointerLeave={() => handleChangePointerColor(false)}
          >
            <Link
              href="/"
              className=" h-9 px-2.5 cursor-none flex items-center gap-x-1.5"
            >
              <span
                className="icon-[gala--portrait2] w-4 h-4"
                role="img"
                aria-hidden="true"
              ></span>
              <span>Sobre mí</span>
            </Link>
          </li>
          <li
            className={`${
              pathname === "/experience" && "border-b-2 border-red-400"
            }`}
            onPointerEnter={() => handleChangePointerColor(true)}
            onPointerLeave={() => handleChangePointerColor(false)}
          >
            <Link
              href="/experience"
              className=" h-9 px-2.5 cursor-none flex items-center gap-x-1.5"
            >
              <span
                className="icon-[gala--folder] w-4 h-4"
                role="img"
                aria-hidden="true"
              ></span>
              <span>Experiencia</span>
            </Link>
          </li>
          <li
            className={`${
              pathname === "/projects" && "border-b-2 border-red-400"
            }`}
            onPointerEnter={() => handleChangePointerColor(true)}
            onPointerLeave={() => handleChangePointerColor(false)}
          >
            <Link
              href="/projects"
              className=" h-9 px-2.5 cursor-none flex items-center gap-x-1.5"
            >
              <span
                className="icon-[gala--book] w-4 h-4"
                role="img"
                aria-hidden="true"
              ></span>
              <span>Proyectos</span>
            </Link>
          </li>
          <li
            className={`${pathname === "/soon" && "border-b-2 border-red-400"}`}
            onPointerEnter={() => handleChangePointerColor(true)}
            onPointerLeave={() => handleChangePointerColor(false)}
          >
            <a className=" h-9 px-2.5 cursor-none flex items-center gap-x-1.5">
              <span
                className="icon-[gala--lock] w-4 h-4"
                role="img"
                aria-hidden="true"
              ></span>
              <span>Proximamente</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
