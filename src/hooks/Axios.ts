import Axios from "axios";
import Cookies from "js-cookie";

const axios = Axios.create({
  baseURL: "https://api.spotify.com/v1",
  timeout: 150000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    Authorization: `Bearer ${Cookies.get("spotifyAuthToken")}`,
  },
});

export { axios };
