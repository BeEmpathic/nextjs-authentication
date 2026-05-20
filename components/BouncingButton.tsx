"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// And there goes a question why the hell I thought about it?
// And why the hell I'm coding this?
// And why the hell I think that looking on Ai's code with this is a good idea.
// We will see who this will workout

interface BouncingNavButtonProps {
  label: string;
  targetRoute: string;
}

const BouncingNavButton = ({ label, targetRoute }: BouncingNavButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const colors = [
    "bg-pink-500 hover:bg-pink-600 active:bg-pink-700",
    "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
    "bg-green-500 hover:bg-green-600 active:bg-green-700",
    "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700",
    "bg-purple-500 hover:bg-purple-600 active:bg-purple-700",
    "bg-orange-500 hover:bg-orange-600 active:bg-orange-700",
  ];
  const [colorIndex, setColorIndex] = useState(0);
};

export default BouncingNavButton;
