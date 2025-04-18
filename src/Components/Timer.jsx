import { useState, useRef } from "react"



export const Timer = ({ title, time }) => {
    const [hasLooser, setHasLooser] = useState(false)
    const [hasStart, setHasStart] = useState(false)

    const timerRef = useRef()

    const handleStartTime = () => {
        setHasStart(true)
        console.log("Empezar el juego")
        timerRef.current = setTimeout(() => {
            setHasStart(false)
            console.log("Tiempo terminado")
            setHasLooser(true)
        }, time * 1000)
    }

    const handleStopTime = () => {
        clearInterval(timerRef.current)
        setHasStart(false)
        console.log("Parar el juego")
    }

    return (
        <section
            className="w-[22rem] flex flex-col items-center justify-center p-8 m-8
        bg-[#691A1A] text-[#edfcfa] shadow-lg rounded-md">
            <h2
                className="text-xl tracking-wide text-center uppercase font-bold mb-2"
            >{title}</h2>
            {hasLooser && <p className="my-1 mb-3">Has perdido</p>}
            <p
                className="border-[1px] border-solid border-[#46cebe] rounded px-2 py-1 m-"
            >{time} segundo{time > 1 ? "s" : ""}</p>
            <p
                className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f]
            text-lg cursor-pointer hover:bg-[#051715] active:bg-[#0d1f1c]"
            >
                <button onClick={hasStart ? handleStopTime : handleStartTime}>
                    {hasStart ? "Parar" : "Empezar"}
                </button>
            </p>
            <p></p>
        </section>
    )
}
