"use client";
import { useActionState } from "react";
import { userLogin } from "@/app/actions/usersActions";

export default function Home() {
  // TODOS FOR THIS PROJECT !!!!!!:
  // - Fix types cause type script has some huge problem to the database after that you my reconsider installing mongoose caues it's good just fucking do it and stop dogeing that
  // - Make so all the actions are in one file called usersActions
  // - make so it shows you if you made an user or not, maybe show somewhere avaiable users

  // - add mongoose maybe
  // - Understand how the hashing works in next.js and how to check if the user gave correct password
  // - Code the authenticatoin logic and then finish the design
  // - use zod I guess to check the inputs I still don't know why would you use zod
  // - Try making external classes for inputs
  // - Finish styling:
  // -  Make it so it looks better
  // - Make a place to show the error
  // - Finish styling the button
  // - Add padding to the inputs
  const [state, action, pending] = useActionState(userLogin, undefined);
  if (state) console.log(state);
  return (
    <div className="flex margin-auto items-center justify-center bg-background text-foreground w-full min-h-dvh">
      <form
        action={action}
        className="min-w-lg inset-shadow-xl shadow-purple-400 rounded-2xl bg-[#F0FFC2] flex flex-col p-8 border min-h-1/3 gap-5"
      >
        <h1 className="text-center font-bold">Welcome Home Master!</h1>
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
          Login Master!
        </button>
      </form>
    </div>
  );
}
