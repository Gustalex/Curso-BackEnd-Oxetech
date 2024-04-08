const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({message:"API do oxetech com sequelize"})
});

module.exports = app;