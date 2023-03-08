const e = require('express')
const express = require('express')

const app = express()
app.use(express.json())

const Estudantes = [

    {
        nome: 'Fabio',
        materia: 'Back-end',
        turma: 't-42'


    },
    {
        nome: 'Div',
        materia: 'Full-stack',
        turma: 't-1'



    },
    {
        nome: 'ivy',
        materia: 'Front-end',
        turma: 't-15',
        cpf : '03693245100'


    },
    {
        nome: 'Carlos',
        materia: 'Back-end',
        turma: 't-20'


    }
]
app.get('/Estudantes', (req, res) => {
    return res.json(Estudantes)
})

app.post('/estudantes', (req, res) => {
    const dados = req.body   
    Estudantes.push(dados)
    return res.send('estudante criado')
})

app.get ('/estudantes/:cpf', (req, res) => {
    const estudante = Estudantes.find(e => e.cpf == req.params.cpf)
    return res.json (estudante)
    
})

app.get('/', (req, res) => {

    return res.send('hello word')

})


app.listen(3000, () => {
    console.log('Api rodando')
})
