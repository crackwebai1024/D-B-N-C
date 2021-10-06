import axios from "axios";

export const getCityData = (city) => {
  return axios.get(
    `https://www.metaweather.com/api/location/search/?query=${city}`
  );
};

export const getWeatherData = (woeid, date) => {
  return axios.get(`https://www.metaweather.com/api/location/${woeid}/${date}`);
};
