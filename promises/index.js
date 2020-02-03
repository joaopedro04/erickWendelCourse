console.log('starting nodejs application')

function createUser() {
    //resolve === sucess
    //reject === error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject(new Error('deu ruim'));
            return resolve({
                id: 0,
                nome: 'Joao Pedro Souza da Silva',
                idade: 19,
                endereco: 'Rua Monte Castelo',
                celular: '(51) 99779-5535',
                sexo: 'Masculino'
            })
        },1000);

    });     
}

//------------------------pt 1-------------------------
// const userPromise = createUser();
// //to manipulate errors: .catch
// //to manipulate success: .then
// userPromise
//     .then((success) => {
//         console.log('userPromise =>',success);
//     })
//     .catch((error) => {
//         console.error('error =>', error);
//     });
//-----------------------------------------------------

//------------------------pt 2-------------------------
// main()
// async function main(){
//     try {
//         console.time('tempo-promise');
//         const usuario = await createUser();
//         console.log(usuario);
//         console.timeEnd('tempo-promise');
//     } catch (error) {
//         console.error(error);
//     }
// }
//----------------------------------------------------