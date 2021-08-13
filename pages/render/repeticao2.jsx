import listaProdutos from '../../listaProdutos'

export default function repeticao2() {
    return (
        function renderizarLinhas() {
            return listaProdutos.map((produto => {
                return (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                    </tr>
                )
            }))
        }
        < div >
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nome</th>
                    <th>Preco</th>
                </tr>
            </thead>
            <tbody>
                {renderizarLinhas()}
            </tbody>
        </table>
        </div >
    )
}