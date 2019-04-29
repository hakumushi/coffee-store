"use strict";

import mongoose from "mongoose";
const Coffee = mongoose.model("Coffees");

const CoffeeController = {
    listAllCoffees(req, res) {
        Coffee.find({}, (err, coffee) => {
            if (err) {
                res.status(400).send({ "error": err.message, });
            }
            res.json(coffee);
        });
    },

    createCoffee(req, res) {
        var newCoffee = new Coffee(req.body);
        newCoffee.save((err, coffee) => {
            if (err) {
                res.status(400).send({ "error": err.message, });
            }
            res.json(coffee);
        });
    },

    readCoffee(req, res) {
        Coffee.findById(req.params.coffeeId, (err, coffee) => {
            if (err) {
                res.status(404).send({ "error": err.message, });
            }
            res.json(coffee);
        });
    },

    updateCoffee(req, res) {
        let coffee = req.body;
        Coffee.findOneAndUpdate({ _id: req.params.coffeeId, }, coffee, { new: true, }, (err, coffee) => {
            if (err) {
                res.status(400).send({ "error": err.message, });
            }
            res.json(coffee);
        });
    },

    deleteCoffee(req, res) {
        Coffee.remove({ _id: req.params.coffeeId, }, (err) => {
            if (err) {
                res.status(400).send({ "error": err.message, });
            }
            res.json({ "message": "Coffee deleted successfully.", });
        });
    },

};

module.exports = {
    CoffeeController,
};
