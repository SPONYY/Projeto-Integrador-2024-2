<?php
class Colaborador {
    private $conn;
    private $table_name = "colaboradores";

    public $id;
    public $nome_completo;
    public $cpf;
    public $data_nascimento;
    public $rua;
    public $numero;
    public $complemento;
    public $bairro;
    public $cidade;
    public $estado;
    public $cep;
    public $telefone;
    public $email;
    public $foto;
    public $cargo;
    public $data_contratacao;
    public $turno_trabalho;
    public $salario;
    public $nivel_acesso;
    public $responsabilidades_adicionais;
    public $rg;
    public $carteira_trabalho;
    public $pis_pasep;
    public $data_admissao;
    public $data_demissao;
    public $tipo_contrato;
    public $beneficios;
    public $desempenho;
    public $historico_promocoes;
    public $faltas_afastamentos;
    public $treinamentos_concluidos;
    public $observacoes;

    public function __construct($db) {
        $this->conn = $db;
    }

    // CREATE
    public function create() {
        // Verificação de campos obrigatórios
        if (empty($this->nome_completo) || empty($this->cargo)) {
            throw new Exception("Os campos 'nome_completo' e 'cargo' são obrigatórios.");
        }

        $query = "INSERT INTO " . $this->table_name . " SET
            nome_completo=:nome_completo, cpf=:cpf, data_nascimento=:data_nascimento, rua=:rua, numero=:numero, 
            complemento=:complemento, bairro=:bairro, cidade=:cidade, estado=:estado, cep=:cep, telefone=:telefone,
            email=:email, foto=:foto, cargo=:cargo, data_contratacao=:data_contratacao, turno_trabalho=:turno_trabalho,
            salario=:salario, nivel_acesso=:nivel_acesso, responsabilidades_adicionais=:responsabilidades_adicionais,
            rg=:rg, carteira_trabalho=:carteira_trabalho, pis_pasep=:pis_pasep, data_admissao=:data_admissao, 
            data_demissao=:data_demissao, tipo_contrato=:tipo_contrato, beneficios=:beneficios, desempenho=:desempenho,
            historico_promocoes=:historico_promocoes, faltas_afastamentos=:faltas_afastamentos, 
            treinamentos_concluidos=:treinamentos_concluidos, observacoes=:observacoes";

        $stmt = $this->conn->prepare($query);

        // sanitizar e vincular os valores
        $stmt->bindParam(":nome_completo", $this->nome_completo);
        $stmt->bindParam(":cpf", $this->cpf);
        $stmt->bindParam(":data_nascimento", $this->data_nascimento);
        $stmt->bindParam(":rua", $this->rua);
        $stmt->bindParam(":numero", $this->numero);
        $stmt->bindParam(":complemento", $this->complemento);
        $stmt->bindParam(":bairro", $this->bairro);
        $stmt->bindParam(":cidade", $this->cidade);
        $stmt->bindParam(":estado", $this->estado);
        $stmt->bindParam(":cep", $this->cep);
        $stmt->bindParam(":telefone", $this->telefone);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":foto", $this->foto, PDO::PARAM_LOB);
        $stmt->bindParam(":cargo", $this->cargo);
        $stmt->bindParam(":data_contratacao", $this->data_contratacao);
        $stmt->bindParam(":turno_trabalho", $this->turno_trabalho);
        $stmt->bindParam(":salario", $this->salario);
        $stmt->bindParam(":nivel_acesso", $this->nivel_acesso);
        $stmt->bindParam(":responsabilidades_adicionais", $this->responsabilidades_adicionais);
        $stmt->bindParam(":rg", $this->rg);
        $stmt->bindParam(":carteira_trabalho", $this->carteira_trabalho);
        $stmt->bindParam(":pis_pasep", $this->pis_pasep);
        $stmt->bindParam(":data_admissao", $this->data_admissao);
        $stmt->bindParam(":data_demissao", $this->data_demissao);
        $stmt->bindParam(":tipo_contrato", $this->tipo_contrato);
        $stmt->bindParam(":beneficios", $this->beneficios);
        $stmt->bindParam(":desempenho", $this->desempenho);
        $stmt->bindParam(":historico_promocoes", $this->historico_promocoes);
        $stmt->bindParam(":faltas_afastamentos", $this->faltas_afastamentos);
        $stmt->bindParam(":treinamentos_concluidos", $this->treinamentos_concluidos);
        $stmt->bindParam(":observacoes", $this->observacoes);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // READ
    public function read($id) {
        $stmt = $this->conn->prepare("SELECT * FROM " . $this->table_name . " WHERE id = :id");
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // UPDATE
    public function update() {
        $query = "UPDATE " . $this->table_name . " SET
            nome_completo=:nome_completo, cpf=:cpf, data_nascimento=:data_nascimento, rua=:rua, numero=:numero, 
            complemento=:complemento, bairro=:bairro, cidade=:cidade, estado=:estado, cep=:cep, telefone=:telefone,
            email=:email, foto=:foto, cargo=:cargo, data_contratacao=:data_contratacao, turno_trabalho=:turno_trabalho,
            salario=:salario, nivel_acesso=:nivel_acesso, responsabilidades_adicionais=:responsabilidades_adicionais,
            rg=:rg, carteira_trabalho=:carteira_trabalho, pis_pasep=:pis_pasep, data_admissao=:data_admissao, 
            data_demissao=:data_demissao, tipo_contrato=:tipo_contrato, beneficios=:beneficios, desempenho=:desempenho,
            historico_promocoes=:historico_promocoes, faltas_afastamentos=:faltas_afastamentos, 
            treinamentos_concluidos=:treinamentos_concluidos, observacoes=:observacoes WHERE id=:id";

        $stmt = $this->conn->prepare($query);

        // sanitizar e vincular valores
        $stmt->bindParam(":nome_completo", $this->nome_completo);
        $stmt->bindParam(":cpf", $this->cpf);
        $stmt->bindParam(":data_nascimento", $this->data_nascimento);
        $stmt->bindParam(":rua", $this->rua);
        $stmt->bindParam(":numero", $this->numero);
        $stmt->bindParam(":complemento", $this->complemento);
        $stmt->bindParam(":bairro", $this->bairro);
        $stmt->bindParam(":cidade", $this->cidade);
        $stmt->bindParam(":estado", $this->estado);
        $stmt->bindParam(":cep", $this->cep);
        $stmt->bindParam(":telefone", $this->telefone);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":foto", $this->foto, PDO::PARAM_LOB);
        $stmt->bindParam(":cargo", $this->cargo);
        $stmt->bindParam(":data_contratacao", $this->data_contratacao);
        $stmt->bindParam(":turno_trabalho", $this->turno_trabalho);
        $stmt->bindParam(":salario", $this->salario);
        $stmt->bindParam(":nivel_acesso", $this->nivel_acesso);
        $stmt->bindParam(":responsabilidades_adicionais", $this->responsabilidades_adicionais);
        $stmt->bindParam(":rg", $this->rg);
        $stmt->bindParam(":carteira_trabalho", $this->carteira_trabalho);
        $stmt->bindParam(":pis_pasep", $this->pis_pasep);
        $stmt->bindParam(":data_admissao", $this->data_admissao);
        $stmt->bindParam(":data_demissao", $this->data_demissao);
        $stmt->bindParam(":tipo_contrato", $this->tipo_contrato);
        $stmt->bindParam(":beneficios", $this->beneficios);
        $stmt->bindParam(":desempenho", $this->desempenho);
        $stmt->bindParam(":historico_promocoes", $this->historico_promocoes);
        $stmt->bindParam(":faltas_afastamentos", $this->faltas_afastamentos);
        $stmt->bindParam(":treinamentos_concluidos", $this->treinamentos_concluidos);
        $stmt->bindParam(":observacoes", $this->observacoes);
        $stmt->bindParam(":id", $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // DELETE
    public function delete($id) {
        $stmt = $this->conn->prepare("DELETE FROM " . $this->table_name . " WHERE id = :id");
        $stmt->bindParam(":id", $id);
        return $stmt->execute();
    }
}
