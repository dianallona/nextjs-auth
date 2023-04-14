import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://diana-llona:Q6DyYEz9ysk19VBw@cluster0.ono5ekb.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
}

export default connectToDatabase;
