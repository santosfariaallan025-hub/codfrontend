const nomeLoja = "MULTI CONSOLE";

let produto1 = "Playstation 5"
let preco1 = 3.704;
let emPromocao = true;

function calcularDesconto(preco, desconto) {
    return preco - (preco * desconto);
}

let precoFinal;

if (emPromocao) {
    precoFinal = calcularDesconto(preco1, 0.1);
} else {
    precoFinal = preco1;
}

console.log(`Produto: ${produto1}`);
console.log(`Preço final: R$ ${precoFinal}`);

const produtos = [
    { nome: "Playstation 5", preco: 3704 },
    { nome: "Xbox Series", preco: 3.641 },
    { nome: "Nitendo Switch", preco: 3.263 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto: ${produtos[i].nome} - R$ ${produtos[i].preco}`);
}

const exibirProduto = (produto) => {
    return `Produto: ${produto.nome} - R$ ${produto.preco}`;
};

console.log(exibirProduto(produtos[0]));