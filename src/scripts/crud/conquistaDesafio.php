<?php
class ConquistaDesafio {
    private $conn;
    private $table_name = "conquistas_desafios";

    public $id;
    public $nome;
    public $descricao;
    public $tipo;
    public $recompensa;
    public $criterios_desbloqueio;
    public $icone;
    public $data_inicio;
    public $data_fim;
    public $pontos_recompensa;
    public $status;
    public $categoria;
    public $dificuldade;
    public $progresso;
    public $disponibilidade;

    public function __construct($db) {
        $this->conn = $db;
    }

    // CREATE
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " SET
            nome=:nome, descricao=:descricao, tipo=:tipo, recompensa=:recompensa, criterios_desbloqueio=:criterios_desbloqueio,
            icone=:icone, data_inicio=:data_inicio, data_fim=:data_fim, pontos_recompensa=:pontos_recompensa,
            status=:status, categoria=:categoria, dificuldade=:dificuldade, progresso=:progresso, disponibilidade=:disponibilidade";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":descricao", $this->descricao);
        $stmt->bindParam(":tipo", $this->tipo);
        $stmt->bindParam(":recompensa", $this->recompensa);
        $stmt->bindParam(":criterios_desbloqueio", $this->criterios_desbloqueio);
        $stmt->bindParam(":icone", $this->icone, PDO::PARAM_LOB);
        $stmt->bindParam(":data_inicio", $this->data_inicio);
        $stmt->bindParam(":data_fim", $this->data_fim);
        $stmt->bindParam(":pontos_recompensa", $this->pontos_recompensa);
        $stmt->bindParam(":status", $this->status);
        $stmt->bindParam(":categoria", $this->categoria);
        $stmt->bindParam(":dificuldade", $this->dificuldade);
        $stmt->bindParam(":progresso", $this->progresso);
        $stmt->bindParam(":disponibilidade", $this->disponibilidade);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // READ
    public function read($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM colaboradores WHERE id = :id");
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // UPDATE
    public function update() {
        $query = "UPDATE " . $this->table_name . " SET
            nome=:nome, descricao=:descricao, tipo=:tipo, recompensa=:recompensa, criterios_desbloqueio=:criterios_desbloqueio,
            icone=:icone, data_inicio=:data_inicio, data_fim=:data_fim, pontos_recompensa=:pontos_recompensa,
            status=:status, categoria=:categoria, dificuldade=:dificuldade, progresso=:progresso, disponibilidade=:disponibilidade 
            WHERE id=:id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":descricao", $this->descricao);
        $stmt->bindParam(":tipo", $this->tipo);
        $stmt->bindParam(":recompensa", $this->recompensa);
        $stmt->bindParam(":criterios_desbloqueio", $this->criterios_desbloqueio);
        $stmt->bindParam(":icone", $this->icone, PDO::PARAM_LOB);
        $stmt->bindParam(":data_inicio", $this->data_inicio);
        $stmt->bindParam(":data_fim", $this->data_fim);
        $stmt->bindParam(":pontos_recompensa", $this->pontos_recompensa);
        $stmt->bindParam(":status", $this->status);
        $stmt->bindParam(":categoria", $this->categoria);
        $stmt->bindParam(":dificuldade", $this->dificuldade);
        $stmt->bindParam(":progresso", $this->progresso);
        $stmt->bindParam(":disponibilidade", $this->disponibilidade);
        $stmt->bindParam(":id", $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    
    // DELETE
    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM colaboradores WHERE id = :id");
        return $stmt->execute(['id' => $id]);
    }
}