import React, { useEffect, useState } from "react";
import CommonSearch from "../../common/CommonSearch/CommonSearch";
import CommonDropDown from "../../common/CommonDropDown/CommonDropDown";
import { getCountries } from "../../utils/api";
import CommonCard from "../../common/CommonCard/CommonCard";
import { debounce } from "../../utils/useDebounce";

const Home = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [options, _] = useState([
    "Europe",
    "Americas",
    "Africa",
    "Oceania",
    "Asia",
    "Antarctic",
  ]);
  const [dropdown, setDropdown] = useState<any>();

  const countryData = ({
    endpoint,
    params,
  }: {
    endpoint: string;
    params?: string;
  }) => {
    console.log("hi");
    getCountries({ endpoint: endpoint, searchText: params })
      .then((response) => {
        setCardData(response);
        setLoading(false);
      })
      .catch((error) => {
        setCardData([]);
        setLoading(false);
      });
  };

  // initial fetach
  useEffect(() => {
    countryData({ endpoint: "all" });
  }, []);

  // added debounce while searching
  const debounceSearch = debounce(countryData, 500);

  // search conuntry
  useEffect(() => {
    if (value) debounceSearch({ endpoint: "name", params: value });
  }, [value]);

  // filter by region
  useEffect(() => {
    if (dropdown) countryData({ endpoint: "region", params: dropdown });
    else countryData({ endpoint: "all" });
  }, [dropdown]);

  return (
    <>
      <div className="px-4 md:px-20 pt-4 md:pt-6">
        <div className="flex justify-between items-center flex-wrap gap-y-4 pb-4 md:pb-8">
          <CommonSearch value={value} setValue={setValue} />
          <CommonDropDown
            label="Filter by Region"
            value={dropdown}
            options={options}
            setValue={setDropdown}
          />
        </div>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-3 md:max-lg:px-[2vmin] lg:max-xl:px-[5vmin] px-[3vmin] lg:grid-cols-4 h-[72vh] overflow-auto gap-y-12">
        {cardData?.map((each, index) => (
          <CommonCard key={index} data={each} />
        ))}
      </div>
    </>
  );
};

export default Home;
