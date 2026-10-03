const carrinho = [];

const titulo = document.querySelector("h1");
console.log(titulo)
const cardapio = document.querySelector("#secao-cardapio");
const cliente = document.querySelector("#secao-cliente");
const botoes = document.querySelectorAll(".add-carrinho");
console.log(botoes);

botoes.forEach(function(botao) { 
    botao.addEventListener("click", function () {
        const item = botao.closest("li");
        const nome = item.dataset.nome;
        const preco = parseFloat(item.dataset.preco);
        
        const novoItem = { nome: nome, preco: preco };
        carrinho.push(novoItem);
        atualizarCarrinho();

        console.log(carrinho);
    });
});

function atualizarCarrinho() {
    const lista = document.querySelector("#lista-carrinho");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(function(item, indice) {
        const li = document.createElement("li");
        li.textContent = item.nome + " - R$ " + item.preco.toFixed(2);
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function() {
            carrinho.splice(indice, 1);
            atualizarCarrinho();
        });
        
        li.appendChild(botaoRemover);
        lista.appendChild(li);
        total = total + item.preco;
    });

    document.querySelector("#total-carrinho").textContent = total.toFixed(2);
}
//cardapio.style.display = "none";
