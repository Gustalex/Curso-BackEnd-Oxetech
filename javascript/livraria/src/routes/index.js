import express from 'express';
import livros from "./livroRoutes.js";

let a = 1;


const routes = (app) =>{
    app.route("/").get((req,res) =>{
        res.send("ABLUEBLUEBLUE")
    })
        app.use(express.json(),livros)
}
export default routes