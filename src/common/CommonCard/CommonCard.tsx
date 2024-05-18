import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DeveloperDataContext } from "../../utils/appContext";

interface CommonCardProps {
  data: any;
}

const CommonCard: React.FC<CommonCardProps> = ({ data }) => {
  const navigate = useNavigate();
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const handleNavigate = () => {
    setAppData({ ...appData, data });
    navigate(`/description`);
  };
  return (
    <div
      className="drop_shadow dark:text-[#fff] bg-white dark:bg-[#2B3844] border-box lg:w-[17vw] md:w-[25vw] sm:w-[40vw] w-[75vw] h-[35vh] cursor-pointer hover:drop-shadow-lg hover:translate-y-1 transition-all duration-200"
      onClick={handleNavigate}
    >
      <img
        className="w-full h-[17vh] object-fill object-center"
        src={data?.flags?.svg}
        alt={data?.flags?.alt}
        width={200}
        height={400}
      />
      <div className="p-4 w-full flex flex-col gap-2">
        <h1 className="font-bold">{data?.name?.common}</h1>
        <div className="text-sm font-semibold">
          <p>
            Population: <span className="font-normal">{data?.population}</span>
          </p>
          <p>
            Region: <span className="font-normal">{data?.region}</span>
          </p>
          <p>
            Capital: <span className="font-normal">{data?.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
