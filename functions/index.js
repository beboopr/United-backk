import { getALlitems, createItems, deleteitems } from "items.js";
import functions from "firebase-functions";
import express from "express";
// import cors from "cors";
import items from "items.js"

const PORT = 3030
const app = express();
app.use(cors());

app.get('/items', getALlitems);
app.add('/items', createItems);
// app.delete('/items/:itemsId', deleteitems);

app.listen(PORT, () => console.log(`Listening on http:localhost:${PORT}`));

export const api = functions.https.onRequest(app);
