const produtos = [
    {
        id: 1,
        nome: "Smartphone",
        preco: 3.704,
        categoria: "Eletrônicos",
        imagem: "img/Black_and_white_Playstation_5_base_edition_with_controller.png"
    },
    {
        id: 2,
        nome: "Smartphone",
        preco: 3.641,
        categoria: "Eletrônicos",
        imagem: "img/Xbox Series X 1TB-2.png"
    },
    {
        id: 3,
        nome: "Smartphone",
        preco: 3.263,
        categoria: "Eletrônicos",
        imagem: "img/nintendo-switch-2-system-and-accessories-gallery_hd3f.png"
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

const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.style.color = "green";
    }
});

const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista-tarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarTarefas() {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const btn = document.createElement("button");
        btn.textContent = "Remover";

        btn.addEventListener("click", () => {
            tarefas.splice(index, 1);
            salvar();
        });

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarTarefas();
}
    botaoAdicionar.addEventListener("click", () => {
        const nova = inputTarefa.value;

        if (nova !== "") {
        tarefas.push(nova);
        inputTarefa.value = "";
        salvar();
    }
});

renderizarTarefas();
