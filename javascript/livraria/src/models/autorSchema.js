import mongoose from "mongoose";
import {int32} from "mongodb";

const autorSchema = new mongoose.Schema({
    id : { type: mongoose.Schema.Types.ObjectId}.type,
    nome:{type: String, required: true},
    nacionalidade:{type: String, required: true},
    anoNascimento:{type: int32}
},{versionKey: false})

const autorModel = mongoose.model("Autores",autorSchema)
export default autorModel

