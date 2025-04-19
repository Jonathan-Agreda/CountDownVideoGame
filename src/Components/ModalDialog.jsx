import { forwardRef, useImperativeHandle, useRef } from "react"

const ForwardedModalDialog = ({ timeRemaining, onResetTimeRemaining, timeTarget }, ref) => {
    const dialogRef = useRef()

    const userHasLost = timeRemaining <= 0
    const timeRemainingFormatted = (timeRemaining / 1000).toFixed(2)
    const userScore = Math.round((1 - (timeRemaining / (timeTarget * 1000))) * 100)
    const secondsText = (timeTarget > 1 ? "segundos" : "segundo")
    const tittleModal = userHasLost ? <>¡Has perdido!</> : <>Puntaje total: <strong>{userScore}</strong>/100</>
    const timerIsStoppedText = userHasLost ? <>No has conseguido parar el tiempo antes del fin de la cuenta atrás. ¡Vuelve a probar suerte!</>
        : <>Has conseguido parar el tiempo a falta de <strong>{timeRemainingFormatted}</strong> segundos</>

    useImperativeHandle(ref, () => ({
        open: () => {
            dialogRef.current.showModal()
        }
    }))

    return (
        <>
            <dialog
                ref={dialogRef}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none rounded-lg p-8 bg-[#d7fcf8]">
                <h2 className="font-mono text-center uppercase font-bold text-4xl mt-2 mb-2">
                    {tittleModal}
                </h2>
                <p className="text-lg">
                    El contrareloj esta pautado para finalizar en {timeTarget} {secondsText} </p>
                <p>
                    {timerIsStoppedText}
                </p>
                <form
                    action="dialog"
                    onSubmit={onResetTimeRemaining}
                >
                    <button
                        className="mt-4 pt-2 pb-2 pl-4 pr-4 border-none
                    rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715] active:bg-[#0d1f1c]"
                    >Cerrar</button>
                </form>
            </dialog>
        </>
    )
}

export const ModalDialog = forwardRef(ForwardedModalDialog)
