const axios = require('axios');
import {Vertice} from '../utils/classes/Vertice'

module.exports = {

  async generate (request, response) {
    const apiResponse = await axios.get('https://api.cartola.globo.com/atletas/mercado')
    const { formacao } = request.body

    for(var i=0; i<apiResponse.atletas.length; i++){
      
    }

    return response.json({ apiResponse })
  }
}