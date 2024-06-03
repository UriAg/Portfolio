"use client";
import { Inter } from "next/font/google";
import { useCustomContext } from "./context/utilsContext";

const inter = Inter({ subsets: ["latin"] });

const SubLayout = ({ children }) => {
  const {
    pointerHover,
    open,
    cursorPosition,
    handleChangePointerPosition,
    handleEnablePointer,
    enabledPointer
  } = useCustomContext();

  return (
    <html lang="es">
      <body
        className={`${inter.className} ${
          open && "overflow-hidden"
        } relative cursor-none overflow-x-hidden`}
        onPointerMove={(e) => handleChangePointerPosition(e)}
        onPointerEnter={handleEnablePointer}
        onPointerLeave={handleEnablePointer}
      >
        <span
          className={`absolute w-4 h-4 ${
            pointerHover ? "bg-red-400" : "bg-green-600"
          } hidden lg:${enabledPointer ? "block" : "hidden"} rounded-full z-50 pointer-events-none transform-all`}
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
