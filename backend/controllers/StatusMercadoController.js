const axios = require('axios');

module.exports = {

  async index (request, response) {
    const apiResponse = await axios.get('https://api.cartola.globo.com/atletas/mercado/status')

    return response.json({ apiResponse })
  }
}