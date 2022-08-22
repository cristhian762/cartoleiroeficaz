const kruskal = require('./kruskal');
const grafo = require('./grafo');

async function geraCustoMinimo(jogadores, formacao){
    let preds = []
    let suces = []
    let escalacao = await kruskal(jogadores, formacao)
    let custoMinimo = 0

    for(let id of escalacao){
        let jogador = await grafo.getJogador(jogadores, id)
        custoMinimo = custoMinimo + jogador.preco
    }

    return custoMinimo
}

module.exports = geraCustoMinimo