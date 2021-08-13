import Titulo from "../../components/titulo";


export default function usandoTitulo() {
    return (
        <div>
            <Titulo
                principal="Obrigado Mateus"
                secundario="Incluir, Alterar e Excluir Coisas"
            />
            <Titulo
                principal="Obrigado Diego"
                secundario="Incluir, Alterar e Excluir Coisas"
                pequeno
            />
        </div>
    )
}