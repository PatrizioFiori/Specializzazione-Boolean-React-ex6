
import { useState, useEffect } from "react"

export default function useCustomPointer(component) {
    const [position, setPosition] = useState({ X: 0, Y: 0 })

    useEffect(() => {
        const handleMouseMove = event => {
            setPosition({ X: event.clientX, Y: event.clientY })
        }

        document.addEventListener("mousemove", handleMouseMove)

        return () => { document.removeEventListener("mousemove", handleMouseMove) }

    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: position.Y,
                left: position.X + 10,

            }}
        >
            {component}
        </div>
    )

}

