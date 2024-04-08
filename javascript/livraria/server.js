/*import http from "http"

const rotas = {
    "/":"Curso de Node.JS by OxeTech",
    "/livros":"20k leguas submarinas",
    "/autores":"Julio Verne"
}

const server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end(rotas[req.url])
});

server.listen(3000,() =>{
    console.log("Servidor rodando em http://localhost:3000")
});*/
import express from "express"

import app from "./src/app.js"

app.listen(3000,() =>{
    console.log("Servido em http://localhost:3000")
})