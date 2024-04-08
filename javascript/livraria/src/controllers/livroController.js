import livroModel from "...models/livroSchema.js"

class livroController{
    static async listarLivos(req,res){
        const listalLivros = await livroModel.find({});
        res.status(200).json(listalLivros)
    }
    static async listarPorId(req,res){
        const id = req.params.id;
        const livroEncontrado = await 
    }
}




export default livroController

