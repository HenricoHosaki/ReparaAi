const User = require('./userModel');
const Ticket = require('./ticketModel');

/**
 * Relate the tables User and Tickets (1:N)
 */
User.hasMany(Ticket, {foreignKey: 'idUser', as: 'tickets'})
Ticket.belongsTo(User, {foreignKey: 'idUser', as: 'user'})

module.exports = { User, Ticket };