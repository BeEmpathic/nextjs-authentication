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

const BouncingNavButton = ({
  label = "sexy button",
  targetRoute = "/",
}: BouncingNavButtonProps) => {
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

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let posX = Math.random() * (window.innerWidth - 150);
    let posY = Math.random() * (window.innerHeight - 50);

    // The speed of the button
    let speedX = 3;
    let speedY = 3;

    let animationFrameId: number;

    const updatePosition = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const rect = button.getBoundingClientRect();
      const btnWidth = rect.width;
      const btnHeight = rect.height;

      posX += speedX;
      posY += speedY;

      let hitWall = false;

      // Left / Right wall collisons
      if (posX + btnWidth >= screenWidth) {
        posX = screenWidth - btnWidth;
        speedX = -speedX;
        hitWall = true;
      } else if (posX <= 0) {
        posX = 0;
        speedX = -speedX;
        hitWall = true;
      }

      // Top / bottom collisons
      if (posY + btnHeight >= screenHeight) {
        posY = screenHeight - btnHeight;
        speedY = -speedY;
        hitWall = true;
      } else if (posY <= 0) {
        posY = 0;
        speedY = -speedY;
        hitWall = true;
      }

      // change color logic
      if (hitWall) {
        setColorIndex((prev) => (prev + 1) % colors.length);
      }

      button.style.left = `${posX}px`;
      button.style.top = `${posY}px`;

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    // clean up
    return () => cancelAnimationFrame(animationFrameId);
  }, [colors.length]);

  return (
    <button
      ref={buttonRef}
      onClick={() => router.push(targetRoute)}
      className={`fixed z-50 px-6 py-3 rounded-lg text-white font-bold shadow-2xl border-white tranition-colors duration-150 select-none cursor-pointer`}
      style={{ willChange: "transfrom, top, left" }} // optmalization by Ai
    >
      <span className={`inline-block ${colorIndex} px-4 py-2 rounded`}>
        {label}
      </span>
    </button>
  );
};

export default BouncingNavButton;
