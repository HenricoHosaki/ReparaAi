const express = require('express');
const database = require('./config/database');

/**
 * app.js requires the routes for Users, Tickets and Tracks
 */
const userRouter = require('./routes/userRoute');
const ticketsRouter = require('./routes/ticketRoute');
const ticketTrack = require('./routes/ticketTrackRoute')

/**
 * app.js requires the relations of Users, Tickets and Tracks
 */
const { User, Ticket, TicketTrack } = require('./models/relations'); // importa models + relations

const app = express();
const port = 3000;

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
    .sync({ force: false }) // alter: true se quiser atualizar tabelas sem perder dados
    .then(() => {
        app.listen(port, () => {
            console.log('Server running in ' + port);
        });
    })
    .catch((e) => {
        console.error(`Não foi possível conectar com o banco: ${e}`);
    });