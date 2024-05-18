import React, { useContext, useEffect, useState } from "react";
import { DeveloperDataContext } from "../../utils/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../../utils/api";

const Dashboard = () => {
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const [borderCountries, setBorderCountries] = useState<Array<string>>([]);
  const navigate = useNavigate();

  const countryData = async ({
    endpoint,
    params,
  }: {
    endpoint: string;
    params?: string;
  }) => {
    try {
      const response = await getCountries({ endpoint, searchText: params });
      return response;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const fetchBorderCountries = async () => {
      const countries = await Promise.all(
        appData?.data?.borders.map((border: string) =>
          countryData({ endpoint: "alpha", params: border })
        )
      );
      setBorderCountries(countries);
    };

    if (appData?.data?.borders) fetchBorderCountries();
  }, [appData?.data?.borders]);

  const DisplayBorders = ({ borderCountries }: { borderCountries: any[] }) => (
    <div className="flex gap-4 flex-wrap">
      {borderCountries?.map((each: any, index: number) => (
        <div className="shadow-custom dark:shadow-dark py-1 px-4" key={index}>
          {each?.[0]?.name?.common}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative dark:text-white px-4 md:px-20 pt-4 md:pt-6 h-full flex items-center">
      <div
        className="absolute top-2 md:top-10 flex gap-1 items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </div>
      <div className="flex justify-between md:flex-row flex-col top-2 gap-8 md:gap-20 h-[calc(100%-32px)] md:h-auto overflow-auto">
        <div className="w-full">
          <img
            src={appData?.data?.flags?.svg}
            alt={appData?.data?.flags?.alt}
          />
        </div>
        <div className="w-full justify-center flex flex-col gap-6">
          <h1 className="text-xl font-bold">{appData?.data?.name?.common}</h1>
          <div className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <div className="flex flex-col gap-2">
                {appData?.data?.name?.nativeName ? (
                  <p className="font-bold flex gap-2">
                    <span>Native Name :</span>
                    <span className="font-normal">
                      {
                        appData?.data?.name?.nativeName[
                          Object.keys(appData?.data?.name?.nativeName)?.[0]
                        ]?.official
                      }
                    </span>
                  </p>
                ) : null}
                {appData?.data?.population ? (
                  <p className="font-bold flex gap-2">
                    <span>Population :</span>
                    <span className="font-normal">
                      {appData?.data?.population}
                    </span>
                  </p>
                ) : null}
                {appData?.data?.region ? (
                  <p className="font-bold flex gap-2">
                    <span>Region :</span>
                    <span className="font-normal">{appData?.data?.region}</span>
                  </p>
                ) : null}
                {appData?.data?.subregion ? (
                  <p className="font-bold flex gap-2">
                    <span>Sub Region :</span>
                    <span className="font-normal">
                      {appData?.data?.subregion}
                    </span>
                  </p>
                ) : null}
                {appData?.data?.capital ? (
                  <p className="font-bold flex gap-2">
                    <span>Capital :</span>
                    <span className="font-normal">
                      {appData?.data?.capital}
                    </span>
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 md:ml-10">
                {appData?.data?.tld ? (
                  <p className="font-bold flex gap-2">
                    <span>Top Level Domain :</span>
                    <span className="font-normal">
                      {appData?.data?.tld?.[0]}
                    </span>
                  </p>
                ) : null}
                {appData?.data?.currencies ? (
                  <p className="font-bold flex gap-2">
                    <span>Currencies :</span>
                    <span className="font-normal">
                      {Object.keys(appData?.data?.currencies)?.[0]}
                    </span>
                  </p>
                ) : null}
                {appData?.data?.languages ? (
                  <p className="font-bold flex gap-2">
                    <span>Languages :</span>
                    <span className="font-normal">
                      {Object.values(appData?.data?.languages)?.join(", ")}
                    </span>
                  </p>
                ) : null}
              </div>
            </div>
            {borderCountries ? (
              <div className="flex items-center gap-4">
                <span>Border Countries:</span>
                <DisplayBorders borderCountries={borderCountries} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
