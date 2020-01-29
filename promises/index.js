console.log('iniciando com node')

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

const userPromise = createUser();
//to manipulate errors: .catch
//to manipulate success: .then
userPromise
    .then((success) => {
        console.log('userPromise =>',success);
    })
    .catch((error) => {
        console.error('error =>', error);
    });
