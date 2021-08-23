export default function Lista(props) {
    return (
        <h1>
            <h1>Lista de algo</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>{props.children}</ul>
        </h1>
    )
}