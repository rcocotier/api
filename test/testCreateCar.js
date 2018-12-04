import assert from "assert";
import request from "supertest";
import {app} from "../server";

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000


describe('POST car in database', function() {
    let data = {
        "_id": "1",
        "brand": "bmw",
        "model": "x1",
        "price": "10000",
        "km": "20000",
        "location": "dummy",
        "color": "dummy",
        "clim": "true",
    }
    it('respond with 201 created', function(done) {
        request(app)
            .post('/api/create/car')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
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