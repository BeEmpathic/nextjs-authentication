"use server";
import bcrypt from "bcryptjs";

const login = async (state: unknown, formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);
};

export { login };
