import { Router } from "express";
import { addProduct, listProducts, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";

const ProductRouter = Router();

ProductRouter.get("/", (req, res) => {
    res.send("Product route is working!");
});

ProductRouter.post("/add", addProduct);

ProductRouter.get("/list", listProducts);

ProductRouter.get("/:id", getProductById);

ProductRouter.put("/:id", updateProduct);

ProductRouter.delete("/:id", deleteProduct);

export default ProductRouter;