import logo from '../../assets/logo.png';

import cogumelo from '../../assets/frutas/Cogumelo.png';
import darthvander from '../../assets/frutas/Darthvander.jpg';
import deadpool from '../../assets/frutas/Deadpool.jpg';
import goku from '../../assets/frutas/Goku.jpg';
import rick from '../../assets/frutas/Rick.jpg';

const cesta = {
  topo: {
    titulo: "DEPPI",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "IFCE - Campus Maracanaú",
    descricao: "Com grande poderes vem grandes responsabilidades.",
    preco: "Estágios",
    botao: "Comprar",
  },
  itens: {
    titulo: "Estágiario ler antes deve,jovem padwan",
    lista: [
      {
        nome: "Cogumelo",
        imagem: cogumelo,
      },
      {
        nome: "Darthvander",
        imagem: darthvander,
      },
      {
        nome: "Deadpool",
        imagem: deadpool,
      },
      {
        nome: "Goku",
        imagem: goku,
      },
      {
        nome: "Rick",
        imagem: rick,
      }
    ]
  }
}

export default cesta;