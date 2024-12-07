document.addEventListener('DOMContentLoaded', function() {
    carregarConquistas();
    carregarDesafios();
  });
  
  // Função para abrir o modal principal
  document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = 'flex';
  }
  
  // Função para fechar o modal principal
  document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('modalDesafio').style.display = 'none';
    document.getElementById('modalConquista').style.display = 'none';
  }
  
  // Fechar modal clicando fora dele
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
  
  // Abrir modal de Desafio
  function openModalDesafio() {
    document.getElementById("modalDesafio").style.display = "flex";
    document.getElementById('myModal').style.display = 'none';
  }
  
  // Abrir modal de Conquista
  function openModalConquista() {
    document.getElementById("modalConquista").style.display = "flex";
    document.getElementById('myModal').style.display = 'none';
  }
  
  // Limpar formulários
  function limparFormularioDesafio() {
    document.getElementById("nomeDesafio").value = "";
    document.getElementById("requisitoDesafio").value = "";
    document.getElementById("tipoConquistaDesafio").value = "";
    document.getElementById("quantidadePontosDesafio").value = "";
  }
  
  function limparFormularioConquista() {
    document.getElementById("nomeConquista").value = "";
    document.getElementById("requisitoConquista").value = "";
    document.getElementById("tipoConquista").value = "";
    document.getElementById("quantidadePontosConquista").value = "";
  }
  
  // Salvar Conquistas no localStorage
  function salvarConquistas(conquistas) {
    localStorage.setItem('conquistas', JSON.stringify(conquistas));
  }
  
  // Salvar Desafios no localStorage
  function salvarDesafios(desafios) {
    localStorage.setItem('desafios', JSON.stringify(desafios));
  }
  
  // Carregar Conquistas no carregamento da página
  function carregarConquistas() {
    const conquistas = JSON.parse(localStorage.getItem('conquistas')) || [];
    const tabela = document.getElementById('conquistasTabela').getElementsByTagName('tbody')[0];
    tabela.innerHTML = "";
  
    conquistas.forEach(conquista => {
      const novaLinha = tabela.insertRow();
      novaLinha.insertCell(0).textContent = conquista.nome;
      novaLinha.insertCell(1).textContent = conquista.requisito;
      novaLinha.insertCell(2).textContent = conquista.tipo;
      novaLinha.insertCell(3).textContent = `${conquista.pontos} pontos`;
  
      const celulaAcao = novaLinha.insertCell(4);
      const botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = 'Excluir';
      botaoExcluir.classList.add('form-btn');
      botaoExcluir.style.backgroundColor = '#dc3545';
      botaoExcluir.style.color = 'white';
      botaoExcluir.onclick = function () {
        excluirConquista(conquista, novaLinha);
      };
      celulaAcao.appendChild(botaoExcluir);
    });
  }
  
  // Carregar Desafios no carregamento da página
  function carregarDesafios() {
    const desafios = JSON.parse(localStorage.getItem('desafios')) || [];
    const tabela = document.getElementById('desafiosTabela').getElementsByTagName('tbody')[0];
    tabela.innerHTML = "";
  
    desafios.forEach(desafio => {
      const novaLinha = tabela.insertRow();
      novaLinha.insertCell(0).textContent = desafio.nome;
      novaLinha.insertCell(1).textContent = desafio.requisito;
      novaLinha.insertCell(2).textContent = desafio.tipo;
      novaLinha.insertCell(3).textContent = `${desafio.pontos} pontos`;
  
      const celulaAcao = novaLinha.insertCell(4);
      const botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = 'Excluir';
      botaoExcluir.classList.add('form-btn');
      botaoExcluir.style.backgroundColor = '#dc3545';
      botaoExcluir.style.color = 'white';
      botaoExcluir.onclick = function () {
        excluirDesafio(desafio, novaLinha);
      };
      celulaAcao.appendChild(botaoExcluir);
    });
  }
  
  // Excluir Conquista
  function excluirConquista(conquista, linha) {
    let conquistas = JSON.parse(localStorage.getItem('conquistas')) || [];
    conquistas = conquistas.filter(c => c.id !== conquista.id); 
    salvarConquistas(conquistas);
    linha.parentNode.removeChild(linha);
  }
  
  // Excluir Desafio
  function excluirDesafio(desafio, linha) {
    let desafios = JSON.parse(localStorage.getItem('desafios')) || [];
    desafios = desafios.filter(d => d.id !== desafio.id);
    salvarDesafios(desafios);
    linha.parentNode.removeChild(linha);
  }
  
  // Adicionar Conquista
  function adicionarConquista() {
    const novaConquista = {
      id: Date.now(),
      nome: document.getElementById('nomeConquista').value,
      requisito: document.getElementById('requisitoConquista').value,
      tipo: document.getElementById('tipoConquista').value,
      pontos: document.getElementById('quantidadePontosConquista').value,
    };
  
    if (!novaConquista.nome || !novaConquista.requisito || !novaConquista.tipo || !novaConquista.pontos) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    let conquistas = JSON.parse(localStorage.getItem('conquistas')) || [];
    conquistas.push(novaConquista);
    salvarConquistas(conquistas);
    carregarConquistas();
    limparFormularioConquista();
    closeModal();
  }
  
  // Adicionar Desafio
  function adicionarDesafio() {
    const novoDesafio = {
      id: Date.now(),
      nome: document.getElementById('nomeDesafio').value,
      requisito: document.getElementById('requisitoDesafio').value,
      tipo: document.getElementById('tipoConquistaDesafio').value,
      pontos: document.getElementById('quantidadePontosDesafio').value,
    };
  
    if (!novoDesafio.nome || !novoDesafio.requisito || !novoDesafio.tipo || !novoDesafio.pontos) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    let desafios = JSON.parse(localStorage.getItem('desafios')) || [];
    desafios.push(novoDesafio);
    salvarDesafios(desafios);
    carregarDesafios();
    limparFormularioDesafio();
    closeModal();
  }
  