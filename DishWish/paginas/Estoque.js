// Selecionando elementos
const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".close");
const tabela = document.querySelector("#estoqueTabela tbody");

// Função para carregar os dados armazenados no localStorage
function carregarEstoque() {
    const estoque = JSON.parse(localStorage.getItem("estoque"));
    if (estoque) {
        estoque.forEach((ingrediente, index) => {
            const novaLinha = document.createElement("tr");
            novaLinha.innerHTML = `
                <td>${index + 1}</td>
                <td>${ingrediente.nome}</td>
                <td>${ingrediente.categoria}</td>
                <td>${ingrediente.quantidade}</td>
            `;
            tabela.appendChild(novaLinha);
        });
    }
}

// Abrir o modal
document.getElementById("openModal").addEventListener("click", () => {
    modal.style.display = "block";
});

// Fechar o modal
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Adicionar ingrediente à tabela e salvar no localStorage
function adicionarIngrediente() {
    const nome = document.getElementById("nomeIngrediente").value;
    const categoria = document.getElementById("categoriaIngrediente").value;
    const quantidade = document.getElementById("quantidadeIngrediente").value;

    if (!nome || !categoria || !quantidade) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Criar uma nova linha na tabela
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${tabela.rows.length + 1}</td>
        <td>${nome}</td>
        <td>${categoria}</td>
        <td>${quantidade}</td>
    `;
    tabela.appendChild(novaLinha);

    // Salvar o novo ingrediente no localStorage
    salvarEstoque(nome, categoria, quantidade);

    // Limpar os campos e fechar o modal
    limparFormularioIngrediente();
    modal.style.display = "none";
}

// Salvar os ingredientes no localStorage
function salvarEstoque(nome, categoria, quantidade) {
    const estoque = JSON.parse(localStorage.getItem("estoque")) || [];
    estoque.push({ nome, categoria, quantidade });
    localStorage.setItem("estoque", JSON.stringify(estoque));
}

// Limpar formulário
function limparFormularioIngrediente() {
    document.getElementById("nomeIngrediente").value = "";
    document.getElementById("categoriaIngrediente").value = "";
    document.getElementById("quantidadeIngrediente").value = "";
}

// Carregar os dados do estoque ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    carregarEstoque();
});
