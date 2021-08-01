const handdlerConfig = require('../Utils/HanddlerConfigs');
const CallJavaCommand = require('../Utils/CallJavaCommand');

var paths = {
    conteudosPath:'../configs/conteudo.txt',
    generosPath:'../configs/genero.txt',
    maxPagesPath:'../configs/maxPage.txt',
    pesoGeneroPath:'../configs/pesoGenero.txt',
    pesoConteudoPath:'../configs/pesoConteudo.txt',
    pesoUrlPath:'../configs/pesoUrl.txt',
    pesoGeneroPorConteudoPath:'../configs/pesoGeneroPorConteudo.txt',
    expansaoPath:'../configs/expansao.txt',
    heuristicaPath:'../configs/heuristica.txt',
}

class SettingsController {

    store(request, response){
        console.log(request.body.conteudos)
        handdlerConfig.save(paths.conteudosPath, request.body.conteudos)
        return response.json({message: "deu certo"});
    }

    list (request, response){
        const resultPath = '../configs/saida.json';
        const results = handdlerConfig.load(resultPath);
        return response.json(results);
    }
}

module.exports = new SettingsController();