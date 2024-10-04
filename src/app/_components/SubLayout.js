"use client";
import "@/app/globals.css";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { useCustomContext } from "../_context/utilsContext";
import ImageViewer from "./ImageViewer";

const inter = Inter({ subsets: ["latin"] });

const SubLayout = ({ children }) => {
  const {
    pointerHover,
    open,
    handleEnablePointer,
    enabledPointer,
    selectedImage
  } = useCustomContext();

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    
    // Movimiento del cursor personalizado
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX + window.scrollX - 8}px`;
      cursor.style.top = `${e.clientY + window.scrollY - 13}px`;
    };

    // Animación al hacer clic
    const handleClick = () => {
      cursor.classList.add('clicked');
      setTimeout(() => {
        cursor.classList.remove('clicked');
      }, 150);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    // Cleanup al desmontar el componente
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <html lang="es">
      <body
        className={`${inter.className} ${
          open && "!overflow-hidden"
        } relative overflow-x-hidden ${selectedImage && "overflow-y-hidden"}`}
        onPointerEnter={()=>handleEnablePointer(true)}
        onPointerLeave={()=>handleEnablePointer(false)}
        >
        {
          selectedImage && <ImageViewer/>
        }
        <span
          className={`cursor absolute items-center justify-center w-9 h-9 transition-transform duration-150 border-2 ${
            pointerHover ? "border-green-600 scale-150" : "border-red-400"
          } hidden ${enabledPointer ? "lg:!flex" : "lg:!hidden"} rounded-full !z-[100] pointer-events-none`}
        >
          <span className="max-w-2 max-h-2 size-2 bg-white rounded-full"></span>
        </span>
        {children}
      </body>
    </html>
  );
};

export default SubLayout;
