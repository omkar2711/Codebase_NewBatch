import Product from "../model/productModel.js";

const addProductService = async (productData) => {
    try {
        const product = new Product(productData);
        await product.save();
        return { success: true, message: 'Product added successfully' };
    } catch (error) {
        console.error('Error in addProduct:', error);
        throw new Error('Failed to add product'); // You can customize the error message as needed
    }
};

const listProductsService = async () => {
    try {
        const products = await Product.find();
        return { success: true, products };
    } catch (error) {
        console.error('Error in listProducts:', error);
        throw new Error('Failed to list products'); // You can customize the error message as needed
    }
};

const getProductByIdService = async (productId) => {
    try {
        const product = await Product.findById(productId);
        if (product) {
            return { success: true, product };
        } else {
            return { success: false, message: 'Product not found' };
        }
    } catch (error) {
        console.error('Error in getProductById:', error);
        throw new Error('Failed to fetch product'); // You can customize the error message as needed
    }
};

const updateProductService = async (productId, updateData) => {
    try {
        const product = await Product.findByIdAndUpdate(productId, updateData, { new: true });
        if (product) {
            return { success: true, message: 'Product updated successfully', product };
        } else {
            return { success: false, message: 'Product not found' };
        }
    } catch (error) {
        console.error('Error in updateProduct:', error);
        throw new Error('Failed to update product'); // You can customize the error message as needed
    }
};

const deleteProductService = async (productId) => {
    try {
        const product = await Product.findByIdAndDelete(productId);
        if (product) {
            return { success: true, message: 'Product deleted successfully' };
        } else {
            return { success: false, message: 'Product not found' };
        }
    } catch (error) {
        console.error('Error in deleteProduct:', error);
        throw new Error('Failed to delete product'); // You can customize the error message as needed
    }
};

export { addProductService, listProductsService, getProductByIdService, updateProductService, deleteProductService };