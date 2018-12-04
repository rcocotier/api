import express from 'express';
import carRouter from './routes/carRouter';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 5656;

app.use('/api/car', carRouter);

//app.use('/api/create', createRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

app.get('/', function(req, res) {
    res.send('Hello World!')
})




