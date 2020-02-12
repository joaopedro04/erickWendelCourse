const {
    readFile
} = require('fs');
const {
    promisify
} = require('util');

const readFileAsync = promisify(readFile);

class Database {
    constructor(){
        this.FILE_NAME = 'heroes.json';
    }
    async getData(){
        //another method to get data in json:
        //const file = require('./heroes.json');
        const file = await readFileAsync(this.FILE_NAME, 'utf8');
        return JSON.parse(file.toString());
    }

    writeFile(){

    }

    async list(id){
        const data = await this.getData();
        const filterData = data.filter(item => (id ? (item.id === id) : true));
        return filterData;
    }

}

module.exports = new Database();