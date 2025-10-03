const express = require ('express');
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const TicketController = require ('../controllers/ticketController')
const TicketControll = new TicketController();

/**
 * Ticket Routes
 * All routes are protected by the verifyToken middleware
 */
router.get("/tickets/" , verifyToken, TicketControll.findAllTickets);
router.post("/tickets/" , verifyToken, TicketControll.createTicket);
router.get("/tickets/:idTicket" , verifyToken, TicketControll.findTicketByPk);
router.put("/tickets/:idTicket" , verifyToken, TicketControll.updateTicket);
router.delete("/tickets/:idTicket" , verifyToken, TicketControll.deleteTicket);

module.exports = router;