const ContextStrategy = require('./db/strategy/base/contextStrategy');
const MongoDB = require('./db/strategy/MongoDB');
const Postgres = require('./db/strategy/Postgres');

const contexteMongoDB = new ContextStrategy(new MongoDB);
const contextePostgres = new ContextStrategy(new Postgres);

console.log('                             ');
console.log(':::::::::::::::::::::::::::::');
console.log('::::::::::: tests :::::::::::');
console.log(':::::::::::::::::::::::::::::');
console.log('                             ');
contexteMongoDB.create();
contextePostgres.create();
console.log('                             ');