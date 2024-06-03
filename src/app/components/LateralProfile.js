"use client";
import Image from "next/image";
import { useState } from "react";
import { useCustomContext } from "../context/utilsContext";

const LateralProfile = () => {
  const { handleChangePointerColor } = useCustomContext();
  const [successCopy, setSuccessCopy] = useState();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("uriel.aguero1812@gmail.com");
      setSuccessCopy("¡Copiado!");
    } catch (error) {
      setSuccessCopy("Error");
    }
  };

  return (
    <section className="w-1/4 z-10">
      <Image
        src="/personal-image.jpg"
        width={300}
        height={300}
        priority={true}
        alt="Foto de perfil"
        className="rounded-full border-2 border-slate-800 transition-opacity opacity-0 !z-50"
        onLoadingComplete={(image) =>
          image.classList.remove("opacity-0")
        }
      />
      <article className="pt-5">
        <h2 className="text-2xl font-bold">Uriel Agüero</h2>
        <h2 className="text-xl font-light text-gray-500">
          UriAg &middot; he/him
        </h2>
        <p className="py-3 font-light" style={{ fontSize: ".92rem" }}>
          Liderazgo | Proactivo | Empático | Trabajo en equipo | Rápido
          aprendizaje | Adaptabilidad | Gestión del tiempo | Resolución de
          problemas | Autodidacta | Responsable | Comunicador efectivo |
          Flexibilidad | Atención al detalle | Escucha activa
        </p>
        <div className="flex justify-center">
          <hr className="w-3/4 opacity-20" />
        </div>
        <div className="pt-3">
          <ul className="text-sm">
            <li
              className="pb-2 flex items-center gap-x-2"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="mailto:uriel.aguero1812@gmail.com"
                className="flex items-center gap-x-2 cursor-none hover:text-red-400"
              >
                <span
                  className="icon-[bi--envelope]"
                  role="img"
                  aria-hidden="true"
                ></span>
                uriel.aguero1812@gmail.com
              </a>
              <span
                className="icon-[bi--copy] w-4 h-4 hover:bg-red-400"
                role="img"
                aria-hidden="true"
                onClick={handleCopy}
              ></span>
              {successCopy && (
                <span className="text-red-400 text-xs opacity-70">
                  {successCopy}
                </span>
              )}
            </li>
            <li
              className="pb-2 hover:text-red-400"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="https://www.linkedin.com/in/uri-aguero"
                target="_blank"
                className="flex items-center gap-x-2 cursor-none"
              >
                <span
                  className="icon-[bi--linkedin]"
                  role="img"
                  aria-hidden="true"
                ></span>
                in/uri-aguero
              </a>
            </li>
            <li
              className="pb-2 hover:text-red-400"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="https://github.com/UriAg"
                target="_blank"
                className="flex items-center gap-x-2 cursor-none"
              >
                <span
                  className="icon-[uiw--github]"
                  role="img"
                  aria-hidden="true"
                ></span>
                github/UriAg
              </a>
            </li>
            <li
              className="hover:text-red-400"
              onPointerEnter={() => handleChangePointerColor(true)}
              onPointerLeave={() => handleChangePointerColor(false)}
            >
              <a
                href="/Uriel_Aguero_fullstack_cv.pdf"
                download
                className="flex items-center gap-x-2 cursor-none"
              >
                <span
                  className="icon-[hugeicons--google-sheet]"
                  role="img"
                  aria-hidden="true"
                ></span>
                Descargar Curriculum
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default LateralProfile;
