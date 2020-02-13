const ICrud = require('./../interfaces/ICrud');
class ContextStrategy extends ICrud{
    constructor(strategy){
        super();
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

    isConnected() {
        return this._databse.isConnected();
    }
}

module.exports = ContextStrategy;