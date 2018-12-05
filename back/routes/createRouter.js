import express from 'express';
import mongoose from 'mongoose';
import _ from "lodash";

import Car from "../carModel"

const createRouter = express.Router();

const lowerCase = async function(car){
    for (var field in car){
    if(typeof(car[field]) == "string")
        car[field] = car[field].toLowerCase();
    }
    return car;
};

createRouter.post('/car', async (req, res) => {
    console.log(req.body);
    if (_.isEmpty(req.body)) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send({ reponse: "MESSAGE ERROR 400" });
    } else {
        let carFieldLowerCase = await lowerCase(req.body);
        Car.create(req.body, function(err, car){
            if(err) return handleError(err);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send(JSON.stringify(car));
        });
               
    }

});

export default createRouter;