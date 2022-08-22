const grafo = require('./grafo');

async function kruskal(jogadores, formacao, preco=-1){
    let dVertices = {}
    let vertices = []
    let arestas = []
    let escalacoes = [[0,3,4,3], [0,3,5,2], [2,2,3,3], [2,2,4,2], [2,2,5,1], [2,3,3,2], [2,3,4,1]]

    let maximos = [1,escalacoes[formacao-1][0],escalacoes[formacao-1][1],escalacoes[formacao-1][2],escalacoes[formacao-1][3],1]
    let quant_posicao = [0,0,0,0,0,0]
    let quant_jogadores = 0

    let vs = jogadores.vertices

    let a = {}
    let id = 0

    for(let ver of vs){
        a = {
            pred: null, 
            custo: 9999999
        }
        id = ver.idJogador
        dVertices[id] = a
        vertices.push(id)
    }

    let peso = 0
    let b = {}
    for(let ver of vs){
        let vizinhos = await grafo.getVizinhos(jogadores, ver.idJogador)
        for(let viz of vizinhos){
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

    let id_jogadores = []
    let limite = 0
    if(preco <= -1){
        let i = 0
        while(quant_jogadores < 12){
            let ar = arestas[i]
            let jogador_origem = await grafo.getJogador(jogadores, ar.origem)
            let posicao_origem = jogador_origem.idPosicao
            let jogador_destino = await grafo.getJogador(jogadores, ar.destino)
            let posicao_destino = jogador_destino.idPosicao
            let id_origem = jogador_origem.idJogador
            let id_destino = jogador_destino.idJogador
            if(dVertices[ar.origem].pred == null && quant_posicao[posicao_destino-1] < maximos[posicao_destino-1]  && quant_jogadores < 12){
                dVertices[ar.origem].pred = ar.destino
                dVertices[ar.origem].custo = ar.peso
                if(id_jogadores.indexOf(id_destino) == -1){
                    id_jogadores.push(id_destino)
                    quant_posicao[posicao_destino-1]++
                    quant_jogadores++
                }
                if(id_jogadores.indexOf(id_origem) == -1 && quant_posicao[posicao_origem-1] < maximos[posicao_origem-1]){
                    id_jogadores.push(id_origem)
                    quant_posicao[posicao_origem-1]++
                    quant_jogadores++
                }
                preco_atual = preco_atual + preco_destino
            } else if (dVertices[ar.destino].pred == null && quant_posicao[posicao_origem-1] < maximos[posicao_origem-1] && quant_jogadores < 12){
                dVertices[ar.destino].pred = ar.origem
                dVertices[ar.destino].custo = ar.peso
                if(id_jogadores.indexOf(id_destino) == -1 && quant_posicao[posicao_destino-1] < maximos[posicao_destino-1]){
                    id_jogadores.push(id_destino)
                    quant_posicao[posicao_destino-1]++
                    quant_jogadores++
                }
                if(id_jogadores.indexOf(id_origem) == -1){
                    id_jogadores.push(id_origem)
                    quant_posicao[posicao_origem-1]++
                    quant_jogadores++
                }
            }
        
            if(dVertices[ar.origem].pred == ar.destino && dVertices[ar.destino].pred == ar.origem){
                dVertices[ar.destino].pred = null;
            }
            i++
        }
    } else {
        let preco_atual = 0
        let i = 0
        let bad = []
        while(quant_jogadores < 12 && limite < 50){
            if(i==arestas.length){
                limite++
                i = 0
                let mais_caro = grafo.maisCaro(jogadores, id_jogadores)
                let jg = id_jogadores.pop()
                bad.push(mais_caro)
                let retira_jogador = await grafo.getJogador(jogadores, jg)
                let posicao_retira = retira_jogador.idPosicao
                let preco_retira = retira_jogador.preco
                quant_posicao[posicao_retira-1]--
                quant_jogadores--
                preco_atual = preco_atual - preco_retira
                let index = id_jogadores.indexOf(mais_caro);
                if (index !== -1) {
                    id_jogadores.splice(index, 1);
                }
            }
            let ar = arestas[i]
            let jogador_origem = await grafo.getJogador(jogadores, ar.origem)
            let posicao_origem = jogador_origem.idPosicao
            let jogador_destino = await grafo.getJogador(jogadores, ar.destino)
            let posicao_destino = jogador_destino.idPosicao
            let preco_destino = jogador_destino.preco
            let preco_origem = jogador_origem.preco
            let id_origem = jogador_origem.idJogador
            let id_destino = jogador_destino.idJogador
            if(bad.indexOf(id_destino) == -1 && dVertices[ar.origem].pred == null && quant_posicao[posicao_destino-1] < maximos[posicao_destino-1] && preco_atual + preco_destino <= preco && quant_jogadores < 12){
                dVertices[ar.origem].pred = ar.destino
                dVertices[ar.origem].custo = ar.peso
                if(id_jogadores.indexOf(id_destino) == -1){
                    id_jogadores.push(id_destino)
                    quant_posicao[posicao_destino-1]++
                    quant_jogadores++
                    preco_atual = preco_atual + preco_destino
                }
                if(id_jogadores.indexOf(id_origem) == -1 && quant_posicao[posicao_origem-1] < maximos[posicao_origem-1]){
                    id_jogadores.push(id_origem)
                    quant_posicao[posicao_origem-1]++
                    quant_jogadores++
                    preco_atual = preco_atual + preco_origem
                }
            } else if (bad.indexOf(id_origem) == -1 &&  dVertices[ar.destino].pred == null && quant_posicao[posicao_origem-1] < maximos[posicao_origem-1] && preco_atual + preco_origem <= preco && quant_jogadores < 12){
                dVertices[ar.destino].pred = ar.origem
                dVertices[ar.destino].custo = ar.peso
                if(id_jogadores.indexOf(id_destino) == -1 && quant_posicao[posicao_destino-1] < maximos[posicao_destino-1]){
                    id_jogadores.push(id_destino)
                    quant_posicao[posicao_destino-1]++
                    quant_jogadores++
                    preco_atual = preco_atual + preco_destino
                }
                if(id_jogadores.indexOf(id_origem) == -1){
                    id_jogadores.push(id_origem)
                    quant_posicao[posicao_origem-1]++
                    quant_jogadores++
                    preco_atual = preco_atual + preco_origem
                }
            }
        
            if(dVertices[ar.origem].pred == ar.destino && dVertices[ar.destino].pred == ar.origem){
                dVertices[ar.destino].pred = null;
            }
            i++
        }
    }

    if(limite == 50){
        return 0
    } else {
        return id_jogadores
    }

}

module.exports = kruskal