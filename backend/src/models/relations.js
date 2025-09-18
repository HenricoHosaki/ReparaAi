const User = require('./userModel');
const Ticket = require('./ticketModel');
const TicketTrack = require('./ticketTrackModel');

/**
 * Relate the tables User and Tickets (1:N)
 */
User.hasMany(Ticket, {foreignKey: 'idUser', as: 'tickets'})
Ticket.belongsTo(User, {foreignKey: 'idUser', as: 'user'})

Ticket.hasMany(TicketTrack, { foreignKey: "idTicket", as: 'tickets' });
TicketTrack.belongsTo(Ticket, { foreignKey: "idTicket", as: 'ticketstracks' });

module.exports = { User, Ticket, TicketTrack };