import { useState } from "react"
import ContadorDisplay from "../../components/contadorDisplay"

export default function Contador() {
    let [contador, mudarContador] = useState(0)

    return (
        <div>
            <h1>Contador</h1>
            <ContadorDisplay numero={contador} />
            <div>Valor: {contador}</div>
            <button onClick={() => mudarContador(contador - 1)}>-</button>
            <button onClick={() => mudarContador(contador + 1)}>+</button>
        </div>
    )
}