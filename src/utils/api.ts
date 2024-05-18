import axios from "axios";

export const getCountries = ({ endpoint, searchText }: {
    endpoint: string,
    searchText?: string,
}) => axios.get(`https://restcountries.com/v3.1/${endpoint ? `${endpoint}/${searchText ?? ""}` : ``}`).then(({ data }) => data);