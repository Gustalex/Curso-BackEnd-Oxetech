import mongoose from "mongoose";
import {int32} from "mongodb";

const livroSchema = new mongoose.Schema({
    id : { type: mongoose.Schema.Types.ObjectId}.type,
    titulo : {type : String, required: true},
    nPaginas: {type: int32},
    preco : {type: Number},
}, {versionKey: false})

const livroModel = mongoose.model("Livros", livroSchema)
export default livroModel