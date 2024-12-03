document.addEventListener('DOMContentLoaded', function () {
    // Dados dos produtos
    const produtos = {
        "1": {
            "img": '../img/image5.png',
            "nome": "Hamburguer",   
            "descricao": "Carne e pão",
            "preco": 10.00,
            "pontos": 50,
            "status": "Ativo"
        },
        "2": {
            "img": '../img/image5.png',
            "nome": "Batata Frita",
            "descricao": "Batata e sal",
            "preco": 5.00,
            "pontos": 35,
            "status": "Ativo"
        },
        "3": {
            "img": '../img/image5.png',
            "nome": "Salada",
            "descricao": "Salada de Alface",
            "preco": 3.00,
            "pontos": 15,
            "status": "Ativo"
        },
        "4": {
            "img": '../img/image5.png',
            "nome": "Suco Natural",
            "descricao": "Suco de laranja",
            "preco": 12.00,
            "pontos": 5,
            "status": "Ativo"
        },
        "5": {
            "img": '../img/image5.png',
            "nome": "Chá Gelado",
            "descricao": "Chá Mate",
            "preco": 10.00,
            "pontos": 10,
            "status": "Ativo"
        },
        "6": {
            "img": '../img/image5.png',
            "nome": "Refrigerante",
            "descricao": "Refrigerante e gelo",
            "preco": 3.00,
            "pontos": 15,
            "status": "Ativo"
        },
    };

    // Função para fechar o modal de editar
    document.getElementById('fecharModalEditar').addEventListener('click', function () {
        document.getElementById('modal-editar').style.display = 'none';
    });

    // Função para abrir o modal de edição de produto
    function abrirModalEditar(id) {
        const produto = produtos[id];

        // Verifique se o modal e a imagem existem
        const imagem = document.getElementById('editar-imagem');
        if (imagem) {
            imagem.src = produto.img; // Atribui a imagem do produto ao modal
        }

        document.getElementById('editar-nome').value = produto.nome;
        document.getElementById('editar-descricao').value = produto.descricao;
        document.getElementById('editar-preco').value = produto.preco;
        document.getElementById('editar-pontos').value = produto.pontos;

        // Exibir o modal de edição
        document.getElementById('modal-editar').style.display = 'block';

        // Marcar o card como "ativo" para edição
        document.querySelectorAll('.produtocard').forEach(card => {
            card.classList.remove('active');
        });
        document.querySelector(`[data-id="${id}"]`).classList.add('active');
    }

    // Função para editar o produto
    function editarProduto(id) {
        const produto = produtos[id];
        produto.nome = document.getElementById('editar-nome').value;
        produto.descricao = document.getElementById('editar-descricao').value;
        produto.preco = parseFloat(document.getElementById('editar-preco').value);
        produto.pontos = parseInt(document.getElementById('editar-pontos').value);

        // Atualizar a visualização do produto
        atualizarCards();

        alert(`Produto "${produto.nome}" editado com sucesso!`);
        document.getElementById('modal-editar').style.display = 'none';
    }

    // Função para inativar o produto
    function inativarProduto(id) {
        const produto = produtos[id];
        produto.status = 'Inativo';

        // Atualizar a visualização do produto
        atualizarCards();

        alert(`Produto "${produto.nome}" inativado com sucesso!`);
        document.getElementById('modal-editar').style.display = 'none';
    }

    // Função para criar os cards de produtos
    function criarProdutoCard(produto, id) {
        const produtoCard = document.createElement('div');
        produtoCard.classList.add('produtocard');
        produtoCard.dataset.id = id; // Adiciona o id ao card do produto
        
        produtoCard.innerHTML = `
            <img src="${produto.img}" alt="Produto">
            <div class="produtoinfo">
                <span class="nome-produto">${produto.nome}</span>
                <p class="descricao-produto">${produto.descricao}</p>
                <p class="preco-produto">Preço: R$${produto.preco}</p>
                <p class="pontos-produto">Pontos: ${produto.pontos}</p>
            </div>
        `;
        
        // Adiciona o card ao container
        const container = document.getElementById('produtos-container');
        container.appendChild(produtoCard);
        
        // Evento de clique para abrir o modal de edição ao clicar no card
        produtoCard.addEventListener('click', () => {
            abrirModalEditar(id);
        });
    }

    // Função para atualizar os cards de produtos
    function atualizarCards() {
        const container = document.getElementById('produtos-container');
        container.innerHTML = ''; // Limpa o conteúdo atual

        // Cria um card para cada produto
        Object.keys(produtos).forEach(id => {
            if (produtos[id].status !== 'Inativo') { // Não exibe produtos inativos
                criarProdutoCard(produtos[id], id);
            }
        });
    }

    // Inicializa a página com os cards de produtos (caso já existam produtos)
    atualizarCards();

    // Adicionar eventos de edição e inativação fora da função abrirModalEditar
    document.getElementById('editar-produto').addEventListener('click', () => {
        const id = document.querySelector('.produtocard.active').dataset.id;
        editarProduto(id);
    });

    document.getElementById('inativar-produto').addEventListener('click', () => {
        const id = document.querySelector('.produtocard.active').dataset.id;
        inativarProduto(id);
    });

    // Abrir o modal de adicionar ao clicar no botão "Adicionar"
    document.getElementById('add-button').addEventListener('click', function () {
        document.getElementById('modal-overlay').style.display = 'flex';
    });

    // Fechar o modal "Adicionar" quando clicar no botão "Fechar"
    document.getElementById('close-button').addEventListener('click', function () {
        document.getElementById('modal-overlay').style.display = 'none';
    });

    // Ações para adicionar prato ou ingrediente
    document.getElementById('add-prato').addEventListener('click', function () {
        alert('Você escolheu adicionar um prato!');
        // Aqui você pode chamar a função para adicionar um prato
        document.getElementById('modal-overlay').style.display = 'none';
    });

    document.getElementById('add-ingrediente').addEventListener('click', function () {
        alert('Você escolheu adicionar um ingrediente!');
        // Aqui você pode chamar a função para adicionar um ingrediente
        document.getElementById('modal-overlay').style.display = 'none';
    });
});
