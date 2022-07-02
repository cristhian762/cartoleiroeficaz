async function geraGrafo(jogadores, tipo){
    var arestas = []
    if(tipo == 1){
        var i = 0
        for(var jog of jogadores){
            var j = 0
            for(var jog2 of jogadores){
                if(j>= i+1 && j <= jogadores.length){
                    var a = {
                        origem: jog.idJogador, 
                        peso: jog.preco + jog2.preco, 
                        destino: jog2.idJogador
                    }
                    arestas.push(a)
                }
                j++
            }
            i++
        }
    } else {
        var i = 0
        for(var jog of jogadores){
            var j = 0
            for(var jog2 of jogadores){
                if(j>= i+1 && j <= jogadores.length){
                    var a = {
                        origem: jog.idJogador, 
                        peso: jog.coef + jog2.coef, 
                        destino: jog2.idJogador
                    }
                    arestas.push(a)
                }
                j++
            }
            i++
        }
    }
    var g = {
        "vertices": jogadores,
        "arestas": arestas
    }
    return g
}

module.exports = geraGrafo