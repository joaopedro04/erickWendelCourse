const ICrud = require('./interfaces/ICrud');
class MongoDB extends ICrud {
    constructor() {
        super();
    }

    create(item) {
        console.log('MongoDB: create => success!!!');
    }
}

module.exports = MongoDB;