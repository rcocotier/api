import express from 'express';
import modelRouter from './modelRouter';

const brandRouter = express.Router({ mergeParams: true });

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

brandRouter
    .get('/', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(getCarsByBrand(req));

    })

var getCarsByBrand = function(req) {
    var listCarsForABrand = [];
    var i = 0;

    for (var carId in db.cars) {
        var dbCarsBrand = db.cars[carId].brand.toLowerCase();
        var urlCarsBrand = req.params.brand.toLowerCase();

        if (dbCarsBrand == urlCarsBrand) {
            listCarsForABrand[i] = db.cars[carId];
            i++;
        }
    }
    return listCarsForABrand;
};

brandRouter.use('/:model', modelRouter);

export default brandRouter;