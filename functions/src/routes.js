import dbConnect from "../dbConnect.js";

//Get AllItems / WORKING
export async function getAllItems(req, res) {
  const db = dbConnect();
  const collection = await db.collection("items").get()
    .then((collection) => { // creates a promise
      //cretes a variable to map through the collection to get all data 
      const items = collection.docs.map((doc) => ({...doc.data(),itemsId: doc.id,}));
      res.send(items);
    })
    .catch((err) => res.status(500).send(err));
}

//Get items // WORKING
export async function getItem(req, res) {
  const { uid } = req.params; // im retreving the parameters with the url
  const db = dbConnect();
  const doc = await db.collection("items").doc(uid).get();
  res.status(202).send({ success: true, message: doc.data() });
}

//Post Route / WORKING
export function createItems(req, res) {
  // connect to Firestore
  const db = dbConnect();
  // add a new doc to coffees collection
  db.collection("items")
    .add(req.body)
    // send back a response (err / not)
    .then((doc) =>
      res
        .status(201)
        .send({ success: true, message: "Created items: " + doc.id })
    )
    .catch((err) => res.status(500).send({ success: false, message: err }));
}

//Patch items //  WORK IN PROGRESS
export async function updateItems(req, res) {
  const { uid } = req.params;
  const db = dbConnect();
  const doc = await db
    .collection("items")
    .doc(uid)
    .update(req.body)
    .then((doc) => {
  // res.status(201)
  // res.send({ success: true, message: "updated items: " + doc.data() });
    res.send({ success: true, message: "item is updated"})
  })
    .catch((err) => res.status(500).send({ success: false, message: err }));
}

// Delete item // WORK IN PROGRESS
export function deleteItem(req, res) {
  const db = dbConnect();
  const { uid } = req.params;
  db.collection("items").doc(uid).delete().then(() =>
      res.status(201).send({ success: true, message: "Item deleted:" })
    )
    .catch((err) => res.status(500).send({ success: false, message: err }));
}