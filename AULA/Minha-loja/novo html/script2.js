import {ALIENWARE} from "../img/ALIENWARE-15.png"

const produtos = [
  {
    nome: "Notebook Gamer",
    preco: 4500,
    categoria: "Eletrônicos",
    imagem: ALIENWARE
  },
  {
    nome: "Smartphone",
    preco: 2500,
    categoria: "Eletrônicos",
    imagem: "https://via.placeholder.com/150?text=Smartphone"
  },
  {
    nome: "Tênis Esportivo",
    preco: 300,
    categoria: "Moda",
    imagem: "https://via.placeholder.com/150?text=Tenis"
  },
  {
    nome: "Mochila",
    preco: 120,
    categoria: "Acessórios",
    imagem: "https://via.placeholder.com/150?text=Mochila"
  },
  {
    nome: "Fone Bluetooth",
    preco: 180,
    categoria: "Eletrônicos",
    imagem: ""
  }
];

const { nome, preco } = produtos[0];
console.log(`Produto: ${nome} - R$ ${preco}`);

function listarProdutos(lista) {
    lista.forEach(produto => {
        console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`);
    });
}

listarProdutos(produtos);

function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

const eletronicos = filtrarPorCategoria("Eletrônicos");
console.log(eletronicos);

const novosProdutos = [
    ...produtos,
    {
        id: 4,
        nome: "Notebook",
        preco: 3500,
        categoria: "Eletrônicos",
        imagem: "https://via.placeholder.com/150"
    }
];

console.log(novosProdutos);

const produtosJSON = JSON.stringify(produtos);
console.log(produtosJSON);

const produtosConvertidos = JSON.parse(produtosJSON);
console.log(produtosConvertidos);