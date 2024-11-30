// Função para abrir o modal de edição
function openEditModal() {
    var modal = document.getElementById('modal-edit');
    modal.style.display = 'flex'; // Usando 'flex' para garantir que o modal seja centralizado com o CSS
    setTimeout(function() {
        modal.style.display = 'flex';  // Redefine o display para garantir o comportamento correto
    }, 10);  // Delay curto para garantir que o layout seja recalculado
}

// Função para abrir o modal de desafio
function openModalDesafio() {
    document.getElementById("modalDesafio").style.display = "flex";
}

// Função para fechar o modal de desafio e de edição
function closeModal() {
    document.getElementById('modal-edit').style.display = 'none';
    document.getElementById("modalDesafio").style.display = "none";
}

// Fechar o modal de edição se clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('modal-edit')) {
        document.getElementById('modal-edit').style.display = 'none';
    }
    // Fechar o modal de desafio se clicar fora dele
    if (event.target == document.getElementById('modalDesafio')) {
        document.getElementById("modalDesafio").style.display = "none";
    }
}

// Função para limpar o formulário de desafio
function limparFormulario() {
    document.getElementById("nomeDesafio").value = "";
    document.getElementById("requisitoDesafio").value = "";
    document.getElementById("tipoConquista").value = "";
    document.getElementById("quantidadePontos").value = "";
}

// Função para adicionar o desafio
function adicionarDesafio() {
    let nomeDesafio = document.getElementById("nomeDesafio").value;
    let requisitoDesafio = document.getElementById("requisitoDesafio").value;
    let tipoConquista = document.getElementById("tipoConquista").value;
    let quantidadePontos = document.getElementById("quantidadePontos").value;

    if (nomeDesafio && requisitoDesafio && tipoConquista && quantidadePontos) {
        console.log("Desafio Adicionado", nomeDesafio, requisitoDesafio, tipoConquista, quantidadePontos);
        // Aqui você pode adicionar a lógica para salvar o desafio ou enviar para o servidor
        closeModal();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Fechar o modal de edição
document.querySelector('.close').onclick = function() {
    document.getElementById('modal-edit').style.display = 'none';
}

// Fechar o modal de desafio ao clicar fora
window.onclick = function(event) {
    if (event.target == document.getElementById('modal-edit')) {
        document.getElementById('modal-edit').style.display = 'none';
    }
    if (event.target == document.getElementById('modalDesafio')) {
        document.getElementById("modalDesafio").style.display = "none";
    }
}
