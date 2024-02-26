"use client";
import { usePathname } from "next/navigation";

interface CurrentWindowProps {}

const CurrentWindow: React.FC<CurrentWindowProps> = () => {
  const path = usePathname();

  let currentWindow = "";

  if (path === "/home") {
    currentWindow = "Home";
  } else if (path === "/habits") {
    currentWindow = "Habits";
  } else if (path === "/timer") {
    currentWindow = "Timer";
  } else if (path === "/tasks") {
    currentWindow = "Tasks";
  }

  return <h1 className="font-bold text-3xl">{currentWindow}</h1>;
};

export default CurrentWindow;
