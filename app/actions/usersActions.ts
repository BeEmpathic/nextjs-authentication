"use server";
import clientPromise from "@/db/mongodb";
import bcrypt from "bcryptjs";

const userLogin = async (state: unknown, formData: FormData) => {
  try {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      return { error: "Missing username or password" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const client = await clientPromise;
    const db = client.db("fileuploadnextjs");

    // this creates user in database
    // const result = await db
    //   .collection("users")
    //   .insertOne({ username: username, password: hashedPassword });

    // this is trying to get user out of the database ;-;

    const result = await db
      .collection("users")
      .find({ username: username })
      .toArray();

    console.log("The result should be user's object: ", result);
    console.log(result[0].username);

    const isPasswordValid = await bcrypt.compare(password, result[0].password);

    console.log("Is password valid?: ", isPasswordValid);

    return { success: true };
  } catch (error) {
    console.error("Failed to insert document: ", error);
    throw error;
  }
};

const userCreate = async (state: unknown, formData: FormData) => {
  try {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      return { error: "Missing username or password" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const client = await clientPromise;
    const db = client.db("fileuploadnextjs");

    const result = await db
      .collection("users")
      .insertOne({ username: username, password: hashedPassword });

    return { success: true };
  } catch (error) {
    console.error("Failed to insert document: ", error);
    throw error;
  }
};

const usersGetAll = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("fileuploadnextjs");

    const result = await db.collection("users").find();

    return result;
  } catch (error) {
    console.error("Database error failed to get users", error);
    throw error;
  }
};

export { userLogin, userCreate, usersGetAll };
