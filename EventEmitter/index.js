const EventEmitter = require('events');
class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'userClick';
meuEmissor.on(nomeEvento, (click)=> {
    console.log('acao do usuario =>', click);
});

// meuEmissor.emit(nomeEvento, 'clicou na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'clicou em ok');

// let count = 0;
// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'clicou em ok; contador = ' + count++);
// }, 1000);


const stdin = process.openStdin();

function main(){
    return new Promise((resolve, reject)=>{
        stdin.addListener('data', (value) => {
            // console.log(`Voce digitou: ${value.toString().trim()}`);
            return resolve(value);
        });
    });
}
main()
    .then((result) => {
        console.log('resultado: ', result.toString().trim());
    })
// stdin.addListener('data', (value) => {
//     console.log(`Voce digitou: ${value.toString().trim()}`);
// });