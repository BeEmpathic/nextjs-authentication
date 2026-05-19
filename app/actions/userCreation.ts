"use server";
import clientPromise from "@/db/mongodb";
import bcrypt from "bcryptjs";

const createUser = async (state: unknown, formData: FormData) => {
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

export default createUser;
