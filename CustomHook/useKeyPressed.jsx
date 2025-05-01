import { useState, useEffect } from "react"

export default function useKeyPressed() {
    const [isPressed, setIsPressed] = useState(false)
    const [text, setText] = useState("")

    useEffect(() => {

        const downHandler = event => {
            setIsPressed(true)
            setText(`Hai premuto ${event.key}`)

            setTimeout(() => {
                setIsPressed(false);
                setText("");
            }, 1000);
        }

        window.addEventListener("keydown", downHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
        };

    }, [])

    return { text, isPressed };



}
