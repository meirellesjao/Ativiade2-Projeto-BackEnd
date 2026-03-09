const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

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

app.get("/cursos", (req, res) => {

    const sql = "SELECT * FROM cursos"

    db.query(sql, (err, result) => {
        if(err){
            res.send(err)
        } else {
            res.json(result)
        }
    })

})

app.post("/cursos", (req, res) => {

    const { titulo, descricao, duracao, status } = req.body

    const sql = `
    INSERT INTO cursos (titulo, descricao, duracao, status)
    VALUES (?, ?, ?, ?)
    `

    db.query(sql, [titulo, descricao, duracao, status], (err, result) => {
        if(err){
            res.send(err)
        } else {
            res.send("Curso cadastrado com sucesso.")
        }
    })

})

app.put("/cursos/:id", (req, res) => {

    const id = req.params.id
    const { titulo, descricao, duracao, status } = req.body

    const sql = `
    UPDATE cursos
    SET titulo=?, descricao=?, duracao=?, status=?
    WHERE id=?
    `

    db.query(sql, [titulo, descricao, duracao, status, id], (err, result) => {
        if(err){
            res.send(err)
        } else {
            res.send("Curso atualizado com sucesso.")
        }
    })

})

app.delete("/cursos/:id", (req, res) => {

    const id = req.params.id

    const sql = "DELETE FROM cursos WHERE id=?"

    db.query(sql, [id], (err, result) => {
        if(err){
            res.send(err)
        } else {
            res.send("Curso deletado com sucesso.")
        }
    })

})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})