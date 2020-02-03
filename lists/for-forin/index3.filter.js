const { obterPessoas } = require('./service');

/*

const item = {
    nome: "Joao Pedro",
    idade: 19
}

const { nome } = item;
console.log(item);

*/

async function main(){
    try {
        const {
            results
        } = await obterPessoas('a');
        
        const larsFamily = results.filter((item) => {
            // por padrao precisa retornar um booleano
            // para informar se deve manter ou remover da lista
            // false = remove; true = add;
            // não encontrou: -1;
            // encontrou: [i];
            const result = item.name.toLowerCase().indexOf('lars') !== -1;
            return result;
        });

        const names = larsFamily.map((pessoa) => pessoa.name);
        console.log('lista da familia => ', names);

    } catch (error) {
        console.log('erro', error);
    }
}


main();