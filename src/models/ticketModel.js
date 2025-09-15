const database = require("../config/database");

/**
 * @class
 * @constructor
 */
class UserTicket {
    constructor() {
        this.models = database.db.define("Tickets", {
            idTicket: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            header: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: database.db.Sequelize.TEXT,
                allowNull: false
            },
            idUser: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'idUser'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            date: {
                type: database.db.Sequelize.DATE,
                defaultValue: database.db.Sequelize.NOW
            },
            localization: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        });
    }
}

module.exports = new UserTicket().models;
