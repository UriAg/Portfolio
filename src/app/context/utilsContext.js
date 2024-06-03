"use client";
import { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export const useCustomContext = () => useContext(UtilsContext);

export const Provider = ({ children }) => {
  const [pointerHover, setPointerHover] = useState(false);
  const handleChangePointerColor = (state) => {
    setPointerHover(state);
  };

  const [cursorPosition, setPosition] = useState({ x: 0, y: 0 });
  const handleChangePointerPosition = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const [title, setTitle] = useState("Bienvenido!");

  const [enabledPointer, setPointerEnabled] = useState(false);

  const handleEnablePointer = () =>{
    setPointerEnabled(!enabledPointer);
  }
  const value = {
    pointerHover,
    handleChangePointerColor,
    cursorPosition,
    handleChangePointerPosition,
    title,
    setTitle,
    enabledPointer,
    handleEnablePointer
  };

  return (
    <UtilsContext.Provider value={value}>{children}</UtilsContext.Provider>
  );
};
