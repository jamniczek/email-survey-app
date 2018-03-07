const express = require('express');
const mongoose = require('mongoose');
const passportConfig = require('./services/passport');
//require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
const user = require('./models/user');
// require('./models/user');
const PORT = process.env.PORT || 3000;

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);

app.listen(PORT, () => {
    console.log('App running on port: 3000');
});