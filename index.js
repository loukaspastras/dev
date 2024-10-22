// @ts-nocheck
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes.js'

dotenv.config();

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.use('/api', router);


/* app.get('/', (req, res) => {
    res.send('Hello from node API');
});

app.get('/api/products', async (req, res) =>
{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/product/:id', async (req, res) =>
{
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/product/:id', async (req, res) =>
{
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if (!product){
            return res.status(404).json({message : "Product not found"});
        }
        
        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.delete('/api/product/:id', async (req, res) =>
{
    try{
        const { id } = req.params;

        const product = Product.findByIdAndDelete(id);
        
        if (!product){
            return res.status(404).json({message : "Product not found"});
        } 

        res.status(200).json({message : "Product Deleted Succesfully"});
    } catch (error){
        res.status(500).json({message: error.message});
    }
}); */


// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Connection Failed')); 