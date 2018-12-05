import express from 'express';

import brandRouter from './brandRouter';
import Car from "../carModel"

const carRouter = express.Router();

carRouter
	.get('/', (req, res) => {
    Car.find({}, (err, cars) => {
            res.json(cars)
        });
});

carRouter.use('/:brand', brandRouter);

export default carRouter;

