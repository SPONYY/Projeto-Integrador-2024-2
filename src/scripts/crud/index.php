<?php
// ESTE ARQUIVO NÃO FAZ PARTE DO PROJETO, É APENAS PARA TESTAR O CRUD!!!

require_once 'conexao.php';
require_once 'colaborador.php'; 
require_once 'conquistaDesafio.php'; 
require_once 'item.php'; 
require_once 'mesa.php'; 
require_once 'pedido.php'; 
require_once 'pedidoItem.php'; 


$database = new Database();
$db = $database->getConnection();

// Testar cada CRUD

// Testando Colaborador
$colaborador = new Colaborador($db);
$colaborador->nome_completo = "João da Silva"; 
$colaborador->cpf = "234.167.190-08"; 
$colaborador->data_nascimento = "1990-01-01"; 
$colaborador->cargo = "analista"; 
$colaborador->data_admissao = "2019-03-01"; 
$colaborador->data_contratacao = "2019-03-01"; 


if ($colaborador->create()) {
    echo "Colaborador criado com sucesso!<br>";
}

// Testando ConquistaDesafio
$conquistaDesafio = new ConquistaDesafio($db);
$conquistaDesafio->nome = "Desafio do Mês"; 
$conquistaDesafio->descricao = "Complete todas as tarefas do mês.";
$conquistaDesafio->tipo = "teste";
$conquistaDesafio->criterios_desbloqueio = "teste"; 

if ($conquistaDesafio->create()) {
    echo "Conquista/Desafio criado com sucesso!<br>";
}

// Testando Item
$item = new Item($db);
$item->tipo_item = "Prato"; 
$item->descricao = "Pizza de Calabresa"; 

if ($item->create()) {
    echo "Item criado com sucesso!<br>";
}

// Testando Mesa
$mesa = new Mesa($db);
$mesa->numero_mesa = 1; 
$mesa->capacidade = 4; 

if ($mesa->create()) {
    echo "Mesa criada com sucesso!<br>";
}

// Testando Pedido
$pedido = new Pedido($db);
$pedido->id_mesa = 1; 
$pedido->total = 50.00; 
if ($pedido->create()) {
    echo "Pedido criado com sucesso!<br>";
}

// Testando PedidoItem
$pedidoItem = new PedidoItem($db);
$pedidoItem->id_pedido = 1; 
$pedidoItem->id_item = 1; 
$pedidoItem->quantidade = 2; 
$pedidoItem->preco_unitario = 25.00; 

if ($pedidoItem->create()) {
    echo "Item do pedido criado com sucesso!<br>";
}


?>
