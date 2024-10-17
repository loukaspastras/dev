// @ts-nocheck
import express from 'express';
import mongoose from 'mongoose';
import {Product} from './models/product.model.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello from node API')
});

app.get('/api/products', async (req, res) =>
{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.post('/api/products', async (req, res) =>
{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected!'))
.catch(() => console.log('Connection Failed')); 