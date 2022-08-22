async function geraGrafo(jogadores, tipo){
    let arestas = []
    if(tipo == 1){
        let i = 0
        for(let jog of jogadores){
            let j = 0
            for(let jog2 of jogadores){
                if(j>= i+1 && j <= jogadores.length){
                    let a = {
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
        let i = 0
        for(let jog of jogadores){
            let j = 0
            for(let jog2 of jogadores){
                if(j>= i+1 && j <= jogadores.length){
                    let a = {
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
    let g = {
        "vertices": jogadores,
        "arestas": arestas
    }
    return g
}

module.exports = geraGrafo