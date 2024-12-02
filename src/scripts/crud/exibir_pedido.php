<?php
require_once 'conexao.php';

$database = new Database();
$conn = $database->getConnection();

// Consulta para buscar os pedidos
$query = "SELECT 
            id_pedido, id_mesa, data_hora, status, total, observacoes
          FROM pedidos";
$stmt = $conn->prepare($query);
$stmt->execute();

// Início da tabela
echo "<div id='tabela-container'>";
echo "<table id='tabela-pedidos'>";
echo "<thead>
        <tr>
            <th>Pedido</th>
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
