"use server";

import { SignJWT, jwtVerify } from "jose";
import clientPromise from "@/db/mongodb";
import { cookies } from "next/headers";

import { ObjectId } from "mongodb";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

const encrypt = async (payload: { sessionId: string; expiresAt: Date }) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
};

const client = await clientPromise;
const db = client.db("fileuploadnextjs");

const decrypt = async (session: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("Failed to verify session", error);
  }
};

const createSession = async (id: ObjectId) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const data = await db.collection("sessions").insertOne({
    userId: id,
    expiresAt,
    expireAfterSeconds: 0,
  });

  const sessionId = data.insertedId.toString();

  const session = await encrypt({ sessionId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
};

const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};

export { encrypt, decrypt, createSession, deleteSession };
