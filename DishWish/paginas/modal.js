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
function limparFormularioDesafio() {
    document.getElementById("nomeDesafio").value = "";
    document.getElementById("requisitoDesafio").value = "";
    document.getElementById("tipoDesafio").value = "";
    document.getElementById("quantidadePontosDesafio").value = "";
}

// Função para limpar o formulário de conquista
function limparFormularioConquista() {
    document.getElementById("nomeConquista").value = "";
    document.getElementById("requisitoConquista").value = "";
    document.getElementById("tipoConquista").value = "";
    document.getElementById("quantidadePontosConquista").value = "";
}

// Função para adicionar o desafio (corrigida)
function adicionarDesafio() {
    let nomeDesafio = document.getElementById("nomeDesafio").value;
    let requisitoDesafio = document.getElementById("requisitoDesafio").value;
    let tipoDesafio = document.getElementById("tipoDesafio").value; // Corrigido o id
    let quantidadePontosDesafio = document.getElementById("quantidadePontosDesafio").value;

    if (nomeDesafio && requisitoDesafio && tipoDesafio && quantidadePontosDesafio) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>Desafio: ${nomeDesafio}</h3>
            <p>Requisito: ${requisitoDesafio}</p>
            <p>Tipo: ${tipoDesafio}</p>
            <p>Pontos: ${quantidadePontosDesafio}</p>
        `;
        listaCadastros.appendChild(card);

        // Esconde a mensagem de "cadastros vazios", se houver
        mensagemVazia.style.display = "none";
        
        // Limpa o formulário de desafio e fecha o modal
        limparFormularioDesafio();
        closeModal();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para adicionar a conquista (corrigida)
function adicionarConquista() {
    let nomeConquista = document.getElementById("nomeConquista").value;
    let requisitoConquista = document.getElementById("requisitoConquista").value;
    let tipoConquista = document.getElementById("tipoConquista").value;
    let quantidadePontosConquista = document.getElementById("quantidadePontosConquista").value;

    if (nomeConquista && requisitoConquista && tipoConquista && quantidadePontosConquista) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>Conquista: ${nomeConquista}</h3>
            <p>Requisito: ${requisitoConquista}</p>
            <p>Tipo: ${tipoConquista}</p>
            <p>Pontos: ${quantidadePontosConquista}</p>
        `;
        listaCadastros.appendChild(card);

        // Esconde a mensagem de "cadastros vazios", se houver
        mensagemVazia.style.display = "none";
        
        // Limpa o formulário de conquista e fecha o modal
        limparFormularioConquista();
        closeModal();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
