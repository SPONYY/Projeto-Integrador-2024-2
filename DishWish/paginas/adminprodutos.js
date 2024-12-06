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

    // Dados dos produtos (carregados do LocalStorage ou padrão inicial)
    let produtos = carregarProdutosDoLocalStorage() || {
        "1": { "img": '../img/image5.png', "nome": "Hamburguer", "descricao": "Carne e pão", "preco": 10.00, "pontos": 50, "status": "Ativo" },
        "2": { "img": '../img/image5.png', "nome": "Batata Frita", "descricao": "Batata e sal", "preco": 5.00, "pontos": 35, "status": "Ativo" },
        "3": { "img": '../img/image5.png', "nome": "Salada", "descricao": "Salada de Alface", "preco": 3.00, "pontos": 15, "status": "Ativo" },
        "4": { "img": '../img/image5.png', "nome": "Suco Natural", "descricao": "Suco de laranja", "preco": 12.00, "pontos": 5, "status": "Ativo" },
        "5": { "img": '../img/image5.png', "nome": "Chá Gelado", "descricao": "Chá Mate", "preco": 10.00, "pontos": 10, "status": "Ativo" },
        "6": { "img": '../img/image5.png', "nome": "Refrigerante", "descricao": "Refrigerante e gelo", "preco": 3.00, "pontos": 15, "status": "Ativo" },
    };

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

    // Função para editar o produto
    function editarProduto(id) {
        const produto = produtos[id];
        produto.nome = document.getElementById('editar-nome').value;
        produto.descricao = document.getElementById('editar-descricao').value;
        produto.preco = parseFloat(document.getElementById('editar-preco').value);
        produto.pontos = parseInt(document.getElementById('editar-pontos').value);

        salvarProdutosNoLocalStorage();
        atualizarCards();
        alert(`Produto "${produto.nome}" editado com sucesso!`);
        document.getElementById('modal-editar').style.display = 'none';
    }

    // Função para inativar o produto
    function inativarProduto(id) {
        const produto = produtos[id];
        produto.status = 'Inativo';

        salvarProdutosNoLocalStorage();
        atualizarCards();
        alert(`Produto "${produto.nome}" inativado com sucesso!`);
        document.getElementById('modal-editar').style.display = 'none';
    }

    // Função para criar os cards
    function criarProdutoCard(produto, id) {
        const card = document.createElement('div');
        card.classList.add('produtocard');
        card.dataset.id = id;

        card.innerHTML = `
            <img src="${produto.img}" alt="Produto">
            <div class="produtoinfo">
                <span class="nome-produto">${produto.nome}</span>
                <p>${produto.descricao}</p>
                <p>Preço: R$${produto.preco.toFixed(2)}</p>
                <p>Pontos: ${produto.pontos}</p>
            </div>
        `;

        card.addEventListener('click', () => abrirModalEditar(id));
        document.getElementById('produtos-container').appendChild(card);
    }

    // Função para atualizar os cards
    function atualizarCards() {
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';
        Object.keys(produtos).forEach(id => {
            if (produtos[id].status === 'Ativo') {
                criarProdutoCard(produtos[id], id);
            }
        });
    }

    // Eventos de edição e inativação
    document.getElementById('editar-produto').addEventListener('click', function () {
        const id = this.dataset.id;
        editarProduto(id);
    });

    document.getElementById('inativar-produto').addEventListener('click', function () {
        const id = document.getElementById('editar-produto').dataset.id;
        inativarProduto(id);
    });

    // Fecha o modal de edição
    document.getElementById('fecharModalEditar').addEventListener('click', function () {
        document.getElementById('modal-editar').style.display = 'none';
    });

    // Inicializa os cards
    atualizarCards();
});
