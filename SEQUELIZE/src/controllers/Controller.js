class Controller{
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }
    async getAll(req,res){
        try{
            const listaDeTodos = await this.entidadeService.getTodosRegistros();
            return res.status(200).json(listaDeTodos);
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
    async getPorID(req,res){
        const id = req.params.id;
        try{
            const registroEncontrado = await this.entidadeService.getRegistroPorID(id);
            res.status(200).json(registroEncontrado);
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
    async criar(req,res){
        const novoRegistro = req.body;
        try{
            const novoRegistroCriado = await this.entidadeService.criarRegistro(novoRegistro);
            res.status(200).json({
                message: 'Registro criado com sucesso',
                registro: novoRegistroCriado
            });
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
    async atualizar(req,res){
        const id = req.params.id;
        const dadosNovos = req.body;
        try{
            const foiAtualizado = await this.entidadeService.atualizarRegistro(dadosNovos, Number(id));
            if(foiAtualizado){
                res.status(200).json({message: 'Registro atualizado com sucesso'});
            }
        }catch(erro){
            res.status(500).json({message: erro.message});
        }
    }
    async deletar(req,res){
        const id = req.params.id;
        try{
            await this.entidadeService.deletarRegistro(Number(id));
            res.status(200).jason({message: 'Registro deletado com sucesso'});
        }catch(erro){
        res.status(500).json({message: erro.message});
        }
    }
}

module.exports = Controller;
