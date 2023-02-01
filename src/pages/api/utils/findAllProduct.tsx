import connectToDatabase from "../connectToDatabase";

export default async (request, response) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  async function getProducts() {
    // const products = await collection.findOne({"name": "picole sabor chocolate"})
    const products = await collection.findOne({"stars": "2"})
    console.log(products)
    return products
  }

  try {
    const products = await getProducts()
    response.json(products)

    // Store hash in your password DB.
  } catch (err) {
    response.status(500).send(err.message);
  }
};