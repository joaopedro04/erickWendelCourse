const service = require('./service');
Array.prototype.meuMap = function (callback){
    const newArrayMapping = [];
    for(let i = 0; i <= this.length - 1; i++){
        const resultado = callback(this[i], i);
        newArrayMapping.push(resultado);
    }
    return newArrayMapping;
}

async function main(){
    try {
        const results = await service.obterPessoas('a');
        //const names = [];
        // results.results.forEach((item) => {
        //     names.push(item.name);
        // });
        // const names = results.results.map((pessoa) => {
        //     return pessoa.name
        // });
        // const names = results.results.map((pessoa) => pessoa.name);
        const names = results.results.meuMap(function (pessoa, i){
            return `[${i}]${pessoa.name}`;
        });
        console.log('names => \r\n',names);

    } catch (error) {
        console.error('erro', error);
    }
}

main();