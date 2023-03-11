import React, { useState } from 'react'
import Card from './Card'

//comida, bebida, cantidad
const Formulario = () => {

    const [comida, setComida] = useState("")
    const [bebida, setBebida] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState("")
    const [showCard, setShowCard] = useState(false)


    const handleChangeComida = (event) => {
        setComida(event.target.value);
    }

    const handleChangeBebida = (event) => {
        setBebida(event.target.value)
    }

    const handleChangeCantidad = (event) => {
        setCantidad(event.target.value)
    }

    const handleSubmitComida = (event) => {
        event.preventDefault()

        
        if (comida.length <= 3 || comida[0] === " ") {
            setShowAlert(true)
            setMessageAlert("Por favor chequea que la información sea correcta.")
            return
        }
        if (bebida.length <= 6) {
            setShowAlert(true)
            setMessageAlert("Por favor chequea que la información sea correcta.")
            return
        }
        setShowCard(true)
    }

    const deleteAlert = () => {
        setShowAlert(false)
        setMessageAlert("")
        setComida("")
        setBebida("")
        setCantidad(0)
    }


    return (
        <form onSubmit={handleSubmitComida}>            
            <input type="text" onChange= {handleChangeComida} value={comida} placeholder = "Comida"/>
            <input type="text" onChange={handleChangeBebida} value={bebida} placeholder = "Bebida"/>
            <input type="number" min={0} max={100} onChange={handleChangeCantidad} value={cantidad} placeholder = "Cantidad" />
            <input type="submit" value="Enviar" />
            <dialog open={showAlert}>
                {messageAlert}
                <button onClick={() => deleteAlert()}>&#10005;</button>
            </dialog>
            {showCard && <Card comida={comida} bebida={bebida} cantidad={cantidad} />}
        </form>
    )
}

export default Formulario