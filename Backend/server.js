const express = require("express")
const cors = require("cors")

const app = express()

const controller = require("./controller/CursoController")

app.use(cors())
app.use(express.json())

// ROTAS
app.get("/cursos", controller.listar)
app.post("/cursos", controller.criar)
app.put("/cursos/:id", controller.atualizar)
app.delete("/cursos/:id", controller.deletar)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})