class Jogador {
    constructor(id, nome, foto, iconTime, idPosicao, preco, mediaPontos, minValorizar) {
        this.id = id
        this.nome = nome
        this.foto = foto
        this.iconTime = iconTime
        this.idPosicao = idPosicao
        this.preco = preco
        this.mediaPontos = mediaPontos
        this.coef = preco/(minValorizar/mediaPontos)
    }

    get id(){
        return this.id
    }

    get nome(){
        return this.nome
    }

    get foto(){
        return this.foto
    }

    get iconTime(){
        return this.iconTime
    }

    get preco(){
        return this.preco
    }

    get mediaPontos(){
        return this.mediaPontos
    }

    get coef(){
        return this.coef
    }
}