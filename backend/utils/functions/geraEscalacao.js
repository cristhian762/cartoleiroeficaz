const kruskal = require('./kruskal');
const grafo = require('./grafo');

async function geraEscalacao(jogadores, formacao, preco){
    let lista_jogadores = []
    let capitao = 0
    let precoTotal = 0
    let escalacao = await kruskal(jogadores, formacao, preco)

    if(escalacao != 0){
        let maiormedia = -100
        for(let j=0;j<escalacao.length;j++){
            let jogador = await grafo.getJogador(jogadores, escalacao[j])
            if(jogador.idPosicao != 6 && jogador.media > maiormedia){
                capitao = jogador.idJogador
                maiormedia = jogador.media
            }
            precoTotal = precoTotal + jogador.preco
            lista_jogadores.push(jogador)
        }
        return [capitao, precoTotal, lista_jogadores]
    } else {
        return false
    }
}

module.exports = geraEscalacao