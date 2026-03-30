const form = document.getElementById("formCurso")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const curso = {
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricao").value,
        duracao: document.getElementById("duracao").value,
        status: document.getElementById("status").value
    }

    if(!curso.titulo || !curso.descricao || !curso.duracao || !curso.status){
        mensagem.innerText = "Preencha todos os campos!"
        mensagem.style.color = "red"
        return
    }

    try {
        await fetch("http://localhost:3000/cursos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(curso)
        })

        mensagem.innerText = "Curso cadastrado com sucesso!"
        mensagem.style.color = "green"

        form.reset()

    } catch (erro) {
        mensagem.innerText = "Erro ao cadastrar o curso"
        mensagem.style.color = "red"
    }
})