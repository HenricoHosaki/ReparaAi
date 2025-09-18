const { where } = require("sequelize");
const Ticket = require("../models/ticketModel");
const Track = require("./ticketTrackServices");
const track = new Track();

/**
 * @class
 * @method
 * @async
 */
class TicketService{

    async findAllTickets(){
        return await Ticket.findAll()
    }

    async findTicketByPk(idTicket){
        return await Ticket.findByPk(idTicket)
    }

    async createTicket(ticketData){
        const ticket = await Ticket.create(ticketData)

        await track.createTrack({
            idTicket: ticket.idTicket
        })

        return ticket;
    }

    async deleteTicket(idTicket) {
    return await Ticket.destroy({where: { idTicket: idTicket }});
    }
    
    async updateTicket(idTicket, ticketData){
        return await Ticket.update(ticketData, {where:{idTicket}})
    }
}

module.exports = TicketService