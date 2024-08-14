import { Router } from "express";
import createCategory from "../controllers/category/createCategory.js";
import getCategory from "../controllers/category/getCategory.js";
import updateCategory from "../controllers/category/updateCategory.js";
import deleteCategory from "../controllers/category/deleteCategory.js";
import getItemsByCategory from "../controllers/category/getItemsByCategory.js";

const categoryRouter = Router();

categoryRouter.route('/').post(createCategory);
categoryRouter.route('/').get(getCategory);
categoryRouter.route('/update/:name').put(updateCategory);
categoryRouter.route('/delete/:name').delete(deleteCategory);
categoryRouter.route('/:name/items').get(getItemsByCategory);

export default categoryRouter;