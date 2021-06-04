//CONFIG VARS
const express = require('express')
const server = express()

//ROTAS
server.get('/', function (req, res) {
    res.sendFile(__dirname+'/views/index.html')
})

server.get("/contacos", function (req, res) {
    res.sendFile(__dirname+'/views/contact.html')
})

server.get("/sobre", function (req, res) {
    res.sendFile(__dirname+'/views/sobre.html')
})

server.get("/tarefas", function (req, res) {
    res.sendFile(__dirname+'/views/tarefas.html')
})


//ABRIR SERVIDOR
server.listen(3031, function(){
    console.log("Servidor rodando na Url http://localhost:3031. Aceda no Navegador!")
});


