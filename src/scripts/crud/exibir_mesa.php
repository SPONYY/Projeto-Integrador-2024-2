<?php
require_once 'conexao.php';

$database = new Database();
$conn = $database->getConnection();

// Consulta para buscar as mesas
$query = "SELECT 
            id_mesa, numero_mesa, capacidade, status, localizacao, observacoes 
          FROM mesas";
$stmt = $conn->prepare($query);
$stmt->execute();

// Início da tabela
echo "<div id='tabela-container'>";
echo "<table id='tabela-mesas'>";
echo "<thead>
        <tr>
            <th>ID da Mesa</th>
            <th>Número da Mesa</th>
            <th>Capacidade</th>
            <th>Status</th>
            <th>Localização</th>
            <th>Observações</th>
        </tr>
      </thead>";
echo "<tbody>";

// Loop para preencher os dados da tabela
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>
            <td>" . htmlspecialchars($row['id_mesa']) . "</td>
            <td>" . htmlspecialchars($row['numero_mesa']) . "</td>
            <td>" . htmlspecialchars($row['capacidade']) . "</td>
            <td>" . htmlspecialchars($row['status']) . "</td>
            <td>" . htmlspecialchars($row['localizacao']) . "</td>
            <td>" . htmlspecialchars($row['observacoes']) . "</td>
          </tr>";
}

echo "</tbody>";
echo "</table>";
echo "</div>";
?>
