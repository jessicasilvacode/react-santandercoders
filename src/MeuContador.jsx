import { useState } from "react"

export default function MEuContador() {

    console.log('Renderizando meu contador...')

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    return (
        <div>
            <h2>Contador</h2>
            <h5>{contador}</h5>
            {contador > 9 ? <h4>Valor muito alto!</h4> : null}
            {contador < 1 ? <h4>Valor muito baixo!</h4> : null}
            <button onClick={aumentar}>+</button>
            <button onClick={diminuir}>-</button>
        </div>
    )
}
