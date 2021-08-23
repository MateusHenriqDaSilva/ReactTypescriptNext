import { useState } from 'react'
import { Mega } from '../../components/mega'
import NumeroDisplay from '../../components/ContadorDisplay'

export default function MegaSena() {
    const [quantidade, setQuantidade] = useState(6)
    const [numeros, setNumeros] = useState([])

    function renderizarNumeros() {
        return numeros.map((elemento) => <NumeroDisplay key={elemento} numero={elemento} />)
    }
    return (
        <div style={{ display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: 'center' }}>
            <div>
                <h1>Mega sena</h1>
            </div>
            <div style={{ display: "flex", margin: '10px',flexWrap: "wrap", justifyContent: "center" }}>
                {renderizarNumeros()}
            </div>
            <div style={{ padding: '20px' }}>
                <input style={{ padding: '20px' }}
                    type="number"
                    min={6}
                    max={20}
                    value={quantidade}
                    onChange={(evento) => setQuantidade(evento.target.value)} />
                <button style={{ padding: '20px' }} onClick={() => setNumeros(Mega(quantidade))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}