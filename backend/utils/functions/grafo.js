module.exports = {
    async getVizinhos(grafo, vertice){
        let vizinhos = []
        for(let ar of grafo.arestas){
            if(ar.origem==vertice){
                vizinhos.push(ar.destino)
            }
        }
        return vizinhos
    },

    async getJogador(grafo, id){
        for(let ver of grafo.vertices){
            if(ver.idJogador == id){
                return ver
            }
        }
        return false
    },

    async findEdge(grafo, u, v){
        let peso = false
        for(let ar of grafo.arestas){
            if(ar.origem == u && ar.destino == v){
                peso = ar.peso
            }
        }
        return peso
    },

    async maisCaro(grafo, lista){
        let mais_caro = 0
        let preco = 0
        for(let elem of lista){
            let jogador = this.getJogador(grafo, elem)
            let preco_jogador = jogador.preco
            if(preco_jogador > preco){
                preco = preco_jogador
                mais_caro = elem
            }
        }
        return elem
    }
}