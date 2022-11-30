import { getAllItems,  getItem, createItems, updateItems, deleteItem } from "./src/routes.js";
import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

app.get('/items', getAllItems)
app.get('/items/:uid', getItem)
app.post('/items', createItems)
app.patch('/items/:uid', updateItems)
app.delete('/items/:uid', deleteItem)

export const api = functions.https.onRequest(app);