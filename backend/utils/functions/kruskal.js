const grafo = require('./grafo');

async function kruskal(jogadores, formacao, preco=-1){
    var dVertices = {}
    var vertices = []
    var arestas = []
    var escalacoes = [(0,3,4,3), (0,3,5,2), (2,2,3,3), (2,2,4,2), (2,2,5,1), (2,3,3,2), (2,3,4,1)]

    var maximos = [1,escalacoes[formacao][0],escalacoes[formacao][1],escalacoes[formacao][2],escalacoes[formacao][3],1]
    var quant_posicao = [0,0,0,0,0,0]

    var vs = jogadores.vertices

    vs.forEach(async (ver) => {
        var a = {
            pred: null, 
            custo: 9999999
        }
        var id = ver.idJogador
        dVertices[id] = a
        vertices.push(id)
    });

    vs.forEach(async (ver) => {
        var vizinhos = await grafo.getVizinhos(jogadores, ver.idJogador)
        vizinhos.forEach((ver2) => {
            var b = {
                origem: ver.idJogador,
                destino: ver2.idJogador,
                peso: grafo.findEdge(jogadores, ver.idJogador, ver2.idJogador).peso
            }
            arestas.push(b)
        });
    });

    arestas.sort()

    if(preco < -1){
        for(var l=0; l< arestas.length; l++){
            var posicao_origem = grafo.getJogador(jogadores, arestas[l].origem).idPosicao
            var posicao_destino = grafo.getJogador(jogadores, arestas[l].destino).idPosicao
            if(dVertices[arestas[l].origem].pred == null && quant_posicao[posicao_destino] < maximos[posicao_destino]){
                dVertices[arestas[l].origem].pred = arestas[l].destino
                quant_posicao[posicao_destino] = quant_posicao[posicao_destino] + 1
            } else if (dVertices[arestas[l].destino].pred == null && quant_posicao[posicao_origem] < maximos[posicao_origem]){
                dVertices[arestas[l].destino].pred = arestas[l].origem;
                quant_posicao[posicao_origem] = quant_posicao[posicao_origem] + 1
            }
        
            if(dVertices[arestas[l].origem].pred == arestas[l].destino && dVertices[arestas[l].destino].pred == arestas[l].origem){
                dVertices[arestas[l].destino].pred = null;
            }
        }
    } else {
        var preco_atual = 0
        for(var l=0; l< arestas.length; l++){
            var posicao_origem = jogadores.getJogador(arestas[l].origem).idPosicao
            var posicao_destino = jogadores.getJogador(arestas[l].destino).idPosicao
            var preco_destino = jogadores.getJogador(arestas[l].destino).preco
            var preco_origem = jogadores.getJogador(arestas[l].origem).preco
            if(dVertices[arestas[l].origem].pred == null && quant_posicao[posicao_destino] < maximos[posicao_destino] && preco_atual + preco_destino <= preco ){
                dVertices[arestas[l].origem].pred = arestas[l].destino
                quant_posicao[posicao_destino] = quant_posicao[posicao_destino] + 1
                preco_atual = preco_atual + preco_destino
            } else if (dVertices[arestas[l].destino].pred == null && quant_posicao[posicao_origem] < maximos[posicao_origem] && preco_atual + preco_origem <= preco){
                dVertices[arestas[l].destino].pred = arestas[l].origem;
                quant_posicao[posicao_origem] = quant_posicao[posicao_origem] + 1
                preco_atual = preco_atual + preco_origem
            }
        
            if(dVertices[arestas[l].origem].pred == arestas[l].destino && dVertices[arestas[l].destino].pred == arestas[l].origem){
                dVertices[arestas[l].destino].pred = null;
            }
        }
    }

    return dVertices
}

module.exports = kruskal