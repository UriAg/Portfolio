"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useCustomContext } from "./context/utilsContext";
import ImageViewer from "./components/ImageViewer";

const inter = Inter({ subsets: ["latin"] });

const SubLayout = ({ children }) => {
  const {
    pointerHover,
    open,
    cursorPosition,
    handleChangePointerPosition,
    handleEnablePointer,
    enabledPointer,
    selectedImage
  } = useCustomContext();

  return (
    <html lang="es">
      <body
        className={`${inter.className} ${
          open && "overflow-hidden"
        } relative cursor-none overflow-x-hidden ${selectedImage && "overflow-y-hidden"}`}
        onPointerMove={(e) => handleChangePointerPosition(e)}
        onPointerEnter={()=>handleEnablePointer(true)}
        onPointerLeave={()=>handleEnablePointer(false)}
        >
        {
          selectedImage && <ImageViewer/>
        }
        <span
          className={`absolute w-4 h-4 transition-transform ${
            pointerHover ? "bg-green-600 scale-150" : "bg-red-400"
          } hidden ${enabledPointer ? "lg:!block" : "lg:!hidden"} rounded-full !z-[100] pointer-events-none transform-all`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        ></span>
        {children}
      </body>
    </html>
  );
};

export default SubLayout;
