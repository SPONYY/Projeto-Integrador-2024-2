// Função para abrir o modal principal
document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = 'flex';
}

// Função para fechar o modal principal
document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('modalDesafio').style.display = 'none'; // Fechar o modal de desafio, se estiver aberto
    document.getElementById('modalConquista').style.display = 'none'; // Fechar o modal de conquista, se estiver aberto
}

// Fechar o modal se clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
    if (event.target == document.getElementById('modalDesafio')) {
        document.getElementById('modalDesafio').style.display = 'none';
    }
    if (event.target == document.getElementById('modalConquista')) {
        document.getElementById('modalConquista').style.display = 'none';
    }
}

// Função para abrir o modal de Desafio
function openModalDesafio() {
    document.getElementById("modalDesafio").style.display = "flex";
    document.getElementById('myModal').style.display = 'none'; // Fechar o modal principal
}

// Função para abrir o modal de Conquista
function openModalConquista() {
    document.getElementById("modalConquista").style.display = "flex";
    document.getElementById('myModal').style.display = 'none'; // Fechar o modal principal
}

// Função para fechar os modais
function closeModal() {
    document.getElementById("modalDesafio").style.display = "none";
    document.getElementById("modalConquista").style.display = "none";
}

// Função para limpar o formulário de desafio
function limparFormulario() {
    document.getElementById("nomeDesafio").value = "";
    document.getElementById("requisitoDesafio").value = "";
    document.getElementById("tipoConquista").value = "";
    document.getElementById("quantidadePontos").value = "";
}

// Função para limpar o formulário de conquista
function limparFormularioConquista() {
    document.getElementById("nomeConquista").value = "";
    document.getElementById("requisitoConquista").value = "";
    document.getElementById("tipoConquista").value = "";
    document.getElementById("quantidadePontosConquista").value = "";
}

// Função para adicionar o desafio (exemplo)
function adicionarDesafio() {
    let nomeDesafio = document.getElementById("nomeDesafio").value;
    let requisitoDesafio = document.getElementById("requisitoDesafio").value;
    let tipoConquista = document.getElementById("tipoConquista").value;
    let quantidadePontos = document.getElementById("quantidadePontos").value;

    if (nomeDesafio && requisitoDesafio && tipoConquista && quantidadePontos) {
        console.log("Desafio Adicionado:", nomeDesafio, requisitoDesafio, tipoConquista, quantidadePontos);
        closeModal();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para adicionar a conquista (exemplo)
function adicionarConquista() {
    let nomeConquista = document.getElementById("nomeConquista").value;
    let requisitoConquista = document.getElementById("requisitoConquista").value;
    let tipoConquista = document.getElementById("tipoConquista").value;
    let quantidadePontosConquista = document.getElementById("quantidadePontosConquista").value;

    if (nomeConquista && requisitoConquista && tipoConquista && quantidadePontosConquista) {
        console.log("Conquista Adicionada:", nomeConquista, requisitoConquista, tipoConquista, quantidadePontosConquista);
        closeModal();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
