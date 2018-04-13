import axios from "axios";

const API_KEY = "a7db10763d3bde2e7c595d508be4f8ab";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SWITCH_BAR = "SWITCH_BAR";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},tr&units=metric`;
  const request = axios.get(url);
  //console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
