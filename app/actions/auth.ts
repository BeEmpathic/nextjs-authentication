"use server";
import clientPromise from "@/db/mongodb";
import bcrypt from "bcryptjs";

const login = async (state: unknown, formData: FormData) => {
  try {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      return { error: "Missing username or password" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = { username, hashedPassword };

    const client = await clientPromise;
    const db = client.db("fileuploadnextjs");
    const result = await db.collection("users").find({ username });

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    console.log("Is password valid?: ", isPasswordValid);

    return { success: true };
  } catch (error) {
    console.error("Failed to insert document: ", error);
    throw error;
  }
};

export { login };
