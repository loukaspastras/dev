import Product from '../models/product.model.js'

const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = new Product(product)
        await newProduct.save()
        return res.status(201).json({
            message: 'product created',
            success: true
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

const getProduct = async (req, res) => {
    /**
     * api to get product by id
     */

    try {

        const id = req.body.id;
        const result = await Product.findById(id);
        return res.status(200).json({
            message: 'product fetch successful',
            success: true,
            data: result
        });

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
}

const deleteProduct = async (req, res) => {
    /**
     * api to delete product by id
     */

    try {
        const id = req.body.id;
        const found = await Product.findByIdAndDelete(id);
        if (found) {
            return res.status(200).json({
                message: `product ${id} deleted successfully`,
                success: true,
            });
        } else {
            return res.status(200).json({
                message: `product ${id} already deleted or never created`,
                success: true
            });
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
}

const updateProduct = async (req, res) => {
    /**
     * update Product by Id
     */
    try {

        const product = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            product.id,
            product,
            { new: true }
        );
        if (updatedProduct) {
            return res.status(200).json({
                message: 'Product Updated Successfully',
                success: true,
                data: updatedProduct
            });
        } else {
            return res.status(500).json({
                message: 'An error has occurred',
                success: false
            });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
}


export default {
    addProduct,
    getProduct,
    deleteProduct,
    updateProduct
}