import connectToDatabase from "../connectToDatabase";

export default async (request, response) => {
  const data = request.body;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("users");

  // Store hash in your password DB.
  await collection.insertOne({
    name: data.name,
    price: data.price,
    stars: data.stars,
    img: data.img,
  });

  return response.status(201).json({ ok: true });
};