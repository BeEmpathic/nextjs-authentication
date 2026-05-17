import Image from "next/image";

export default function Home() {
  return (
    <div className="flex margin-auto items-center justify-center bg-background text-foreground w-full min-h-dvh">
      <form className="inset-shadow-lg shadow-purple-400 rounded-lg bg-[#F0FFC2] flex flex-col p-8 border min-h-1/3 broder-black gap-5">
        <div className="flex flex-col">
          <label htmlFor="username">Username: </label>
          <input className="border border-black" type="text" name="username" />
        </div>
        <div className="border border-black flex flex-col">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" />
        </div>

        <button className="bg-[#EAE6BC] p-3 rounded-full border border-black">
          Login Master!
        </button>
      </form>
    </div>
  );
}
