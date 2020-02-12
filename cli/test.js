const { deepEqual, ok } = require('assert');
const DEFAULT_ITEM_REGISTER = {
    id: 1,
    nome: 'Flash',
    poder: 'Super speed'
};
const database = require('./database');

describe('switch de manipulação de herois', () => {
    before(async () => {
        await database.register(DEFAULT_ITEM_REGISTER);
    });

    it('1 - deve pesquisar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_REGISTER;
        const searchResult = await database.list(expected.id);
        //const result = searchResult[0];
        deepEqual(searchResult.shift(), expected);
    });

    it('2 - deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_REGISTER;
        const result = await  database.register(DEFAULT_ITEM_REGISTER);
        const [current] = await database.list(DEFAULT_ITEM_REGISTER.id);
        deepEqual(current, expected);
    });
});