import folhaDeEstilo from "../../css/integracao2.module.css"
export default function Integracao2() {
    return (
        <>
            <div id={folhaDeEstilo.integracao2}>
                <div className={folhaDeEstilo.vermelha}>texto #01</div>
                <div className={folhaDeEstilo.azul}>texto #02</div>
                <div className={folhaDeEstilo.branca}>texto #03</div>
            </div>
        </>
    )
}