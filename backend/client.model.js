const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Client = new Schema({
    client_username: {
        type: String
    },
    client_password: {
        type: String
    },
    client_industry: {
        type: String
    },
    client_website: {
        type: String
    },
    client_business: {
        type: String
    }
});

module.exports = mongoose.model('NewClient', Client);