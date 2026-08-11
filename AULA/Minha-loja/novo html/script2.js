const produtos = [
  {
    id: 1,
    nome:"smartphone",
    preco: 7500,
    categoria: "Eletrônicos",
    imagem: ".img\iphone-17-pro-17-pro-max-hero.png"
  },
  {
    id: 2,
    nome:"tenis esportivo",
    preco: 250,
    categoria: "roupas",
    imagem: ".img\pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png"
  },
  {
    id: 3,
    nome:"headphones",
    preco: 250,
    categoria: "Eletrônicos",
    imagem: ".img\wireless-headphones-side-view-gold-icon-on-a-transparent-background-3d-rendering-png.webp"
  }
];

const container = document.getElementById("product-list");

function renderizarProdutos(lista) {

container.innerHTML = "";

lista.forEach(produto => {

const card = document.createElement("div");
card.classList.add("product-card");

card.innerHTML = `
<img src="${produto.imagem}" alt="${produto.nome}">
<h3>${produto.nome}</h3>
<p>R$ ${produto.preco}</p>
`;

container.appendChild(card);
});
}

renderizarProdutos(produtos);

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

const produtos17 = [
    {
        id:1,
        nome:"Carrinho controle remoto",
        preco:340.00,
        categoria:"Brinquedos",
        imagem:"carrinho.jpg"
    },
    {
        id:2,
        nome:"Martelo",
        preco:40.00,
        categoria:"Ferramentas",
        imagem:"martelo.jpg"
    },
    {
        id:3,
        nome:"Smartphone",
        preco:1340.00,
        categoria:"Eletrônicos",
        imagem:"celular.jpg"
    },
    {
        id:4,
        nome:"Camiseta",
        preco:90.00,
        categoria:"Roupas",
        imagem:"camiseta.jpg"
    },
    {
        id:5,
        nome:"Relógio",
        preco:690.00,
        categoria:"Acessórios",
        imagem:"relogio.jpg"
    }
];

function listarProdutos(lista){
    lista.forEach(produto => {
        const {id,nome,preco,categoria,imagem} = produto;
        console.log(`Id:${id}
Nome:${nome}
Preço:${preco}
Categoria:${categoria}
Imagem:${imagem}`);
    });
}

listarProdutos(produtos17);

function filtrarPorCategoria(categoria){
    return produtos17.filter(produto => produto.categoria === categoria);
}

function filtrarPorCategoriaLista(lista,categoria){
    return lista.filter(produto => produto.categoria === categoria);
}

const produtosEletronicos = filtrarPorCategoria("Eletrônicos");
console.log("---Filtro eletrônicos:");
listarProdutos(produtosEletronicos);

const produtosNovos = [
    ...produtos17,
    {
        id:6,
        nome:"Notebook",
        preco:7340.00,
        categoria:"Eletrônicos",
        imagem:"notebook.jpg"
    }
];

const produtosEletronicosNovos = filtrarPorCategoriaLista(produtosNovos,"Eletrônicos");
console.log("---Produtos novos eletrônicos:");
listarProdutos(produtosEletronicosNovos);