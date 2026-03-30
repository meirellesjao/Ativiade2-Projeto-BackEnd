const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin1",
    database: "jv_cursos"
})

db.connect(err => {
    if(err){
        console.log("Erro:", err)
    } else {
        console.log("Conectado com sucesso ao MySQL")
    }
})

module.exports = db