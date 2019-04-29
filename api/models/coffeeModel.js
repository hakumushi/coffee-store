"use strict";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CoffeeSchema = new Schema({
    nome: String,
    usuario: { type: String, required: true, index: { unique: true, }, },
    senha: { type: String, required: true, },
});

CoffeeSchema.methods.toJSON = () => {
    return this.toObject();
};

module.exports = mongoose.model("Coffees", CoffeeSchema);
