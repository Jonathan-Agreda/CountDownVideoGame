import { useState, useRef } from "react"

export const Player = () => {
    const inputNameRef = useRef(null)

    const [playerName, setPlayerName] = useState(null)

    const handleButtonClick = () => {
        setPlayerName(inputNameRef.current.value)
        inputNameRef.current.value = null
    }

    return (
        <section className="text-center mt-6" >
            <h2 className="text-[#913131] mb-5 font-bold text-xl" >
                Bienvenido al juego, {playerName ?? "¿quién eres aspirante?"}</h2>
            <p className="flex justify-center items-center" >
                <input
                    ref={inputNameRef}
                    type="text" className="rounded-s-md border-[1.5px] border-solid border-[#3F2121] 
                bg-[#3f21218f] p-1 pl-3 text-[#d1f0ec] focus:outline-none"
                />
                <button className="rounded-e-md font-bold cursor-pointer border-[1.5px] border-solid 
                border-[#3F2121] bg-[#691A1A] px-4 py-[0.25rem] text-[#f2f2f2] hover:bg-[#3c8379] 
                hover:border-[#3c8379] active:bg-[#2c5f56] active:border-[#2c5f56] "
                    onClick={handleButtonClick}
                >Guarda tu nombre</button>
            </p>
        </section >
    )
}
