module.exports = {
    async getVizinhos(grafo, vertice){
        var vizinhos = []
        for(var ar of grafo.arestas){
            if(ar.origem==vertice){
                vizinhos.push(ar.destino)
            }
        }
        return vizinhos
    },

    async getJogador(grafo, id){
        for(var ver of grafo.vertices){
            if(ver.idJogador == id){
                return ver
            }
        }
        return false
    },

    async findEdge(grafo, u, v){
        var peso = false
        for(var ar of grafo.arestas){
            if(ar.origem == u && ar.destino == v){
                peso = ar.peso
            }
        }
        return peso
    },

    async maisCaro(grafo, lista){
        var mais_caro = 0
        var preco = 0
        for(var elem of lista){
            var jogador = this.getJogador(grafo, elem)
            var preco_jogador = jogador.preco
            if(preco_jogador > preco){
                preco = preco_jogador
                mais_caro = elem
            }
        }
        return elem
    }
}