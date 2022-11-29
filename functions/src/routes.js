import { ObjectBuilder } from "firebase-functions/v1/storage";
import dbConnect from "./dbConnect";

//Add Route
export function createItems(req, res) {
  // connect to Firestore
  const db = dbConnect()
  // add a new doc to coffees collection
  db.collection('items').add(req.body)
  // send back a response (err / not)
    .then(doc => res.status(201).send({ success: true, message: 'Created items: ' + doc.id }))
    .catch(err => res.status(500).send({ success: false, message: err }))
  }
  

//Delete items
export function getALlitems(req, res) {
  const db = dbConnect()
  db.collection('items').get()
  .then(collection => {
    const itemsList = collection.docs.map(doc => doc.data())
    res.send(itemsList)
  })
  .catch(err => res.status(500).send({ success: false, message: err }))
}