const axios = require('axios');
import {Jogador} from '../utils/classes/Jogador'
import {geraGrafo} from './geraGrafo'
import {geraCustoMinimo} from './geraCustoMinimo'

module.exports = {

  async generate (request, response) {
    const apiResponse = await axios.get('https://api.cartola.globo.com/atletas/mercado')
    const { formacao } = request.body
    var jogadores = []

    var atletas = apiResponse.atletas
    var clubes = apiResponse.clubes
    for(var i=0; i<atletas.length; i++){
      var jogador = new Jogador(
        atletas[i].atleta_id,
        atletas[i].apelido,
        atletas[i].status_id,
        atletas[i].foto,
        clubes[atletas[i].atleta_id].escudos["60x60"],
        atletas[i].posicao_id,
        atletas[i].preco_num,
        atletas[i].media_num,
        atletas[i].minimo_para_valorizar
      )
      jogadores.add(jogador)
    }

    var g = geraGrafo(jogadores,1)

    var custoMinimo = geraCustoMinimo(g, formacao)

    return response.json({ custoMinimo })
  }
}