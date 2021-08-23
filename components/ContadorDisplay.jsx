export default function ContadorDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            margin: "10px",
            width: "80px",
            borderRadius: "100px",
            backgroundColor: "#222",
            color: '#fff',
            fontSize: "2rem"
        }}>
            {props.numero}
        </div>
    )
}