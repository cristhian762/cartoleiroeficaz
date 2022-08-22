const axios = require('axios');

module.exports = {

  async index (request, response) {
    const apiResponse = await axios.get('https://api.cartola.globo.com/atletas/mercado/status')

    let status_mercado = apiResponse.status_mercado

    return response.json({ status_mercado })
  }
}