const mongoose = require('mongoose');
// const Schema = mongoose.Schema; same as line 3
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('user', userSchema);