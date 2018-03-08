const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/user');
// const user = require('./models/user');
require('./services/passport');
// const passportConfig = require('./services/passport');

const PORT = process.env.PORT || 3000;

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);

app.listen(PORT, () => {
    console.log('App running on port: 3000');
});