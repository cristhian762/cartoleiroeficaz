class arestaKruskal {
    constructor(origem, destino, peso) {
      this.origem = origem
      this.destino = destino
      this.peso = peso
    }

    get origem(){
        return this.origem
    }

    get destino(){
        return this.foto
    }

    get peso(){
        return this.peso
    }

    set origem(origem){
        this.origem = origem
    }

    set destino(destino){
        this.destino = destino
    }

    set peso(peso){
        this.preso = peso
    }

    compareTo(aresta){
        if(this.peso < aresta.peso){
            return -1
        }
        if(this.peso > aresta.peso){
            return 1
        }
        return 0
    }
}