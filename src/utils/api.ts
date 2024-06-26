import axios from "axios";

export const getCountries = ({ endpoint, searchText }: {
    endpoint: string,
    searchText?: string,
}) => axios.get(`https://countries-p4z0.onrender.com/v3.1/${endpoint ? `${endpoint}/${searchText ?? ""}` : ``}`).then(({ data }) => data);