const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Routes
const register = require('./api/reg');
app.use('/api/r', register);

const login = require('./api/login');
app.use('/api/', login);

const send = require('./api/send');
app.use('/api/s', send);

const dashboard = require('./api/dashboard');
app.use('/api/d', dashboard);

const BERGUtoIDR = require('./api/convertBERGU');
app.use('/api/bergu', BERGUtoIDR);

const IDRtoBERGU = require('./api/convertIDR');
app.use('/api/idr', IDRtoBERGU);



// // // ejs user Find by address
// app.use('/:address', (req, res) => {
//     const { address } = req.params;
//     res.render('pages/users', { address });
// });

// // ejs dashboard
// app.use((req, res) => {
//     res.render('pages/index');
// });

const port = 8888;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
