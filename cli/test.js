const {
    deepEqual,
    ok
} = require('assert');

const DEFAULT_ITEM_REGISTER = {
    id: 1,
    nome: 'Flash',
    poder: 'Super speed'
}

const database = require('./database');

describe('switch de manipulação de herois', () => {

//     it('deve cadastrar um heroi, usando arquivos', async () => {
//         const expected = DEFAULT_ITEM_REGISTER;
//         ok(null, expected);
//     });

    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_REGISTER;
        const searchResult = await database.list(expected.id);
        const result = searchResult[0];
        deepEqual(result, expected)
    });
});