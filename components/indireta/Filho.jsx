export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o pai #1</button>
            <button onClick={() => console.log("Pasou no enem", "uhuuuuu", 10)}>Falar com o pai #2</button>
        </div>
    )
}