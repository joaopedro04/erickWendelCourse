const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

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
    async writeFile(data){
        await writeFileAsync(this.FILE_NAME, JSON.stringify(data));
        return true;
    }
    async register(hero){
        const data = await this.getData();
        const id = hero.id <= 2 ? hero.id : Date.now();
        const heroWithId = { id, ...hero };
        const finalData = [...data, heroWithId ];
        const result = await this.writeFile(finalData);
        return result;
    }
    async list(id){
        const data = await this.getData();
        const filterData = data.filter(item => (id ? (item.id === id) : true));
        return filterData;
    }
    async delete(id){
        if(!id){
           return  await this.writeFile([]);
        }
        const data = await this.getData();
        const i = data.findIndex(item => item.id === parseInt(id));
        if(i === -1){
            throw Error("The hero doesn't exists");
        }
        data.splice(i , 1);
        //console.log(data);
        return  await this.writeFile(data);
    }
}
module.exports = new Database();