import "@/app/globals.css";
import Image from "next/image";
import React from "react";
import { useCustomContext } from "../context/utilsContext";

function ImageViewer() {
  const { setSelectedImage, selectedImage, handleChangePointerColor } =
    useCustomContext();

  return (
    <div
      className="flex justify-center items-center fixed z-[60] w-full h-screen backdrop-blur hidden-scrollbar"
      onClick={() => setSelectedImage(false)}
    >
      <div className={`w-full ${selectedImage.split('/')[2] === "exviser" ? "md:w-[30%]" : "md:w-[80%]"}  flex justify-center`} onClick={(e)=>e.stopPropagation()}>
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => setSelectedImage(false)}
          className="cursor-none transition-colors absolute top-[1em] left-[1em] md:top-[3em]
          md:left-[3em]"
          onPointerEnter={() => handleChangePointerColor(true)}
          onPointerLeave={() => handleChangePointerColor(false)}
        >
          <span
            className="icon-[ion--close-round] w-8 h-8 hover:text-green-600"
            role="img"
            aria-hidden="true"
          ></span>
        </button>
        <Image
          src={selectedImage}
          width={selectedImage.split('/')[2] === "exviser" ? 300 : 1500}
          height={selectedImage.split('/')[2] === "exviser" ? 300 :1000}
          loading="lazy"
          alt={`Imagen detallada`}
          className={`border-2 ${selectedImage.split('/')[2] !== "exviser" ? "w-full" : "h-full"} border-gray-700 !z-50 transition-opacity opacity-0 shadow-xl`}
          onLoad={(image) => image.target.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
}

export default ImageViewer;
