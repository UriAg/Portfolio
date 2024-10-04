'use client'
import { useCustomContext } from "@/app/_context/utilsContext";
import Logo from "@/app/_components/Logo";
import Image from "next/image";



const SearchParamsHandler = ({selectedItem}) => {
  const { handleChangePointerColor, setSelectedImage } = useCustomContext();

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
          aria-label="Volver"
          onClick={() => window.history.back()}
          className=" hover:text-green-600 transition-colors"
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
          <div className="pt-3 flex justify-center lg:justify-between gap-y-5 flex-wrap">
            {selectedItem[0].images.length
              ? selectedItem[0].images.map((image, index) => (
                  <Image
                    src={`/images/${selectedItem[0].id}/${image}`}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    onClick={() =>
                      setSelectedImage(`/images/${selectedItem[0].id}/${image}`)
                    }
                    key={index}
                    alt={`Captura de ${selectedItem[0].title}`}
                    className="border-2 w-full lg:w-[48%] border-gray-700 !z-50 transition-opacity opacity-0 transition-transform hover:scale-105"
                    onLoad={(image) =>
                      image.target.classList.remove("opacity-0")
                    }
                    onPointerEnter={() => handleChangePointerColor(true)}
                    onPointerLeave={() => handleChangePointerColor(false)}
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
                className=" text-blue-500 hover:underline"
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
                className=" text-blue-500 hover:underline"
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
