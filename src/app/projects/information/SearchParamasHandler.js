"use client";
import { useSearchParams } from "next/navigation";
import experience from "../../../../public/experience.json";
import { useCustomContext } from "@/app/context/utilsContext";
import Logo from "@/app/components/Logo";
import Image from "next/image";

const SearchParamsHandler = () => {
  const { handleChangePointerColor } = useCustomContext();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const works = Object.values(experience.work);
  const projects = Object.values(experience.projects);
  const jsonJoin = [...works, ...projects];

  const selectedItem = Object.values(jsonJoin).filter((e) => e.id === id);

  return (
    <div className="w-full pt-3 z-10">
      <div className="flex justify-between items-center pb-4 border-b border-gray-400/25">
        <div>
          <h1 className="text-2xl">{selectedItem[0].title}</h1>
          <h2 className="text-xs text-gray-400">
            {selectedItem[0].date_start} - {selectedItem[0].date_end}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="cursor-none hover:text-red-400 transition-colors"
          onPointerEnter={() => handleChangePointerColor(true)}
          onPointerLeave={() => handleChangePointerColor(false)}
        >
          <span
            className="icon-[ion--close-round] w-8 h-8 "
            role="img"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <article className="flex flex-col-reverse lg:flex-row justify-between pt-4">
        <section className="w-full lg:w-2/3 my-4 lg:p-4">
          <div className="w-full flex justify-center">
            {selectedItem[0].main_image ? (
              <Image
                src={`/images/${selectedItem[0].id}/${selectedItem[0].main_image}`}
                width={500}
                height={500}
                priority={true}
                alt={`Captura principal de ${selectedItem[0].title}`}
                className={`${
                  selectedItem[0].id === "expense" ? "w-1/2" : "w-full"
                } border-2 transition-opacity opacity-0 border-gray-700 !z-50`}
                onLoad={(image) =>
                  image.target.classList.remove("opacity-0")
                }
              />
            ) : (
              ""
            )}
          </div>
          <div className="pt-3 flex justify-center lg:justify-between gap-y-5 flex-wrap">
            {selectedItem[0].images.length
              ? selectedItem[0].images.map((image, index) => (
                  <Image
                    src={`/images/${selectedItem[0].id}/${image}`}
                    width={300}
                    height={300}
                    loading="lazy"
                    key={index}
                    alt={`Captura de ${selectedItem[0].title}`}
                    className="border-2 w-full lg:w-[48%] border-gray-700 !z-50 transition-opacity opacity-0"
                    onLoad={(image) =>
                      image.target.classList.remove("opacity-0")
                    }
                  />
                ))
              : ""}
          </div>
        </section>
        <section className="w-full lg:w-1/3 pb-4 lg:pb-0 lg:pt-4 lg:px-6 flex flex-col gap-y-4">
          <p
            className="text-md"
            dangerouslySetInnerHTML={{ __html: selectedItem[0].description }}
          />
          {selectedItem[0].github_link && (
            <div className="flex gap-x-1 items-center">
              <a
                href={selectedItem[0].github_link}
                target="_blank"
                className="cursor-none text-blue-500 hover:underline"
                onPointerEnter={() => handleChangePointerColor(true)}
                onPointerLeave={() => handleChangePointerColor(false)}
              >
                Ver repositorio{" "}
              </a>
              <span
                className="icon-[tabler--external-link]"
                role="img"
                aria-hidden="true"
              ></span>
            </div>
          )}
          {selectedItem[0].link && (
            <div className="flex gap-x-1 items-center">
              <a
                href={selectedItem[0].link}
                target="_blank"
                className="cursor-none text-blue-500 hover:underline"
                onPointerEnter={() => handleChangePointerColor(true)}
                onPointerLeave={() => handleChangePointerColor(false)}
              >
                Ir al sitio{" "}
              </a>
              <span
                className="icon-[tabler--external-link]"
                role="img"
                aria-hidden="true"
              ></span>
            </div>
          )}
          <div className="flex gap-3 flex-wrap">
            {selectedItem[0].icon.length > 0 &&
              Object.values(selectedItem[0].icon).map((el, index) => (
                <Logo key={index} size="medium" tooltip={false} icon={el} />
              ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default SearchParamsHandler;
