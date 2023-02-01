import connectToDatabase from "../connectToDatabase";

export default async (request, response) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  try {
    const products =  await collection.find({}).toArray()
    console.log(products)
    response.json(products)
    return products

    // Store hash in your password DB.
  } catch (err) {
    response.status(500).send(err.message);
  }
};