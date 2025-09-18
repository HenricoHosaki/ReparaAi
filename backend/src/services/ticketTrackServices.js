const { where } = require ("sequelize");
const Track = require ('../models/ticketTrackModel');

class TicketTrack{

    async findAll(){
        return await Track.findAll();
    }

    async createTrack(trackData){
        return await Track.create(trackData)
    }

    async findTrackByPk(idTicketTrack){
        return await Track.findByPk(idTicketTrack);
    }
            
    async updateTrack(idTicketTrack, trackData) {
        return await Track.update(trackData, { where: { idTicketTrack } });
    }
    
     async deleteTrack(idTicketTrack) {
        return await Track.destroy({ where: { idTicketTrack } });
    }

    async getTracksByTicket(){
        const { idTicket } = req.params;
        const tracks = await Track.findAll({ where: { idTicket: idTicket } });
        res.json(tracks);
    }
}

module.exports = TicketTrack