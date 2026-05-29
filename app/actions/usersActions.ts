"use server";
import clientPromise from "@/db/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

const userLogin = async (state: unknown, formData: FormData) => {
  try {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      return { error: "Missing username or password" };
    }

    const client = await clientPromise;
    const db = client.db("fileuploadnextjs");

    const result = await db
      .collection("users")
      .find({ username: username })
      .toArray();

    if (result.length <= 0) {
      return { success: false, error: "There is no user with that username!" };
    }

    const isPasswordValid = await bcrypt.compare(password, result[0].password);

    if (!isPasswordValid) return { success: false, error: "Wrong password!" };

    await createSession(result[0]._id);
  } catch (error) {
    console.error("Failed to insert document: ", error);
    throw error;
  }
  redirect("/userpage");
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

    const result = await db.collection("users").insertOne({
      username: username,
      plainPassword: password,
      password: hashedPassword,
    });

    return { success: true, error: null };
  } catch (error: any) {
    if (error.code === 11000)
      return { success: false, error: "Username has to be unique!" };

    console.error("Failed to insert document: ", error);
    throw error;
  }
};

interface UserDocument {
  _id: ObjectId;
  username: string;
  plainPassword: string;
  password: string;
}

type UserList = {
  _id: string;
  username: string;
  plainPassword: string;
  password: string;
};

const usersGetAll = async (): Promise<UserList[]> => {
  try {
    const client = await clientPromise;
    const db = client.db("fileuploadnextjs");

    const result: Array<UserDocument> = await db
      .collection<UserDocument>("users")
      .find()
      .toArray();

    const userLsit = result.map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));

    return userLsit;
  } catch (error: any) {
    console.error("Database error failed to get users", error);
    throw error;
  }
};

const logut = async () => {
  await deleteSession();
  redirect("/");
};

export { userLogin, userCreate, usersGetAll };
