"use client";

import { useActionState } from "react";
import { userLogin, userCreate } from "@/app/actions/usersActions";
import UsersAllList from "./AllUsersList";

const LoginRegisterForm = ({
  loginOrRegister = true,
}: {
  loginOrRegister: boolean;
}) => {
  let ActionStateInitialValue = userLogin;

  if (loginOrRegister === true) {
    ActionStateInitialValue = userLogin;
  } else if (loginOrRegister === false) {
    ActionStateInitialValue = userCreate;
  }
  const [state, action, pending] = useActionState(
    ActionStateInitialValue,
    undefined,
  );

  return (
    <form
      action={action}
      className="z-20 min-w-lg inset-shadow-xl shadow-purple-400 rounded-2xl bg-[#F0FFC2] flex flex-col p-8 border min-h-1/3 gap-5"
    >
      <h1 className="text-center font-bold">
        {loginOrRegister
          ? "Welcome home Master, please Login!"
          : "User creation!"}
      </h1>
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
      <UsersAllList />
    </form>
  );
};

export default LoginRegisterForm;
