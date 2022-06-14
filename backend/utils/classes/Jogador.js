class Jogador {
    constructor(id, nome, foto, iconTime, preco, mediaPontos, minValorizar) {
        this.id = id
        this.nome = nome
        this.foto = foto
        this.iconTime = iconTime
        this.preco = preco
        this.mediaPontos = mediaPontos
        this.minValorizar = preco/(minValorizar/mediaPontos)
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

    get minValorizar(){
        return this.minValorizar
    }
}