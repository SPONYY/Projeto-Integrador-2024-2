// Dados dos produtos
const produtos = {
    "1": {
        "img": '../img/image5.png',
        "nome": "Hamburguer",   
        "descricao": "Carne e pão",
        "preco": 10.00,
        "pontos": 50
    },
    "2": {
        "img": '../img/image5.png',
        "nome": "Batata Frita",
        "descricao": "Batata e sal",
        "preco": 5.00,
        "pontos": 35
    },
    "3": {
        "img": '../img/image5.png',
        "nome": "Salada",
        "descricao": "Salada de Alface",
        "preco": 3.00,
        "pontos": 15
    },
    "4": {
        "img": '../img/image5.png',
        "nome": "Suco Natural",
        "descricao": "Suco de laranja",
        "preco": 12.00,
        "pontos": 5
    },
    "5": {
        "img": '../img/image5.png',
        "nome": "Chá Gelado",
        "descricao": "Chá Mate",
        "preco": 10.00,
        "pontos": 10
    },
    "6": {
        "img": '../img/image5.png',
        "nome": "Refrigerante",
        "descricao": "Refrigerante e gelo",
        "preco": 3.00,
        "pontos": 15
    },
};

// Carrinho de compras
let carrinho = [];

// Seleção de elementos HTML
const container = document.getElementById('produtos-container');
const modal = document.getElementById('modal');
const fecharModal = document.getElementById('fecharModal');
const modalImg = document.getElementById('modal-img');
const modalNome = document.getElementById('modal-nome');
const modalDescricao = document.getElementById('modal-descricao');
const modalPontos = document.getElementById('modal-pontos');
const modalPreco = document.getElementById('modal-preco');
const adicionarCarrinhoBtn = document.getElementById('adicionarCarrinhoBtn');
const itensCarrinho = document.getElementById('itensCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const visualizarPedidoBtn = document.getElementById('visualizarpedido');
const finalizarCarrinhoBtn = document.getElementById('finalizarCarrinho');

// Função para criar os cards de produtos
function criarProdutoCard(produto) {
    const produtoCard = document.createElement('div');
    produtoCard.classList.add('produtocard');
    
    produtoCard.innerHTML = `
        <img src="${produto.img}" alt="Produto">
        <div class="produtoinfo">
            <span class="nome-produto">${produto.nome}</span>
            <p class="descricao">${produto.descricao}</p>
            <div class="detalhes">
                <span class="pontos">${produto.pontos} pontos</span>
                <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
            </div>
        </div>
    `;

    // Adiciona o card ao contêiner de produtos
    produtoCard.addEventListener('click', () => {
        exibirDetalhesProduto(produto); // Chama a função para exibir o modal
    });

    container.appendChild(produtoCard);
}

// Função para exibir o modal com as informações do produto
function exibirDetalhesProduto(produto) {
    modal.style.display = 'block';
    modalImg.src = produto.img;
    modalNome.textContent = produto.nome;
    modalDescricao.textContent = produto.descricao;
    modalPontos.textContent = `${produto.pontos} pontos`;
    modalPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;

    // Adicionar evento para o botão "Adicionar ao Carrinho"
    adicionarCarrinhoBtn.onclick = () => {
        adicionarAoCarrinho(produto);
        fecharModalFuncao();
    };
}

// Função para adicionar produto ao carrinho
// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    const produtoNoCarrinho = carrinho.find(item => item.nome === produto.nome);

    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade += 1; // Aumentar a quantidade se já estiver no carrinho
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1 // Adicionar novo produto com quantidade 1
        });
    }

    exibirCarrinho();  // Atualiza a exibição do carrinho

    // Exibir o carrinho automaticamente após adicionar o produto
    document.getElementById('carrinho-container').style.display = 'block';
    document.getElementById('visualizarpedido').style.display = 'none';
    document.getElementById('finalizarpedido').style.display = 'none';
}


    exibirCarrinho();


// Função para exibir carrinho com total e pontuação
function exibirCarrinho() {
    itensCarrinho.innerHTML = ""; // Limpar itens anteriores
    let total = 0;
    let pontosTotais = 0;

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        pontosTotais += item.pontos * item.quantidade; // Calcular a pontuação total

        itensCarrinho.innerHTML += `
            <div class="item-carrinho">
                <img src="${item.img}" alt="Produto">
                <span>${item.nome} - ${item.quantidade}x</span>
                <span class="preco-total">R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            </div>
        `;
    });

    // Exibir total e pontuação
    itensCarrinho.innerHTML += `
        <div class="total">Total: R$ ${total.toFixed(2)}</div>
        <div class="pontuacao">Pontuação acumulada: ${pontosTotais} pontos</div>
    `;

    // Exibir botão de finalizar compra
    finalizarCarrinhoBtn.style.display = 'block'; // Mostra o botão de finalizar compra
}

// Função para finalizar a compra
function finalizarCompra() {
    alert("Compra finalizada com sucesso!");
    carrinho = [];
    document.getElementById('carrinho-container').style.display = 'none';

    // Mostrar os botões de visualizar pedido e finalizar pedido novamente
    document.getElementById('visualizarpedido').style.display = 'block';
    document.getElementById('finalizarpedido').style.display = 'block'; // Limpar o carrinho após finalizar
    exibirCarrinho();
     // Atualiza a exibição do carrinho
}

// Função para fechar o modal
function fecharModalFuncao() {
    modal.style.display = 'none';
}

// Event listener para fechar o modal
fecharModal.addEventListener('click', fecharModalFuncao);

// Função para fechar o carrinho
fecharCarrinho.addEventListener('click', () => {
    document.getElementById('carrinho-container').style.display = 'none';
});

// Exibir o carrinho
// Exibir o carrinho
visualizarPedidoBtn.addEventListener('click', () => {
    // Mostra o carrinho
    document.getElementById('carrinho-container').style.display = 'block';
    // Esconde os botões de visualizar pedido e finalizar pedido
    document.getElementById('visualizarpedido').style.display = 'none';
    document.getElementById('finalizarpedido').style.display = 'none';
});

// Fechar o carrinho
document.getElementById('fecharCarrinho').addEventListener('click', function() {
    // Esconde o carrinho
    document.getElementById('carrinho-container').style.display = 'none';
    // Quando o carrinho for fechado, os botões de visualizar pedido e finalizar pedido voltam a aparecer
    document.getElementById('visualizarpedido').style.display = 'block';
    document.getElementById('finalizarpedido').style.display = 'block';
});


// Finalizar a compra
finalizarCarrinhoBtn.addEventListener('click', finalizarCompra);

// Criar os cards de produto
for (let id in produtos) {
    produtos[id].id = id; // Adicionar o ID ao objeto do produto
    criarProdutoCard(produtos[id]);
}

// Exemplo de abrir o carrinho
document.getElementById('visualizarpedido').addEventListener('click', function() {
    document.getElementById('carrinho-container').style.display = 'block';
});

// Fechar o carrinho
document.getElementById('fecharCarrinho').addEventListener('click', function() {
    document.getElementById('carrinho-container').style.display = 'none';
});


