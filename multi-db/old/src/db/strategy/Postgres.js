const ICrud = require('./interfaces/ICrud');
const Sequelize = require('sequelize');
main();
class Postgres extends ICrud {
    constructor() {
        super();
        this._driver = null;
        this._heroes = null;
    }

    async isConnected() {
        try {
            await this._driver.authentucate();
            return true;
        } catch (error) {
            console.log('Erro');
            console.log(error)
        }
    }

    async connect() {
        this._driver = new Sequelize(
            'heroes',
            'root',
            'root',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorAliases: false
            }
        )
        await this.defineModel();
    }
    
    defineModel() {
        this._heroes = this._driver.define('heroes', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true,
            },
    
            nome: {
                type: Sequelize.STRING,
                required: true
            },
    
            poder: {
                type: Sequelize.STRING,
                required: true
            }
        }, {
            tableName: 'TB_HEROES',
            freezeTableName: false,
            timestamps: false
        });
    
        await this._heroes.sync();
    }


    create(item) {
        return this._heroes.create(item);
    }
}

module.exports = Postgres;