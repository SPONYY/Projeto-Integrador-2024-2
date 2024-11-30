// Seleciona o botão "Finalizar Pedido" e o modal
const finalizarPedidoBtn = document.getElementById('finalizarpedido');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close');

// Função para abrir o modal
function openModal() {
    modal.style.display = 'flex'; // Exibe o modal
    finalizarPedidoBtn.style.zIndex = '-1'; // Coloca o botão atrás do modal
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none'; // Esconde o modal
    finalizarPedidoBtn.style.zIndex = '0'; // Coloca o botão de volta à frente do modal
}

// Evento de clique para abrir o modal
document.getElementById('visualizarpedido').addEventListener('click', openModal);

// Evento de clique para fechar o modal
closeModalBtn.addEventListener('click', closeModal);
