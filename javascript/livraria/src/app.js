import express from "express";
import connect from "./config/dbConnect.js";
import livroModel from "./models/livroSchema.js";
import routes from "./routes/index.js";

const app = express();
const conexao = await connect();
routes(app);
app.use(express.json())


conexao.on("error",(erro) =>{
    console.log("Erro de conexao, okei?:",erro)
})

conexao.once("open",() =>{
    console.log("Conexao okei")
})

app.get("/livros", async (req,res) =>{
    const todosLivros = await livroModel.find({})
    res.status(200).json
})

const livros = [
    {
        id: 1,
        titulo: "Senhor do Aneis"
    },{
        id:2,
        titulo: "O Cortiço"
    },{
        id:3,
        titulo: "Dom Casmurro"
    },{
        id:4,
        titulo: "O Alienista"
    },{
        id:5,
        titulo: "O Primo Basílio"
    
    }
]

const autores = [
    {
        id:1,
        nome: "J.R.R. Tolkien"
    },{
        id:2,
        nome: "Aluísio Azevedo"
    },{
        id:3,
        nome: "Machado de Assis"
    },{
        id:4,
        nome: "Machado de Assis"
    },{
        id:5,
        nome: "Eça de Queirós"
    }
]
export default app;