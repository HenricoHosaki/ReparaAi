const express = require('express');
const database = require('./config/database');
require('dotenv').config();
/**
 * app.js requires the routes for Users, Tickets and Tracks
 */
const userRouter = require('./routes/userRoute');
const ticketsRouter = require('./routes/ticketRoute');
const ticketTrack = require('./routes/ticketTrackRoute')

/**
 * @requires ./models/relations
 * @requires ./models/userModel
 * @requires ./models/ticketModel
 * @requires ./models/ticketTrackModel
 */
const { User, Ticket, TicketTrack } = require('./models/relations'); // importa models + relations

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(ticketsRouter);
app.use(ticketTrack)

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

/**
 * Database connection
 * @async
 */
database.db
    .sync({ force: false }) // alter: true if we need to reset the DB structure
    .then(() => {
        app.listen(port, () => {
            console.log('Server running in' + port);
        });
    })
    .catch((e) => {
        console.error(`Não foi possível conectar com o banco: ${e}`);
    });