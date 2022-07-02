const grafo = require('./grafo');

async function kruskal(jogadores, formacao, preco=-1){
    var dVertices = {}
    var vertices = []
    var arestas = []
    var escalacoes = [[0,3,4,3], [0,3,5,2], [2,2,3,3], [2,2,4,2], [2,2,5,1], [2,3,3,2], [2,3,4,1]]

    var maximos = [1,escalacoes[formacao][0],escalacoes[formacao][1],escalacoes[formacao][2],escalacoes[formacao][3],1]
    var quant_posicao = [0,0,0,0,0,0]
    var quant_jogadores = 0

    var vs = jogadores.vertices

    var a = {}
    var id = 0

    for(var ver of vs){
        a = {
            pred: null, 
            custo: 9999999
        }
        id = ver.idJogador
        dVertices[id] = a
        vertices.push(id)
    }

    var peso = 0
    var b = {}
    for(var ver of vs){
        var vizinhos = await grafo.getVizinhos(jogadores, ver.idJogador)
        for(var viz of vizinhos){
            peso = await grafo.findEdge(jogadores, ver.idJogador, viz)
            b = {
                origem: ver.idJogador,
                destino: viz,
                peso
            }
            arestas.push(b)
        }
    }

    arestas.sort((a,b) => (a.peso > b.peso ? 1 : -1))

    if(preco <= -1){
        var i = 0 
        while(quant_jogadores <= 12 &&  i < arestas.length){
            var ar = arestas[i]
            var posicao_origem = await grafo.getJogador(jogadores, ar.origem)
            posicao_origem = posicao_origem.idPosicao
            var posicao_destino = await grafo.getJogador(jogadores, ar.destino)
            posicao_destino = posicao_destino.idPosicao
            if(dVertices[ar.origem].pred == null && quant_posicao[posicao_destino-1] < maximos[posicao_destino-1] && quant_jogadores < 12){
                dVertices[ar.origem].pred = ar.destino
                dVertices[ar.origem].custo = ar.peso
                quant_posicao[posicao_destino-1] = quant_posicao[posicao_destino-1] + 1
                quant_jogadores++
            } else if (dVertices[ar.destino].pred == null && quant_posicao[posicao_origem-1] < maximos[posicao_origem-1] && quant_jogadores < 12){
                dVertices[ar.destino].pred = ar.origem;
                dVertices[ar.destino].custo = ar.peso
                quant_posicao[posicao_origem-1] = quant_posicao[posicao_origem-1] + 1
                quant_jogadores++
            }
        
            if(dVertices[ar.origem].pred == ar.destino && dVertices[ar.destino].pred == ar.origem){
                dVertices[ar.destino].pred = null;
            }
            i++
        }
    } else {
        var preco_atual = 0
        var i = 0 
        while(quant_jogadores <= 12 &&  i < arestas.length){
            var ar = arestas[i]
            var posicao_origem = await grafo.getJogador(jogadores, ar.origem)
            posicao_origem = posicao_origem.idPosicao
            var posicao_destino = await grafo.getJogador(jogadores, ar.destino)
            posicao_destino = posicao_destino.idPosicao
            var preco_destino = await grafo.getJogador(jogadores, ar.destino)
            preco_destino = preco_destino.preco
            var preco_origem = await grafo.getJogador(jogadores, ar.origem)
            preco_origem = preco_origem.preco
            if(dVertices[ar.origem].pred == null && quant_posicao[posicao_destino-1] < maximos[posicao_destino-1] && preco_atual + preco_destino <= preco && quant_jogadores < 12){
                dVertices[ar.origem].pred = ar.destino
                dVertices[ar.origem].custo = ar.peso
                quant_posicao[posicao_destino-1] = quant_posicao[posicao_destino-1] + 1
                preco_atual = preco_atual + preco_destino
                quant_jogadores++
            } else if (dVertices[ar.destino].pred == null && quant_posicao[posicao_origem-1] < maximos[posicao_origem-1] && preco_atual + preco_origem <= preco && quant_jogadores < 12){
                dVertices[ar.destino].pred = ar.origem;
                dVertices[ar.destino].custo = ar.peso
                quant_posicao[posicao_origem-1] = quant_posicao[posicao_origem-1] + 1
                preco_atual = preco_atual + preco_origem
                quant_jogadores++
            }
        
            if(dVertices[ar.origem].pred == ar.destino && dVertices[ar.destino].pred == ar.origem){
                dVertices[ar.destino].pred = null;
            }
            i++
        }
    }

    return dVertices
}

module.exports = kruskal