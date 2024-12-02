<?php

require_once 'conexao.php';


$database = new Database();
$conn = $database->getConnection();


$query = "SELECT id, nome_completo, cpf, cargo, data_contratacao, salario FROM colaboradores";
$stmt = $conn->prepare($query);
$stmt->execute();


echo "<div id='tabela-container'>";
echo "<table id='tabela-cadastros'>";
echo "<thead>
        <tr>
            <th>ID</th>
            <th>Nome Completo</th>
            <th>CPF</th>
            <th>Cargo</th>
            <th>Data de Contratação</th>
            <th>Salário</th>
        </tr>
      </thead>";
echo "<tbody>";

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>
            <td>" . htmlspecialchars($row['id']) . "</td>
            <td>" . htmlspecialchars($row['nome_completo']) . "</td>
            <td>" . htmlspecialchars($row['cpf']) . "</td>
            <td>" . htmlspecialchars($row['cargo']) . "</td>
            <td>" . htmlspecialchars($row['data_contratacao']) . "</td>
            <td>" . htmlspecialchars($row['salario']) . "</td>
          </tr>";
}

echo "</tbody>";
echo "</table>";
echo "</div>";
?>
