<?php
require_once 'conexao.php';

$database = new Database();
$conn = $database->getConnection();

// Consulta para buscar os itens do pedido
$query = "SELECT 
            id_pedido_item, id_pedido, id_item, quantidade, preco_unitario, subtotal
          FROM pedido_itens";
$stmt = $conn->prepare($query);
$stmt->execute();

// Início da tabela
echo "<div id='tabela-container'>";
echo "<table id='tabela-pedido-itens'>";
echo "<thead>
        <tr>
            <th>Pedido Item</th>
            <th>Detalhes</th>
        </tr>
      </thead>";
echo "<tbody>";

// Loop para preencher os dados da tabela
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    foreach ($row as $campo => $valor) {
        echo "<tr>
                <td>" . htmlspecialchars($campo) . "</td>
                <td>" . htmlspecialchars($valor) . "</td>
              </tr>";
    }
    echo "<tr><td colspan='2' style='text-align: center;'>---</td></tr>"; // Separador entre registros
}

echo "</tbody>";
echo "</table>";
echo "</div>";
?>
