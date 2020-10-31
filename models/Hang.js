const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const HangSchema = new Schema({
    hangTitle: {
        type: String,
        required: true
    },
    hangSize: {
        type: Number,
        required: true
    },
    // hangDate: {
    //     type: Date,
    //     required: true
    // },
    hangType: {
        type: String,
        required: true
    },
    hangSkill: {
        type: String,
        required: true
    },

    hangDetails: {
        type: String,
        required: true
    },
    hangLocation: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }

});



module.exports = Hang = mongoose.model("hangs", HangSchema);