import { addProductService, getProductByIdService, deleteProductService, updateProductService, listProductsService } from "../service/productService.js";

const addProduct = async(req, res) => {
    try{
        if(!req.body) {
            return res.status(400).json({ message: 'Bad Request: Missing request body' });
        }

        const productData = req.body;
        console.log('Received product data:', productData); // Debug log to check the received data
        const result = await addProductService(productData);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while adding product' });
    }
};

const listProducts = async (req, res) => {
    try{
        const result = await listProducts();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while listing products' });
    }
};

const getProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await getProductById(id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while fetching product' });
    }
};


const updateProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const productData = req.body;
        const result = await updateProduct(id, productData);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while updating product' });
    }
};

const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await deleteProduct(id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while deleting product' });
    }
};

export { addProduct, listProducts, getProductById, updateProduct, deleteProduct };