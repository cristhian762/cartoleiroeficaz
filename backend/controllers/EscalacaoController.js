const axios = require("axios");
const geraGrafo = require("../utils/functions/geraGrafo");
const geraEscalacao = require("../utils/functions/geraEscalacao");

module.exports = {
  async generate(request, response) {
    const apiResponse = await axios.get("https://api.cartola.globo.com/atletas/mercado");
    const { formacao, preco } = request.body;
    const mercado = apiResponse.data;
    let jogadores = [];

    let atletas = mercado.atletas;
    let clubes = mercado.clubes;
    for (let i = 0; i < atletas.length; i++) {
      if (atletas[i].status_id == 7) {
        let jogador = {
          idJogador: atletas[i].atleta_id,
          nome: atletas[i].apelido,
          status: atletas[i].status_id,
          foto: atletas[i].foto,
          iconTime: clubes[atletas[i].clube_id].escudos["60x60"],
          idPosicao: atletas[i].posicao_id,
          preco: atletas[i].preco_num,
          media: atletas[i].media_num,
          minValorizar: atletas[i].minimo_para_valorizar,
          coef: atletas[i].preco_num / (atletas[i].minimo_para_valorizar / atletas[i].media_num),
        };
        jogadores.push(jogador);
      }
    }

    let g = await geraGrafo(jogadores, 2);

    let escalacao = await geraEscalacao(g, parseInt(formacao), parseFloat(preco));

    if (escalacao == 0) {
      g = await geraGrafo(jogadores, 1);
      escalacao = await geraEscalacao(g, parseInt(formacao), -1);
    }

    return response.json({ escalacao });
  },
};
