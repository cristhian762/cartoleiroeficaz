async function geraGrafo(jogadores, tipo){
    var arestas = []
    if(tipo == 1){
        for(var j=0; j<jogadores.length; j++){
            for(var k=j+1; k<jogadores.length; k++){
                var a = {
                    origem: jogadores[j].idJogador, 
                    peso: jogadores[j].preco + jogadores[k].preco, 
                    destino: jogadores[k].idJogador
                }
                arestas.push(a)
            }
        }
    } else {
        for(var j=0; j<jogadores.length; j++){
            for(var k=j+1; k<jogadores.length; k++){
                var a = {
                    origem: jogadores[j].idJogador,
                    peso: jogadores[j].coef + jogadores[k].coef,
                    destino: jogadores[k].idJogador
                }
                arestas.push(a)
            }
        }
    }
    var g = {
        "vertices": jogadores,
        "arestas": arestas
    }
    return g
}

module.exports = geraGrafo