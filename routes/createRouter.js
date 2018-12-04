import express from 'express';
import mongoose from 'mongoose';
import _ from "lodash";

import { db } from "../server";
import Car from "../carModel"

const createRouter = express.Router();

createRouter.post('/car', (req, res) => {
    console.log(req.body);
    if (_.isEmpty(req.body)) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send({ reponse: "MESSAGE ERROR 400" });
    } else {
        let car = new Car(req.body);
        car.save();
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(JSON.stringify(car));
    }

})

export default createRouter;