const connection = require("../infraestrutura/connection")

class Cliente{
    add(cliente){
        const sql = "INSERT INTO sistemaclientes SET ?"

        connection.query(sql, cliente, (erro, resultado) => {
            if(erro){
                console.log(erro);
            }else{
            console.log(resultado);
        }
        })

    }
}
module.exports = new Cliente()