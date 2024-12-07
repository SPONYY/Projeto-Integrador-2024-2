document.addEventListener('DOMContentLoaded', function () {
    // Função para salvar os produtos no LocalStorage
    function salvarProdutosNoLocalStorage() {
      localStorage.setItem('produtos', JSON.stringify(produtos));
    }
  
    // Função para carregar os produtos do LocalStorage
    function carregarProdutosDoLocalStorage() {
      const dados = localStorage.getItem('produtos');
      return dados ? JSON.parse(dados) : null;
    }
  
    // Dados iniciais ou carregados do LocalStorage
    let produtos = carregarProdutosDoLocalStorage() || {
      "1": { "img": '../img/hamb.png', "nome": "Hamburguer", "descricao": "Carne e pão", "preco": 10.00, "pontos": 50, "status": "Ativo" },
      "2": { "img": '../img/Batata_Frita_PNG_Transparente_Sem_Fundo.png', "nome": "Batata Frita", "descricao": "Batata e sal", "preco": 5.00, "pontos": 35, "status": "Ativo" },
      "3": { "img": '../img/salada.png', "nome": "Salada", "descricao": "Salada de Alface", "preco": 3.00, "pontos": 15, "status": "Ativo" },
      "4": { "img": '../img/suco.png', "nome": "Suco Natural", "descricao": "Suco de laranja", "preco": 12.00, "pontos": 5, "status": "Ativo" },
      "5": { "img": '../img/cha.png', "nome": "Chá Gelado", "descricao": "Chá Mate", "preco": 10.00, "pontos": 10, "status": "Ativo" },
      "6": { "img": '../img/refri.png', "nome": "Refrigerante", "descricao": "Refrigerante e gelo", "preco": 3.00, "pontos": 15, "status": "Ativo" },
    };
  
    // Função para atualizar os cards no DOM
    function atualizarCards() {
      const container = document.getElementById('produtos-container');
      container.innerHTML = ''; // Limpa os cards atuais
      Object.keys(produtos).forEach(id => {
        if (produtos[id].status === 'Ativo') criarProdutoCard(produtos[id], id);
      });
    }
  
    // Função para criar os cards no DOM
    function criarProdutoCard(produto, id) {
      const card = document.createElement('div');
      card.classList.add('produtocard');
      card.dataset.id = id;
  
      // Validação para evitar erro no caso de preco inválido
      const preco = produto.preco && !isNaN(produto.preco) ? produto.preco : 0; 
  
      card.innerHTML = `
        <img src="${produto.img}" alt="Produto">
        <div class="produtoinfo">
          <span class="nome-produto">${produto.nome}</span>
          <p>${produto.descricao}</p>
          <p>Preço: R$${preco.toFixed(2)}</p>
          <p>Pontos: ${produto.pontos}</p>
        </div>
      `;
  
      card.addEventListener('click', () => abrirModalEditar(id));
      document.getElementById('produtos-container').appendChild(card);
    }
  
    // Função para abrir o modal de edição
    function abrirModalEditar(id) {
      const produto = produtos[id];
      if (!produto) return;
  
      document.getElementById('editar-nome').value = produto.nome;
      document.getElementById('editar-descricao').value = produto.descricao;
      document.getElementById('editar-preco').value = produto.preco;
      document.getElementById('editar-pontos').value = produto.pontos;
      document.getElementById('editar-produto').dataset.id = id;
  
      document.getElementById('modal-editar').style.display = 'block';
    }
  
    // Função para editar um produto
    function editarProduto(id) {
      const produto = produtos[id];
      if (!produto) return;
  
      produto.nome = document.getElementById('editar-nome').value;
      produto.descricao = document.getElementById('editar-descricao').value;
      produto.preco = parseFloat(document.getElementById('editar-preco').value) || 0; // Validação no preço
      produto.pontos = parseInt(document.getElementById('editar-pontos').value) || 0; // Validação no pontos
  
      salvarProdutosNoLocalStorage();
      atualizarCards();
      alert(`Produto "${produto.nome}" editado com sucesso!`);
      document.getElementById('modal-editar').style.display = 'none';
    }
  
    // Função para inativar um produto
    function inativarProduto(id) {
      const produto = produtos[id];
      if (!produto) return;
  
      produto.status = 'Inativo';
  
      salvarProdutosNoLocalStorage();
      atualizarCards();
      alert(`Produto "${produto.nome}" inativado com sucesso!`);
      document.getElementById('modal-editar').style.display = 'none';
    }
  
    // Adicionar eventos de edição e inativação
    document.getElementById('editar-produto').addEventListener('click', () => {
      const id = document.getElementById('editar-produto').dataset.id;
      editarProduto(id);
    });
  
    document.getElementById('inativar-produto').addEventListener('click', () => {
      const id = document.getElementById('editar-produto').dataset.id;
      inativarProduto(id);
    });
  
    document.getElementById('fecharModalEditar').addEventListener('click', () => {
      document.getElementById('modal-editar').style.display = 'none';
    });
  
    // Botão de Adicionar e exibição do modal correspondente
    const addButton = document.getElementById('add-button');
    const modalAdicionar = document.getElementById('modal-adicionar');
    const fecharModalAdicionar = document.getElementById('fecharModalAdicionar');
  
    addButton.addEventListener('click', () => {
      modalAdicionar.style.display = 'flex';
    });
  
    fecharModalAdicionar.addEventListener('click', () => {
      modalAdicionar.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modalAdicionar) {
        modalAdicionar.style.display = 'none';
      }
    });
  
    // Carregar os cards no início
    atualizarCards();
  });
  