import { useState } from "react"

export const Player = () => {
    const [playerName, setPlayerName] = useState("")
    const [buttonClicked, setButtonClicked] = useState(false)

    const handleChangePlayerName = (e) => {
        setButtonClicked(false)
        setPlayerName(e.target.value)
    }

    const handleButtonClick = () => {
        setButtonClicked(true)
        console.log(playerName)
    }

    return (
        <section className="text-center mt-6" >
            <h2 className="text-[#913131] mb-5 font-bold text-xl" >
                Bienvenido al juego, {buttonClicked ? playerName : "¿quién eres aspirante?"}</h2>
            <p className="flex justify-center items-center" >
                <input type="text" className="rounded-s-md border-[1.5px] border-solid border-[#3F2121] 
                bg-[#3f21218f] p-1 pl-3 text-[#d1f0ec] focus:outline-none"
                    onChange={(e) => {
                        handleChangePlayerName(e)
                    }} />
                <button className="rounded-e-md font-bold cursor-pointer border-[1.5px] border-solid 
                border-[#3F2121] bg-[#691A1A] px-4 py-[0.25rem] text-[#f2f2f2] hover:bg-[#3c8379] 
                hover:border-[#3c8379] "
                    onClick={handleButtonClick}
                >Guarda tu nombre</button>
            </p>
        </section >
    )
}
