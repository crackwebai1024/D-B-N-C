import React, { useState } from "react";
import { getCityData, getWeatherData } from "../service/weather";
import styles from "./Fifth.module.css";

const Fifth = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const handleInputCity = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = () => {
    setError("");
    getCityData(city).then((res) => setCities(res.data));
  };
  const handleDate = (e) => {
    console.log(e);
    setError("");
    setDate(e.target.value);
  };
  const handleGetWeather = (woeid) => {
    if (date) {
      let arr = date.split("-");
      let arrDate = `${arr[0]}/${arr[1]}/${arr[2]}`;
      getWeatherData(woeid, arrDate).then((res) => {
        setWeatherData(res.data);
        setShowDetail(true);
      });
    } else {
      setError("Please select valid date");
    }
  };
  return (
    <div className="wrapper">
      {error && <p className={styles.error}>{error}</p>}
      {!showDetail ? (
        <>
          <div className={styles.search}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input_city}
                value={city}
                onChange={handleInputCity}
              />
              <input
                className={styles.inputDate}
                value={date}
                type="date"
                onChange={handleDate}
              />
            </div>
            <button className={styles.searchBtn} onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className={styles.table}>
            <table>
              <thead>
                <th>title</th>
                <th>location type</th>
                <th>woeid</th>
                <th>lattitude</th>
                <th>longitude</th>
              </thead>
              <tbody>
                {cities.map((item, idx) => (
                  <tr onClick={() => handleGetWeather(item.woeid)}>
                    <td>{item.title}</td>
                    <td>{item.location_type}</td>
                    <td>{item.woeid}</td>
                    <td>{item.latt_long.split(",")[0]}</td>
                    <td>{item.latt_long.split(",")[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className={styles.weatherData}>
          <button
            className={styles.backBtn}
            onClick={() => setShowDetail(false)}
          >
            go back
          </button>
          <table>
            <thead>
              <th>Weather state</th>
              <th>Wind direction</th>
              <th>min</th>
              <th>max</th>
              <th>temp</th>
              <th>Wind speed</th>
              <th>Wind direction</th>
              <th>Air pressure</th>
              <th>Humidity</th>
              <th>Visibility</th>
            </thead>
            <tbody>
              {weatherData.map((item, index) => (
                <tr>
                  <td>{item.weather_state_name}</td>
                  <td>{item.wind_direction_compass}</td>
                  <td>{item.min_temp || "--"}</td>
                  <td>{item.max_temp || "--"}</td>
                  <td>{item.the_temp || "--"}</td>
                  <td>{item.wind_speed || "--"}</td>
                  <td>{item.wind_direction || "--"}</td>
                  <td>{item.air_pressure || "--"}</td>
                  <td>{item.humidity || "--"}</td>
                  <td>{item.visibility || "--"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Fifth;
