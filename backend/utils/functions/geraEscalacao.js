import {Grafo} from '../utils/classes/Grafo'
import {geraGrafo} from './geraGrafo'

function geraEscalacao(jogadores){
    var g = geraGrafo(jogadores, 2)
    return g
}