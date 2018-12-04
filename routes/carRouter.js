
import express from 'express';
import brandRouter from './brandRouter';

const db = {
    cars: [{
    		_id: 1,
            brand: "BMW",
            model: "X6",
            price: 40000,
            km: 50000,
            location: "Lyon",
            color: "white",
            clim: "auto",
        },
        {
    		_id: 1,
            brand: "BMW",
            model: "X3",
            price: 40000,
            km: 50000,
            location: "Lyon",
            color: "white",
            clim: "auto",
        },
        {
    		_id: 1,
            brand: "BMW",
            model: "X1",
            price: 5000,
            km: 50000,
            location: "Paris",
            color: "white",
            clim: "auto",
        },
        {
        	_id: 2,
            brand: "MERCO",
            model: "GLE",
            price: 70000,
            km: 50000,
            location: "Lyon",
            color: "black",
            clim: "auto",
        }
    ]
}

const carRouter = express.Router();

carRouter
	.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(db.cars));
})

carRouter.use('/:brand', brandRouter);

export default carRouter;

