const express = require('express');
const router = express.Router();
const TicketTrackController = require('../controllers/ticketTrackController');
const Track = new TicketTrackController();
/**
 * Track routes
 */
router.get('/track/', Track.findAllTracks);
router.get('/track/:idTicketTrack', Track.findTrackByPk);
router.post('/track/', Track.createTrack);
router.put('/track/:idTicketTrack', Track.updateTrack);
router.delete('/track/:idTicketTrack', Track.deleteTrack);
router.get('/track/ticket/:ticketId', Track.getTracksByTicket);

module.exports = router;