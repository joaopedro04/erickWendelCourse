class NotImplementedException extends Error {
    constructor() {
        super('Not Implemented Exception');
    }
}

class ICrud {
    create(item) {
        throw new NotImplementedException();
    }

    read(query){
        throw new NotImplementedException();
    }

    update(id){
        throw new NotImplementedException();
    }

    delete(id){
        throw new NotImplementedException();
    }
}

class MongoDB extends ICrud {
    constructor() {
        super();
    }

    create(item) {
        console.log('MongoDB: create => success!!!');
    }
}

class Postgres extends ICrud {
    constructor() {
        super();
    }

    create(item) {
        console.log('Postgres: create => success!!!');
    }
}

class ContextStrategy {
    constructor(strategy){
        this._databse = strategy;
    }

    create(item) {
        return this._databse.create(item);
    }

    read(item) {
        return this._databse.read(item);
    }

    update(item) {
        return this._databse.update(id, item);
    }

    delete(item) {
        return this._databse.delete(item);
    }
}

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