class Jogador {
    constructor(nome, foto, iconTime, preco, mediaPontos, minValorizar) {
      this.nome = nome
      this.foto = foto
      this.iconTime = iconTime
      this.preco = preco
      this.mediaPontos = mediaPontos
      this.minValorizar = preco/(minValorizar/mediaPontos)
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

    
}