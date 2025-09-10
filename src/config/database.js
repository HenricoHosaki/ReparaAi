const { Sequelize } = require ("sequelize");

/**
 * @class
 * @constructor
 * Defines the connection with MySQL
 */
class Database{
    constructor(){
        this.init();
    }

    init(){
        this.db = new Sequelize({
            database: "reparaai",
            host: "localhost",
            username: "root",
            dialect: "mysql",
            password: ""
        });
    }
}

module.exports = new Database();
