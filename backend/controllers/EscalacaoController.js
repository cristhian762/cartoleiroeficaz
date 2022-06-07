const axios = require('axios');

module.exports = {

  async generate (request, response) {
    const apiResponse = await axios.get('https://api.cartola.globo.com/atletas/mercado')

    return response.json({ apiResponse })
  }
}