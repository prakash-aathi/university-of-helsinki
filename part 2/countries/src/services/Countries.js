import axios from "axios";

const getCountries = () => {
    const url = "https://restcountries.com/v3.1/all";
    return axios.get(url).then(response => response.data);
}

export default getCountries;