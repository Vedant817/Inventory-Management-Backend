import { Router } from "express";
import createItem from "../controllers/items/createItem.js";
import getItems from "../controllers/items/getItems.js";
import updateItem from '../controllers/items/updateItem.js'
import deleteItem from "../controllers/items/deleteItem.js";

const itemRouter = Router();

itemRouter.route('/').post(createItem);
itemRouter.route('/').get(getItems);
itemRouter.route('/update/:name').put(updateItem);
itemRouter.route('/delete/:name').delete(deleteItem);

export default itemRouter;