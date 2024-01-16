const mongoose = require('mongoose')
const dbConnectNoSQL = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('¡ERROR DE CONEXIÓN!', err);
    });

    db.once('open', () => {
        console.log('¡CONEXIÓN CORRECTA!');
    });
};
module.exports = dbConnectNoSQL
