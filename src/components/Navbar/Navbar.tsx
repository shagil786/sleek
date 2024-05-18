import React from "react";
import { useDarkMode } from "../../utils/useDarkMode";
import darkIcon from "../../assets/images/dark.svg";
import lightIcon from "../../assets/images/light.svg";

const Navbar = () => {
  const { colorTheme, setTheme } = useDarkMode();

  return (
    <div className="fixed w-full flex justify-between items-center bg-white dark:bg-[#2b3844] dark:text-white px-4 py-4 md:px-20 md:py-6 drop-shadow-md">
      <h1 className="text-[20px] font-bold">Where in the world?</h1>
      <div className="flex gap-2 items-center font-semibold">
        <img
          src={colorTheme === "dark" ? lightIcon : darkIcon}
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
        <span className="text-base">Dark Mode</span>
      </div>
    </div>
  );
};

export default Navbar;
