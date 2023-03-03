import axios from 'axios'

const api = process.env.REACT_APP_API_KEY
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&q=`
const getAll = (city) => {
    const request = axios.get(`${url}${city}`)
    return request.then(response => response.data )
}

export default getAll;