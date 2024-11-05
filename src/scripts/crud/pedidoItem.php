<?php
class PedidoItem {
    private $conn;
    private $table_name = "pedido_itens";

    public $id_pedido_item;
    public $id_pedido;
    public $id_item;
    public $quantidade;
    public $preco_unitario;
    public $subtotal;

    public function __construct($db) {
        $this->conn = $db;
    }

    // CREATE
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " SET
            id_pedido=:id_pedido, id_item=:id_item, quantidade=:quantidade,
            preco_unitario=:preco_unitario";

        $stmt = $this->conn->prepare($query);

        // Bind dos parâmetros
        $stmt->bindParam(":id_pedido", $this->id_pedido);
        $stmt->bindParam(":id_item", $this->id_item);
        $stmt->bindParam(":quantidade", $this->quantidade);
        $stmt->bindParam(":preco_unitario", $this->preco_unitario);

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
            id_pedido=:id_pedido, id_item=:id_item, quantidade=:quantidade,
            preco_unitario=:preco_unitario
            WHERE id_pedido_item=:id_pedido_item";

        $stmt = $this->conn->prepare($query);

        // Bind dos parâmetros
        $stmt->bindParam(":id_pedido", $this->id_pedido);
        $stmt->bindParam(":id_item", $this->id_item);
        $stmt->bindParam(":quantidade", $this->quantidade);
        $stmt->bindParam(":preco_unitario", $this->preco_unitario);
        $stmt->bindParam(":id_pedido_item", $this->id_pedido_item);

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
