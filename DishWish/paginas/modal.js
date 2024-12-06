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
function limparFormularioConquista() {
    document.getElementById("nomeConquista").value = ""; // Limpa o campo "Nome da Conquista"
    document.getElementById("requisitoConquista").value = ""; // Limpa o campo "Requisito"
    document.getElementById("tipoConquista").value = ""; // Limpa o campo "Tipo"
    document.getElementById("quantidadePontosConquista").value = ""; // Limpa o campo "Quantidade de Pontos"
}

// Função para limpar o formulário de Desafios
function limparFormularioDesafio() {
    document.getElementById("nomeDesafio").value = "";
    document.getElementById("requisitoDesafio").value = "";
    document.getElementById("tipoConquistaDesafio").value = "";
    document.getElementById("quantidadePontosDesafio").value = "";
}

function adicionarConquista() {
    // Captura os valores do formulário
    const nome = document.getElementById('nomeConquista').value;
    const requisito = document.getElementById('requisitoConquista').value;
    const tipo = document.getElementById('tipoConquista').value;
    const pontos = document.getElementById('quantidadePontosConquista').value;

    // Valida se todos os campos foram preenchidos
    if (!nome || !requisito || !tipo || !pontos) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('conquistasTabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Cria e preenche as células da nova linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaRequisito = novaLinha.insertCell(1);
    const celulaTipo = novaLinha.insertCell(2);
    const celulaPontos = novaLinha.insertCell(3);
    const celulaAcao = novaLinha.insertCell(4); // Coluna para o botão de exclusão

    celulaNome.textContent = nome;
    celulaRequisito.textContent = requisito;
    celulaTipo.textContent = tipo;
    celulaPontos.textContent = `${pontos} pontos`;

    // Cria o botão de exclusão
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.classList.add('form-btn');
    botaoExcluir.style.backgroundColor = '#dc3545'; // Estilo do botão de excluir
    botaoExcluir.style.color = 'white';
    botaoExcluir.onclick = function () {
        excluirConquista(novaLinha);
    };
    celulaAcao.appendChild(botaoExcluir);

    // Limpa o formulário e fecha o modal
    limparFormularioConquista();
    closeModal();
}

// Função para excluir uma linha
function excluirConquista(linha) {
    const tabela = document.getElementById('conquistasTabela');
    tabela.deleteRow(linha.rowIndex);
}



// Função para adicionar o desafio (corrigida)
function adicionarDesafio() {
    // Captura os valores do formulário
    const nome = document.getElementById('nomeDesafio').value;
    const requisito = document.getElementById('requisitoDesafio').value;
    const tipo = document.getElementById('tipoConquistaDesafio').value;
    const pontos = document.getElementById('quantidadePontosDesafio').value;

    // Valida se todos os campos foram preenchidos
    if (!nome || !requisito || !tipo || !pontos) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('desafiosTabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Cria e preenche as células da nova linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaRequisito = novaLinha.insertCell(1);
    const celulaTipo = novaLinha.insertCell(2);
    const celulaPontos = novaLinha.insertCell(3);
    const celulaAcao = novaLinha.insertCell(4); // Coluna para o botão de exclusão

    celulaNome.textContent = nome;
    celulaRequisito.textContent = requisito;
    celulaTipo.textContent = tipo;
    celulaPontos.textContent = `${pontos} pontos`;

    // Cria o botão de exclusão
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.classList.add('form-btn');
    botaoExcluir.style.backgroundColor = '#dc3545'; // Estilo do botão de excluir
    botaoExcluir.style.color = 'white';
    botaoExcluir.onclick = function () {
        excluirDesafio(novaLinha);
    };
    celulaAcao.appendChild(botaoExcluir);

    // Limpa o formulário e fecha o modal
    limparFormularioDesafio();
    closeModal();
}

// Função para excluir uma linha
function excluirDesafio(linha) {
    const tabela = document.getElementById('desafiosTabela');
    tabela.deleteRow(linha.rowIndex);
}