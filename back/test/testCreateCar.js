import assert from "assert";
import request from "supertest";
import { app } from "../server";

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000


describe('POST car in database', function() {
    let data = [{
            "_id": "2",
            "brand": "Bmw",
            "model": "x6",
            "price": "10000",
            "km": "20000",
            "location": "Lyon",
            "color": "White",
            "clim": "true",
        }, {
            "_id": "3",
            "brand": "MerCerdes",
            "model": "GLE",
            "price": "10000",
            "km": "20000",
            "location": "Paris",
            "color": "Black",
            "clim": "true",
        },
        {
            "_id": "4",
            "brand": "mercerdes",
            "model": "CLA",
            "price": "10000",
            "km": "20000",
            "location": "Paris",
            "color": "Black",
            "clim": "true",
        },
        {
            "_id": "5",
            "brand": "bmw",
            "model": "serie1",
            "price": "10000",
            "km": "20000",
            "location": "Paris",
            "color": "Black",
            "clim": "true",
        }
    ]

    data.forEach(function(entry){
         it('respond with 201 created', function(done) {
            request(app)
                .post('/api/create/car')
                .send(entry)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201, done)
            });
        });

    it('respond with 400 created', function(done) {
        request(app)
            .post('/api/create/car')
            .send()
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});