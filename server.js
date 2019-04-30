import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import Coffee from "./api/models/coffeeModel";
import CoffeeRoute from "./api/routes/coffeeRoute";

dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://" + process.env.DATABASE_USER + ":" + process.env.DATABASE_PASSWORD + process.env.DATABASE_HOST, { useNewUrlParser: true, });

app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

CoffeeRoute(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + " not found", });
});

app.listen(port);
