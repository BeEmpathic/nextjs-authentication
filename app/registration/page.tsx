"use client";
import BouncingNavButton from "@/components/BouncingButton";
import LoginRegisterForm from "@/components/LoginRegisterForm";

export default function Home() {
  return (
    <>
      <LoginRegisterForm loginOrRegister={false} />
      <BouncingNavButton label="login" targetRoute="/" />
    </>
  );
}
