// Array de objetos contendo 3 bebidas e 3 comidas
const produtos = [
    
    { nome: 'Coca-Cola', tipo: 'bebida', preco: 5.00, img: '../img/image5.png'},
    { nome: 'Coca-Cola', tipo: 'bebida', preco: 5.00, img: '../img/image5.png'},
    { nome: 'Coca-Cola', tipo: 'bebida', preco: 5.00, img: '../img/image5.png'},
    { nome: 'Coca-Cola', tipo: 'bebida', preco: 5.00, img: '../img/image5.png'},    
];

// Função para gerar o HTML e inserir na página
function listarProdutos() {
    let listaHTML = '<ul>';
    produtos.forEach(produto => {
        listaHTML += `
            <li>
                <img src="${produto.img}" alt="${produto.nome}" style="width:50px;height:50px;">
                ${produto.nome} - ${produto.tipo} - R$ ${produto.preco.toFixed(2)}
            </li>`;
    });
    listaHTML += '</ul>';

    document.getElementById('lista-produtos').innerHTML = listaHTML;
}

// Chama a função para listar os produtos quando a página carregar
window.onload = function() {
    listarProdutos();
};  
// Função para gerar o HTML e inserir na página com estilo de cardápio
function listarProdutos() {
    let listaHTML = '<div class="cardapio">';
    produtos.forEach(produto => {
        listaHTML += `
            <div class="card">
                
                <div class="card-content">
                <img src="${produto.img}" alt="${produto.nome}" class="card-img">
                    <h3 class="card-title">${produto.nome}</h3>
                    <p class="card-type">${produto.tipo}</p>
                    <p class="card-price">R$ ${produto.preco.toFixed(2)}</p>
                            <button class="add-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="100" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
</button>

                </div>
            </div>`;
    });
    listaHTML += '</div>';

    document.getElementById('lista-produtos').innerHTML = listaHTML;
}

// Chama a função para listar os produtos quando a página carregar
window.onload = function() {
    listarProdutos();
};
