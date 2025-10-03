const User = require('./userModel');
const Ticket = require('./ticketModel');
const TicketTrack = require('./ticketTrackModel');

/**
 * Relate the tables User and Tickets (1:N)
 * A user can have many tickets, but a ticket belongs to one user only
 *
 * Relate the tables Tickets and TicketsTracks (1:N)
 * A ticket can have many tracks, but a track belongs to one ticket only
 */
User.hasMany(Ticket, {foreignKey: 'idUser', as: 'tickets'})
Ticket.belongsTo(User, {foreignKey: 'idUser', as: 'user'})

Ticket.hasMany(TicketTrack, { foreignKey: "idTicket", as: 'tickets' });
TicketTrack.belongsTo(Ticket, { foreignKey: "idTicket", as: 'ticketstracks' });

module.exports = { User, Ticket, TicketTrack };