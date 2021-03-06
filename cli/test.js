const { deepEqual, ok } = require('assert');
const DEFAULT_ITEM_REGISTER = {
    id: 1,
    nome: 'Flash',
    poder: 'Super speed'
};
const DEFAULT_ITEM_UPDATE = {
    id: 1,
    nome: 'Batman',
    poder: 'he is fuck'
};
const database = require('./database');

describe('switch de manipulação de herois', () => {
    before(async () => {
        await database.register(DEFAULT_ITEM_REGISTER);
        await database.register(DEFAULT_ITEM_UPDATE);
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

    it('3 - deve remover um heroi, por id', async () => {
        const expected = true;
        const result = await  database.delete(DEFAULT_ITEM_REGISTER.id);
        deepEqual(result, expected);
    });

    it('4 - deve atualizar um heroi, por id', async () => {
        const expected = {...DEFAULT_ITEM_UPDATE, nome: 'Batman', poder: 'Money'};
        const newExpected = {nome: 'Batman', poder: 'Money'};
        await database.update(DEFAULT_ITEM_UPDATE.id, newExpected);
        const [result] = await database.list(DEFAULT_ITEM_UPDATE.id);
        deepEqual(result, expected);
    });
});
