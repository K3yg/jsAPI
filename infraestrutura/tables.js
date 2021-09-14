class Tables{
    init(connection){
        this.connection = connection

        this.criarCliente()
    }

    criarCliente(){
        const sql = 'CREATE TABLE IF NOT EXISTS Clientes (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, cpf varchar(15) NOT NULL, PRIMARY KEY (id))'

        this.connection.query(sql, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela Clientes criada com sucesso.');
            }
        })
    }
}

module.exports = new Tables