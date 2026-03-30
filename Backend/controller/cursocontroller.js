const db = require("../db")

class CursoController {
    
// GET
listar(req, res){

const sql = "SELECT * FROM cursos"

db.query(sql, (err, result) => {
    if(err){
        res.send(err)
    } else {
        res.json(result)
    }
})

}

// POST
criar(req, res){

const { titulo, descricao, duracao, status } = req.body

const sql = `
INSERT INTO cursos (titulo, descricao, duracao, status)
VALUES (?, ?, ?, ?)
`

db.query(sql, [titulo, descricao, duracao, status], (err) => {
    if(err){
        res.send(err)
    } else {
        res.send("Curso cadastrado com sucesso.")
    }
})

}

// PUT
atualizar(req, res){

const id = req.params.id
const { titulo, descricao, duracao, status } = req.body

const sql = `
UPDATE cursos
SET titulo=?, descricao=?, duracao=?, status=?
WHERE id=?
`

db.query(sql, [titulo, descricao, duracao, status, id], (err) => {
    if(err){
        res.send(err)
    } else {
        res.send("Curso atualizado com sucesso.")
    }
})

}

// DELETE
deletar(req, res){

const id = req.params.id

const sql = "DELETE FROM cursos WHERE id=?"

db.query(sql, [id], (err) => {
    if(err){
        res.send(err)
    } else {
        res.send("Curso deletado com sucesso.")
    }
})

}

}

module.exports = new CursoController()