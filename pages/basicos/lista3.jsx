function gerarLista(valor) {
    const listaGerada = []
    for (let contador = 1; contador <= valor; contador++) {
        listaGerada.push(<span>{contador},</span>)
    }
    return listaGerada
}

export default function lista() {
    return (
        <div>
            {gerarLista(20)}
        </div>
    )
}
