const Commander = require('commander');
const Database = require('./database');
const Hero = require('./hero');

async function main(params){
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Hero Name")
        .option('-p, --poder [value]', "Hero Power")
        .option('-l, --list', "Lisr Hero")
        .option('-c, --cad', "Insert Hero")
        .parse(process.argv);

    const hero = new Hero(Commander);
    try {
        if(Commander.cad) {
            const result = await Database.register(hero)
            console.log(hero);
            if(!result){
                console.error('Error', result);
                return
            }
            console.log('sucesso')

        }
        if(Commander.lsit) {
            const result = await Database.getData()
            console.log('Resultado', result)
            return;

        }
        
    } catch (error) {
        console.error('-----------------------------------');
        console.error(error);
        console.error('-----------------------------------');

    }
}

main();