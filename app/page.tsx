"use client";
import BouncingNavButton from "@/components/BouncingButton";
import LoginRegisterForm from "@/components/LoginRegisterForm";

// TODOS FOR THIS PROJECT !!!!!!:

// - Export the hidden button to separate comopnent
// - finish using css for the hidden button to work you don't need JS for it just skill it
// - Make so the list of users is hidden behind the loign/register form and them make it so it pops out to the right side from behind the login / register form
// - Think about checking how it was done that one component could change without the whole website reoloading something like this I think it was working on links to maybe group
// - Add endless amount of todos, so the project takes one year to almost finish,
//  then leave it behind unfinished to learn something that won't get you a job
// - make so it shows you if you made an user or not, maybe show somewhere avaiable users

// - add mongoose, maybe

// - Code the authenticatoin logic and then finish the design
// - use zod I guess to check the inputs I still don't know why would you use zod for it
// - Try making external classes for inputs
// - Finish styling:
// -  Make it so it looks better

// - check why after changing the form the design flick a bit

export default function Home() {
  return (
    <div className="flex flex-col">
      <LoginRegisterForm loginOrRegister={true} />
      <BouncingNavButton label="Registration" targetRoute="/registration" />
    </div>
  );
}
