const Services = require('./Service.js');

class PessoaServices extends Services{
    constructor(){
        super('Pessoa');
    }
}

module.exports = PessoaServices;