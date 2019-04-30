"use strict";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CoffeeSchema = new Schema({
    name: { type: String, required: true, index: { unique: true, }, }, 
    intensity: { type: Number, required: true, },
    cupSize: { type: Number, required: true, },
    aromaticProfile: { type: String, required: true, },
    aromaticNotes: { type: String, required: true, },
    bitterness: { type: Number, required: true, },
    acidity: { type: Number, required: true, },
    body: { type: Number, required: true, },
    roasting: { type: Number, required: true, },
});

module.exports = mongoose.model("Coffees", CoffeeSchema);
