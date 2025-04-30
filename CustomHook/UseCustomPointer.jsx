import { useState, useEffect } from "react"

export default function useCustomPointer(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = event => {
            setPosition({ x: event.clientX, y: event.clientY })
        }

        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }

    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
            }}

        >
            {component}
        </div>
    )

}