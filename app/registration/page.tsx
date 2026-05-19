"use client";
import { useActionState } from "react";
import { userCreate, usersGetAll } from "@/app/actions/usersActions";

export default function Home() {
  const [state, action, pending] = useActionState(userCreate, undefined);
  if (state) console.log(state);
  return (
    <div className="flex margin-auto items-center justify-center bg-background text-foreground w-full min-h-dvh">
      <form
        action={action}
        className="min-w-lg inset-shadow-xl shadow-purple-400 rounded-2xl bg-[#F0FFC2] flex flex-col p-8 border min-h-1/3 gap-5"
      >
        <h1 className="text-center font-bold">User creation!</h1>
        <div className="flex flex-col">
          <label htmlFor="username">Username: </label>
          <input className="border border-black" type="text" name="username" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            className="border border-black"
            type="password"
            name="password"
          />
        </div>

        <button className="active:bg-[#09414A] hover:bg-[#13636C] transition-all text-white bg-[#35858E] p-3 rounded-full border border-black hover:cursor-pointer duration-150">
          Add user!
        </button>
      </form>
    </div>
  );
}
