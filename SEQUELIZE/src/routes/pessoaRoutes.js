const{Router}= require('express');

const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();

const routes = Router();

routes.get('/pessoas', (req,res) => pessoaController.getAll(req,res))
routes.get('/pesoas/:id', (req,res) => pessoaController.getPorID(req,res))
routes.post('/pessoa', (req,res) => pessoaController.criar(req,res))
routes.put('/pessoa/:id', (req,res) => pessoaController.atualizar(req,res))
routes.delete('/pessoa/:id', (req,res) => pessoaController.deletar(req,res))

module.exports = routes;