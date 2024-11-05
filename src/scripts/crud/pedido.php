<?php
class Pedido {
    private $conn;
    private $table_name = "pedidos";

    public $id_pedido;
    public $id_mesa;
    public $data_hora;
    public $status;
    public $total;
    public $observacoes;

    public function __construct($db) {
        $this->conn = $db;
    }

    // CREATE
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " SET
            id_mesa=:id_mesa, data_hora=:data_hora, status=:status,
            total=:total, observacoes=:observacoes";

        $stmt = $this->conn->prepare($query);

        // Bind dos parâmetros
        $stmt->bindParam(":id_mesa", $this->id_mesa);
        $stmt->bindParam(":data_hora", $this->data_hora);
        $stmt->bindParam(":status", $this->status);
        $stmt->bindParam(":total", $this->total);
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
            id_mesa=:id_mesa, status=:status, total=:total,
            observacoes=:observacoes
            WHERE id_pedido=:id_pedido";

        $stmt = $this->conn->prepare($query);

        // Bind dos parâmetros
        $stmt->bindParam(":id_mesa", $this->id_mesa);
        $stmt->bindParam(":status", $this->status);
        $stmt->bindParam(":total", $this->total);
        $stmt->bindParam(":observacoes", $this->observacoes);
        $stmt->bindParam(":id_pedido", $this->id_pedido);

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
