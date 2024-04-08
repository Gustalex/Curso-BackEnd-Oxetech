const express = require('express');

const pessoas = require('./pessoaRoutes.js');

const routes = (app)=>{
    app.use(express.json(),pessoas);
}

module.exports = routes;