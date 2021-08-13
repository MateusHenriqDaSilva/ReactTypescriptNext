export default function xadrez() {
    function matriz() {
        for (let coluna = 0; coluna <= 8; coluna++) {
            for (let linha = 0; linha <= 8; linha++) {
                if ((linha + coluna) % 2 == 0) {
                    return (
                        <div className="cartaoPar"></div>
                    )
                } else {
                    return (
                        <div className="cartaoImpar"></div>
                    )
                }
            }
        }
    }

    return (
        <>
            {
                matriz()
            }

        </>
    )
}