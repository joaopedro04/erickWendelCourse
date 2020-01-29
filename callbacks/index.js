console.log('iniciando com node')

function createUser(callback){
    setTimeout(() => {
        return callback(null, {
            id: '0',
            nome: 'Joao Pedro Souza da Silva',
            idade: 19,
            endereco: 'Rua Monte Castelo',
            celular: '(51) 99779-5535',
            sexo: 'Masculino'
        })
    },1000);  
}


createUser(function getUser(error, user) {
        if(error){
            console.log('Deu ruim', error);
        }else{
            console.log('user => ', user);
        }        
    }
);


createUser(function getAddress(error, user) {
        if(error){
            console.log('Deu ruim', error);
        }else{
            console.log('address => ', user.endereco);
        }        
    }
);


createUser(function getCellNumber(error, user) {
        if(error){
            console.log('Deu ruim', error);
        }else{
            console.log('cellnumber => ', user.celular);
        }        
    }
);