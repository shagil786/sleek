import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CommonSearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CommonSearch: React.FC<CommonSearchProps> = ({ value, setValue }) => {
  return (
    <div className="relative bg-white dark:bg-[#2B3844] h-[48px] drop_shadow text-[14px] w-full md:w-[50vmin]">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute p-4 dark:text-white"
      />
      <input
        placeholder="Search for a country"
        type="text"
        name="search"
        className="border-0 w-full pl-12 h-full bg-white dark:bg-[#2B3844] dark:text-white dark:placeholder:text-white"
        value={value}
        onChange={(e) => setValue(e?.target?.value)}
      />
    </div>
  );
};

export default CommonSearch;
