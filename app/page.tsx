import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground w-full min-h-dvh">
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login Master!</button>
      </form>
    </div>
  );
}
