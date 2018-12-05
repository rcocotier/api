import express from 'express';

import Car from "../carModel"

const modelRouter = express.Router({ mergeParams: true });

modelRouter
    .get('/', (req, res) => {
        Car.find({ model: req.params.model }, (err, cars) => {
            res.json(cars)
        });
    });

export default modelRouter;