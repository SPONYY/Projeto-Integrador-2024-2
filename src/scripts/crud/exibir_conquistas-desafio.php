<?php
require_once 'conexao.php'; // Inclui o arquivo de conexão

// Instancia a classe de conexão
$database = new Database();
$conn = $database->getConnection();

// Consulta para buscar os dados da tabela conquistas_desafios
$query = "SELECT id, nome, descricao, tipo, recompensa, criterios_desbloqueio, icone, data_inicio, data_fim, 
                 pontos_recompensa, status, categoria, dificuldade, progresso, disponibilidade 
          FROM conquistas_desafios";
$stmt = $conn->prepare($query);
$stmt->execute();

// Estrutura da tabela HTML
echo "<div id='tabela-conquistas'>";
echo "<table id='tabela-dados'>";
echo "<thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Recompensa</th>
            <th>Critérios de Desbloqueio</th>
            <th>Ícone</th>
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Pontos Recompensa</th>
            <th>Status</th>
            <th>Categoria</th>
            <th>Dificuldade</th>
            <th>Progresso</th>
            <th>Disponibilidade</th>
        </tr>
      </thead>";
echo "<tbody>";

// Loop para gerar as linhas da tabela com os dados
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>
            <td>" . htmlspecialchars($row['id']) . "</td>
            <td>" . htmlspecialchars($row['nome']) . "</td>
            <td>" . htmlspecialchars($row['descricao']) . "</td>
            <td>" . htmlspecialchars($row['tipo']) . "</td>
            <td>" . htmlspecialchars($row['recompensa']) . "</td>
            <td>" . htmlspecialchars($row['criterios_desbloqueio']) . "</td>
            <td><img src='data:image/jpeg;base64," . base64_encode($row['icone']) . "' alt='Ícone' style='width:50px;height:50px;'></td>
            <td>" . htmlspecialchars($row['data_inicio']) . "</td>
            <td>" . htmlspecialchars($row['data_fim']) . "</td>
            <td>" . htmlspecialchars($row['pontos_recompensa']) . "</td>
            <td>" . htmlspecialchars($row['status']) . "</td>
            <td>" . htmlspecialchars($row['categoria']) . "</td>
            <td>" . htmlspecialchars($row['dificuldade']) . "</td>
            <td>" . htmlspecialchars($row['progresso']) . "</td>
            <td>" . htmlspecialchars($row['disponibilidade']) . "</td>
          </tr>";
}

echo "</tbody>";
echo "</table>";
echo "</div>";
?>
