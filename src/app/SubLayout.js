'use client'
import { Inter } from "next/font/google";
import { useCustomContext } from "./context/utilsContext"

const inter = Inter({ subsets: ["latin"] });


function SubLayout({ children }) {
    const { pointerHover, open, cursorPosition, handleChangePointerPosition, title } = useCustomContext()

    return (
    <html lang="es">
        <body className={`${inter.className} ${open && "overflow-hidden"} relative cursor-none overflow-x-hidden`} onPointerMove={e => handleChangePointerPosition(e)}>
            <span className={`absolute w-4 h-4 ${pointerHover ? "bg-red-400" : "bg-green-600"} rounded-full z-50 pointer-events-none transform-all`} style={{left:`${cursorPosition.x}px`, top:`${cursorPosition.y}px`}}></span>   
            {children}
        </body>
    </html>
    )
}

export default SubLayout