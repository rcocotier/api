import express from 'express';

import modelRouter from './modelRouter';
import Car from "../carModel"

const brandRouter = express.Router({ mergeParams: true });

brandRouter
    .get('/', (req, res) => {
         Car.find({brand: req.params.brand}, (err, cars) => {
            res.json(cars)
        });
    });

brandRouter.use('/:model', modelRouter);

export default brandRouter;