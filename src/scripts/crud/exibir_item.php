<?php
require_once 'conexao.php';

$database = new Database();
$conn = $database->getConnection();

// Consulta para buscar os itens
$query = "SELECT 
            id, tipo_item, descricao_abreviada, descricao, quantidade, 
            categoria_ingrediente, unidade_medida, quantidade_minima, data_validade, 
            preco_unitario, local_armazenamento, observacoes, nome_prato, 
            categoria_prato, descricao_prato, tempo_preparo, preco_venda, 
            custo_total_ingredientes, tamanho_porcoes, disponibilidade, alergenos 
          FROM itens";
$stmt = $conn->prepare($query);
$stmt->execute();

// Início da tabela
echo "<div id='tabela-container'>";
echo "<table id='tabela-itens'>";
echo "<thead>
        <tr>
            <th>ID</th>
            <th>Tipo do Item</th>
            <th>Descrição Abreviada</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Categoria Ingrediente</th>
            <th>Unidade de Medida</th>
            <th>Quantidade Mínima</th>
            <th>Data de Validade</th>
            <th>Preço Unitário</th>
            <th>Local de Armazenamento</th>
            <th>Observações</th>
            <th>Nome do Prato</th>
            <th>Categoria do Prato</th>
            <th>Descrição do Prato</th>
            <th>Tempo de Preparo</th>
            <th>Preço de Venda</th>
            <th>Custo Total dos Ingredientes</th>
            <th>Tamanho das Porções</th>
            <th>Disponibilidade</th>
            <th>Alergenos</th>
        </tr>
      </thead>";
echo "<tbody>";

// Loop para preencher os dados da tabela
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>
            <td>" . htmlspecialchars($row['id']) . "</td>
            <td>" . htmlspecialchars($row['tipo_item']) . "</td>
            <td>" . htmlspecialchars($row['descricao_abreviada']) . "</td>
            <td>" . htmlspecialchars($row['descricao']) . "</td>
            <td>" . htmlspecialchars($row['quantidade']) . "</td>
            <td>" . htmlspecialchars($row['categoria_ingrediente']) . "</td>
            <td>" . htmlspecialchars($row['unidade_medida']) . "</td>
            <td>" . htmlspecialchars($row['quantidade_minima']) . "</td>
            <td>" . htmlspecialchars($row['data_validade']) . "</td>
            <td>" . htmlspecialchars($row['preco_unitario']) . "</td>
            <td>" . htmlspecialchars($row['local_armazenamento']) . "</td>
            <td>" . htmlspecialchars($row['observacoes']) . "</td>
            <td>" . htmlspecialchars($row['nome_prato']) . "</td>
            <td>" . htmlspecialchars($row['categoria_prato']) . "</td>
            <td>" . htmlspecialchars($row['descricao_prato']) . "</td>
            <td>" . htmlspecialchars($row['tempo_preparo']) . "</td>
            <td>" . htmlspecialchars($row['preco_venda']) . "</td>
            <td>" . htmlspecialchars($row['custo_total_ingredientes']) . "</td>
            <td>" . htmlspecialchars($row['tamanho_porcoes']) . "</td>
            <td>" . htmlspecialchars($row['disponibilidade']) . "</td>
            <td>" . htmlspecialchars($row['alergenos']) . "</td>
          </tr>";
}

echo "</tbody>";
echo "</table>";
echo "</div>";
?>
