export function Mega(quantidade = 6, lista = []) {
    quantidade = +quantidade
    const verificarQuantidadeELista = quantidade < 6 && quantidade < 60
    if (verificarQuantidadeELista) {
        throw ("errou")
    }
    if (lista.length === quantidade) {
        return lista.sort((numeroAtual, numeroDepois) => numeroAtual - numeroDepois)
    }

    const gerarNumerosAleatorios = parseInt(Math.random() * 60) + 1

    if (!lista.includes(gerarNumerosAleatorios)) {
        return Mega(quantidade, [...lista, gerarNumerosAleatorios])
    } else {
        return Mega(quantidade, lista)
    }
}
