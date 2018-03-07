const express = require('express');
const passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes')
const PORT = process.env.PORT || 3000;

const app = express();

authRoutes(app);

app.listen(PORT, () => {
    console.log('App running on port: 3000');
});