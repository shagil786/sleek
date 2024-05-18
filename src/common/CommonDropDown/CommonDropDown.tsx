import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCloseOutside from "../../utils/useCloseOutside";

interface CommonDropDownProps {
  label: string;
  options?: Array<string | object>;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<object>>;
  dropdownBy?: string;
}

const CommonDropDown: React.FC<CommonDropDownProps> = ({
  label,
  options,
  value,
  setValue,
}) => {
  const { ref, isOpen, setIsOpen } = useCloseOutside<HTMLDivElement>();
  const handleSelect = (e: any, each: any) => {
    e?.preventDefault();
    setValue((prev: string) => (prev === each ? null : each));
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-1/2 md:w-[25vmin]" ref={ref}>
      <div
        className="flex justify-between items-center px-4 h-[48px] bg-white dark:bg-[#2B3844] drop_shadow text-[14px] text-[14px] dark:text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{value ?? label}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isOpen && (
        <div className="absolute text-[14px] h-[20vmin] overflow-auto bg-white dark:bg-[#2B3844] translate-y-2 w-full p-2 md:p-4 flex flex-col gap-2 drop_shadow dark:text-white">
          {options?.map((each: any, index: number) => (
            <p
              key={index}
              className="cursor-pointer flex justify-between items-center"
              onClick={(e) => handleSelect(e, each)}
            >
              <span>{each}</span>
              {each === value && (
                <FontAwesomeIcon icon={faCheck} className="text-xs" />
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonDropDown;
