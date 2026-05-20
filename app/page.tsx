"use client";
import LoginRegisterForm from "@/components/LoginRegisterForm";

// TODOS FOR THIS PROJECT !!!!!!:
// - Add button which moves like DVDplayer save screen logo as swap between login and register pages
// - Think about checking how it was done that one component could change without the whole website reoloading something like this I think it was working on links to maybe group
// - Make so the list of users is hidden behind the loign/register form and them make it so it pops out to the right side from behind the login / register form
// - Add endless amount of todos, so the project takes one year to almost finish,
//  then leave it behind unfinished to learn something that won't get you a job
// - Make so all the actions are in one file called usersActions
// - make so it shows you if you made an user or not, maybe show somewhere avaiable users

// - add mongoose, maybe

// - Code the authenticatoin logic and then finish the design
// - use zod I guess to check the inputs I still don't know why would you use zod
// - Try making external classes for inputs
// - Finish styling:
// -  Make it so it looks better
// - Make a place to show the error

export default function Home() {
  return <LoginRegisterForm loginOrRegister={true} />;
}
