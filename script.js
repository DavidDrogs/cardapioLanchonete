const carrinho = [];

const titulo = document.querySelector("h1");
console.log(titulo)
const cardapioSecao = document.querySelector("#secao-cardapio");
const cliente = document.querySelector("#secao-cliente");
const btnVerCardapio = document.querySelector("#btn-ver-cardapio");
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

cardapioSecao.style.display = "none";

btnVerCardapio.addEventListener("click", function() {
    const nome = document.querySelector("#nome").value;
    
    if (nome === "") {
        alert("Por favor, preencha seu nome antes de continuar");
        return;
    }

    cliente.style.display = "none";
    cardapioSecao.style.display = "block"

})

const pagamentoSecao = document.querySelector("#secao-pagamento");
const btnFecharPedido = document.querySelector("#btn-fechar-pedido");
const btnConfirmarPagamento = document.querySelector("#btn-confirma-pagamento");

pagamentoSecao.style.display = "none";

btnFecharPedido.addEventListener("click", function() {
    if(carrinho.length === 0) {
        alert("seu carrinho esya vazio");
        return;
    }

    document.querySelector("#total-pagamento").textContent = document.querySelector("#total-carrinho").textContent;

    cardapioSecao.style.display = "none";
    pagamentoSecao.style.display = "block";
});

btnConfirmarPagamento.addEventListener("click", function() {
    alert("Pedido confirmado! Obrigado");

    carrinho.length = 0;
    atualizarCarrinho();

    pagamentoSecao.style.display = "none";
    cardapioSecao.style.display = "block";
})
