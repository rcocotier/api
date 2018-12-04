import express from 'express';

const modelRouter = express.Router({mergeParams: true});

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

modelRouter
	.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(getCarsOfBrandByModel(req));

    })

var getCarsOfBrandByModel= function(req) {
    var listCarsOfBrandForAModel = [];
    var i = 0;

    for (var carId in db.cars) {
        var dbCarsModel = db.cars[carId].model.toLowerCase();
        var urlCarsModel = req.params.model.toLowerCase();

        if (dbCarsModel == urlCarsModel) {
            listCarsOfBrandForAModel[i] = db.cars[carId];
            i++;
        }
    }
    return listCarsOfBrandForAModel;
};

export default modelRouter;
