const ICrud = require('./interfaces/ICrud');
class Postgres extends ICrud {
    constructor() {
        super();
    }

    create(item) {
        console.log('Postgres: create => success!!!');
    }
}

module.exports = Postgres;