<?php
class Mesa {
    private $conn;
    private $table_name = "mesas";

    public $id_mesa;
    public $numero_mesa;
    public $capacidade;
    public $status;
    public $localizacao;
    public $observacoes;

    public function __construct($db) {
        $this->conn = $db;
    }

    // CREATE
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " SET
            numero_mesa=:numero_mesa, capacidade=:capacidade, status=:status,
            localizacao=:localizacao, observacoes=:observacoes";

        $stmt = $this->conn->prepare($query);

        // Bind de parametros
        $stmt->bindParam(":numero_mesa", $this->numero_mesa);
        $stmt->bindParam(":capacidade", $this->capacidade);
        $stmt->bindParam(":status", $this->status);
        $stmt->bindParam(":localizacao", $this->localizacao);
        $stmt->bindParam(":observacoes", $this->observacoes);

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
            numero_mesa=:numero_mesa, capacidade=:capacidade, status=:status,
            localizacao=:localizacao, observacoes=:observacoes
            WHERE id_mesa=:id_mesa";

        $stmt = $this->conn->prepare($query);

        // Bind dos parâmetros
        $stmt->bindParam(":numero_mesa", $this->numero_mesa);
        $stmt->bindParam(":capacidade", $this->capacidade);
        $stmt->bindParam(":status", $this->status);
        $stmt->bindParam(":localizacao", $this->localizacao);
        $stmt->bindParam(":observacoes", $this->observacoes);
        $stmt->bindParam(":id_mesa", $this->id_mesa);

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