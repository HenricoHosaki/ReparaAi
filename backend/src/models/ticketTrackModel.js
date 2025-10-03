const database = require("../config/database");

/**
 * @class
 * @constructor
 */
class TicketTrack {
    constructor() {
        this.models = database.db.define("TicketsTracks", {
            idTicketTrack:{
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idTicket: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,

                references:{
                    model: 'Tickets',
                    key: 'idTicket'
                }
            },
            date: {
                type: database.db.Sequelize.DATE,
                allowNull: false,
                defaultValue: database.db.Sequelize.NOW
            },
            status: {
                type: database.db.Sequelize.ENUM("Aberto", "Em andamento", "Resolvido", "Fechado"),
                defaultValue: "Aberto",
                allowNull: false
            }
        });
    }
}

module.exports = new TicketTrack().models;
