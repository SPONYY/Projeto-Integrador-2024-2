// Selecionando elementos
const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".close");
const tabela = document.querySelector("#estoqueTabela tbody");

// Função para carregar os dados armazenados no localStorage
function carregarEstoque() {
    const estoque = JSON.parse(localStorage.getItem("estoque"));
    tabela.innerHTML = ""; // Limpar a tabela antes de recarregar

    if (estoque) {
        estoque.forEach((ingrediente, index) => {
            const novaLinha = document.createElement("tr");
            novaLinha.innerHTML = `
                <td>${index + 1}</td>
                <td>${ingrediente.nome}</td>
                <td>${ingrediente.categoria}</td>
                <td>${ingrediente.quantidade}</td>
                <td><button class="form-btn delete-btn" data-index="${index}">Apagar</button></td>
            `;
            tabela.appendChild(novaLinha);
        });

        // Adicionar event listeners para os botões de apagar após atualizar a tabela
        adicionarEventListenersDelete();
    }
}

// Função para adicionar event listeners para os botões de excluir
function adicionarEventListenersDelete() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            apagarIngrediente(index);
        });
    });
}

// Abrir o modal
document.getElementById("openModal").addEventListener("click", () => {
    modal.style.display = "flex"; // Exibe o modal quando o botão for clicado
});

// Fechar o modal
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none"; // Esconde o modal quando clicar no "X"
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
        <td><button class="form-btn delete-btn">Apagar</button></td>
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

// Função para apagar um ingrediente do estoque
function apagarIngrediente(index) {
    const estoque = JSON.parse(localStorage.getItem("estoque")) || [];

    // Remover o item do array
    estoque.splice(index, 1);

    // Atualizar o localStorage
    localStorage.setItem("estoque", JSON.stringify(estoque));

    // Recarregar a tabela para refletir a remoção
    carregarEstoque();
}

// Carregar os dados do estoque ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    carregarEstoque();
});
