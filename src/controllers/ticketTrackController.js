const TicketTrack = require('../services/ticketTrackServices');
const TicketTrackService = require('../services/ticketTrackServices');
const trackService = new TicketTrackService();

class TicketTrackController {

     /**
     *@async
     */
    async findAllTracks(req, res) {
        try {
            const tracks = await trackService.findAll();
            res.json(tracks);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * @async
     * @param { trackData } req.body
     */
    async createTrack(req, res) {
        try {
            const trackData = req.body;
            const newTrack = await trackService.createTrack(trackData);
            res.status(201).json(newTrack);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * @async
     * @param { idTicketTrack } req.params
     */
    async findTrackByPk(req, res) {
        try {
            const { idTicketTrack } = req.params;
            const track = await trackService.findTrackByPk(idTicketTrack);
            if (!track) return res.status(404).json({ error: 'Track not found' });
            res.json(track);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

     /**
     * @param { idTicketTrack } req.params
     * @param { trackData } req.body
     */
    async updateTrack(req, res) {
        try {
            const { idTicketTrack } = req.params;
            const trackData = req.body;
            await trackService.updateTrack(idTicketTrack, trackData);

            const updatedTrack = await trackService.findTrackByPk(idTicketTrack);
            res.json(updatedTrack);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

     /**
     * @async
     * @param { idTicketTrack } req.params
     */
    async deleteTrack(req, res) {
        try {
            const { idTicketTrack } = req.params;
            await trackService.deleteTrack(idTicketTrack);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * @async
     * @param { idTicket } req.params
     */
    async getTracksByTicket(req, res) {
        try {
            const { idTicket } = req.params;
            const tracks = await trackService.getTracksByTicket(idTicket);
            res.json(tracks);
        }catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = TicketTrackController;