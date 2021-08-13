export default function repeticao1() {
    const listaAprovados = [
        'Mateus Henrique',
        'Tiago Henrique',
        'Larissa Henrique',
        'Laura Henrique',
        'Diego Henrique',
        'Leliane Henrique',
    ]
    function renderizarLista() {
        return listaAprovados.map(elemento => <li>{elemento}</li>)
    }
    return (
        <>
            {renderizarLista()}
        </>
    )
}

// function renderizarLista() {
//     const itens = []
//     for (let contador = 0; contador < listaAprovados.length; contador++) {
//         itens.push(<li key={contador}>{listaAprovados[contador]}</li>)
//     }
//     return itens
// }
// return (
//     <ul>
//         {renderizarLista()}
//     </ul>
// )