const service = require('./service');

async function main(){
    try {
        const result = await service.obterPessoas('a');
        const names = [];
        console.time('time-to-execute-general');
        // for
        console.time('for')
        for(let i = 0; i < result.results.length; i++){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('for');

        // for in
        console.time('for-in');
        for(let i in result.results){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('for-in');

        // for of
        console.time('for-of');
        for(pessoa of result.results){
            names.push(pessoa.name);
        }
        console.timeEnd('for-of');

        console.log('names => ', names);
        console.timeEnd('time-to-execute-general');
    } catch (error) {
        console.error('erro interno!!!', error);
    }
    
}

main();