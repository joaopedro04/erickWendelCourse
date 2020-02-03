const { obterPessoas } = require('./service');

async function main(){
    try {
        const {
            results
        } = await obterPessoas('a');
        
        const pesos = results.map(item => parseInt(item.height));
        //[25.5, 45.5, 30] <- demo
        console.log('pesos', pesos)
        const total = pesos.reduce((anterior, proximo) =>{
            return anterior + proximo;
        });
        console.log('peso total => ',total);

    } catch (error) {
        console.log('erro', error);
    }
}


main();