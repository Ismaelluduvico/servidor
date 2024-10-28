<<<<<<< HEAD
const alternativaService = require('../service/AlternativaService')

//Adicionar uma altenativa
exports.postAlternativa = async (req, res, next) => {
    const {resposta, certoerrado, questaoid} = req.body
    try {
        await alternativaService.addAlternativa(resposta, certoerrado, questaoid)
        res.status(201).send(`Requisição recebida com sucesso!`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};

//Buscar todas as alternativas
exports.getAlternativas = async(req, res, next) => {
    const {questaoid} = req.params;
    const alternativas = await alternativaService.getAlternativas(questaoid)
    res.json(alternativas)
};

//Atuzlizar uma altenativa
exports.putAlternativa = async(req, res, next) => {
    try {
        const id = req.params.id;
        const dados = req.body;
        await alternativaService.updateAlternativa({...dados, id: id})
        res.status(201).send(`Alterado com sucesso!`);

    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
=======
const alternativaService = require('../service/AlternativaService')

//Adicionar uma altenativa
exports.postAlternativa = async (req, res, next) => {
    const {resposta, certoerrado, questaoid} = req.body
    try {
        await alternativaService.addAlternativa(resposta, certoerrado, questaoid)
        res.status(201).send(`Requisição recebida com sucesso!`);
    } catch (error){
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
};

//Buscar todas as alternativas
exports.getAlternativas = async(req, res, next) => {
    const {questaoid} = req.params;
    const alternativas = await alternativaService.getAlternativas(questaoid)
    res.json(alternativas)
};

//Atuzlizar uma altenativa
exports.putAlternativa = async(req, res, next) => {
    try {
        const id = req.params.id;
        const dados = req.body;
        await alternativaService.updateAlternativa({...dados, id: id})
        res.status(201).send(`Alterado com sucesso!`);

    } catch (error) {
        console.log(error)
        res.status(500).send("ocorreu um erro")
    }
>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
};