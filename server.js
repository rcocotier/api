import express from 'express';
import mongoose from 'mongoose';

import carRouter from './routes/carRouter';
import createRouter from './routes/createRouter';


const app = express();
const port = process.env.PORT || 5656;
const db = mongoose.connect('mongodb://coco:coco@localhost:27017/absoluteperformance');

app.use(express.json());

app.use('/api/car', carRouter);

app.use('/api/create', createRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})


export { app,db };


