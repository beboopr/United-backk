import { getAllItems,  getItem, createItems, updateItems } from "./src/routes.js";
import functions from "firebase-functions";
import express from "express";
import cors from "cors";
// import jwt from 'jsonwebtoken'; installed with npm 
// import { userLogin, addNewUser, updateUser} from "./src/users.js";
// import { isUserReallyUser } from "./src/middleware.js";

//variables
const app = express();
app.use(cors());
app.use(express.json())

app.get('/items', getAllItems)
app.get('/items/:uid', getItem)
app.post('/items', createItems)
app.patch('/items/:uid', updateItems)
// app.delete('/items/:uid', deleteItem)

export const api = functions.https.onRequest(app);