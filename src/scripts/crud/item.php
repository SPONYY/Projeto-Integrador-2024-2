<?php
class Item {
    private $conn;
    private $table_name = "itens";

    public $id;
    public $tipo_item;
    public $descricao_abreviada;
    public $descricao;
    public $quantidade;
    public $categoria_ingrediente;
    public $unidade_medida;
    public $quantidade_minima;
    public $data_validade;
    public $preco_unitario;
    public $local_armazenamento;
    public $observacoes;
    public $nome_prato;
    public $categoria_prato;
    public $descricao_prato;
    public $imagem_prato;
    public $ingredientes_utilizados;
    public $tempo_preparo;
    public $preco_venda;
    public $custo_total_ingredientes;
    public $tamanho_porcoes;
    public $disponibilidade;
    public $alergenos;

    public function __construct($db) {
        $this->conn = $db;
    }

    // CREATE
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " SET
            tipo_item=:tipo_item, descricao_abreviada=:descricao_abreviada, descricao=:descricao, quantidade=:quantidade,
            categoria_ingrediente=:categoria_ingrediente, unidade_medida=:unidade_medida, quantidade_minima=:quantidade_minima,
            data_validade=:data_validade, preco_unitario=:preco_unitario, local_armazenamento=:local_armazenamento,
            observacoes=:observacoes, nome_prato=:nome_prato, categoria_prato=:categoria_prato, descricao_prato=:descricao_prato,
            imagem_prato=:imagem_prato, ingredientes_utilizados=:ingredientes_utilizados, tempo_preparo=:tempo_preparo,
            preco_venda=:preco_venda, custo_total_ingredientes=:custo_total_ingredientes, tamanho_porcoes=:tamanho_porcoes,
            disponibilidade=:disponibilidade, alergenos=:alergenos";

        $stmt = $this->conn->prepare($query);

        // Bind dos parâmetros
        $stmt->bindParam(":tipo_item", $this->tipo_item);
        $stmt->bindParam(":descricao_abreviada", $this->descricao_abreviada);
        $stmt->bindParam(":descricao", $this->descricao);
        $stmt->bindParam(":quantidade", $this->quantidade);
        $stmt->bindParam(":categoria_ingrediente", $this->categoria_ingrediente);
        $stmt->bindParam(":unidade_medida", $this->unidade_medida);
        $stmt->bindParam(":quantidade_minima", $this->quantidade_minima);
        $stmt->bindParam(":data_validade", $this->data_validade);
        $stmt->bindParam(":preco_unitario", $this->preco_unitario);
        $stmt->bindParam(":local_armazenamento", $this->local_armazenamento);
        $stmt->bindParam(":observacoes", $this->observacoes);
        $stmt->bindParam(":nome_prato", $this->nome_prato);
        $stmt->bindParam(":categoria_prato", $this->categoria_prato);
        $stmt->bindParam(":descricao_prato", $this->descricao_prato);
        $stmt->bindParam(":imagem_prato", $this->imagem_prato, PDO::PARAM_LOB);
        $stmt->bindParam(":ingredientes_utilizados", $this->ingredientes_utilizados);
        $stmt->bindParam(":tempo_preparo", $this->tempo_preparo);
        $stmt->bindParam(":preco_venda", $this->preco_venda);
        $stmt->bindParam(":custo_total_ingredientes", $this->custo_total_ingredientes);
        $stmt->bindParam(":tamanho_porcoes", $this->tamanho_porcoes);
        $stmt->bindParam(":disponibilidade", $this->disponibilidade);
        $stmt->bindParam(":alergenos", $this->alergenos);

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
            tipo_item=:tipo_item, descricao_abreviada=:descricao_abreviada, descricao=:descricao, quantidade=:quantidade,
            categoria_ingrediente=:categoria_ingrediente, unidade_medida=:unidade_medida, quantidade_minima=:quantidade_minima,
            data_validade=:data_validade, preco_unitario=:preco_unitario, local_armazenamento=:local_armazenamento,
            observacoes=:observacoes, nome_prato=:nome_prato, categoria_prato=:categoria_prato, descricao_prato=:descricao_prato,
            imagem_prato=:imagem_prato, ingredientes_utilizados=:ingredientes_utilizados, tempo_preparo=:tempo_preparo,
            preco_venda=:preco_venda, custo_total_ingredientes=:custo_total_ingredientes, tamanho_porcoes=:tamanho_porcoes,
            disponibilidade=:disponibilidade, alergenos=:alergenos
            WHERE id=:id";

        $stmt = $this->conn->prepare($query);

        // Bind de parâmetros
        $stmt->bindParam(":tipo_item", $this->tipo_item);
        $stmt->bindParam(":descricao_abreviada", $this->descricao_abreviada);
        $stmt->bindParam(":descricao", $this->descricao);
        $stmt->bindParam(":quantidade", $this->quantidade);
        $stmt->bindParam(":categoria_ingrediente", $this->categoria_ingrediente);
        $stmt->bindParam(":unidade_medida", $this->unidade_medida);
        $stmt->bindParam(":quantidade_minima", $this->quantidade_minima);
        $stmt->bindParam(":data_validade", $this->data_validade);
        $stmt->bindParam(":preco_unitario", $this->preco_unitario);
        $stmt->bindParam(":local_armazenamento", $this->local_armazenamento);
        $stmt->bindParam(":observacoes", $this->observacoes);
        $stmt->bindParam(":nome_prato", $this->nome_prato);
        $stmt->bindParam(":categoria_prato", $this->categoria_prato);
        $stmt->bindParam(":descricao_prato", $this->descricao_prato);
        $stmt->bindParam(":imagem_prato", $this->imagem_prato, PDO::PARAM_LOB);
        $stmt->bindParam(":ingredientes_utilizados", $this->ingredientes_utilizados);
        $stmt->bindParam(":tempo_preparo", $this->tempo_preparo);
        $stmt->bindParam(":preco_venda", $this->preco_venda);
        $stmt->bindParam(":custo_total_ingredientes", $this->custo_total_ingredientes);
        $stmt->bindParam(":tamanho_porcoes", $this->tamanho_porcoes);
        $stmt->bindParam(":disponibilidade", $this->disponibilidade);
        $stmt->bindParam(":alergenos", $this->alergenos);
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